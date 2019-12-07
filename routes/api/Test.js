const express = require('express')
const router = express.Router()
const axios = require('axios')
var geolocation = require('geolocation')
router.get('/screate', async (req, response) => {
  const sitemap = await axios.post(
    'https://api.webscraper.io/api/v1/sitemap?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
    {
      _id: 'bershka8',
      startUrl: ['https://www.bershka.com/eg/'],
      selectors: [
        {
          id: 'mainCategory',
          type: 'SelectorLink',
          parentSelectors: ['_root'],
          selector: '.hide-mobile .main-menu-element a',
          multiple: true,
          delay: 0
        },
        {
          id: 'item',
          type: 'SelectorText',
          parentSelectors: ['mainCategory'],
          selector:
            'grid-product:nth-of-type(n+16) .product-with-colors a.linkTags',
          multiple: true,
          regex: '',
          delay: 0
        },
        {
          id: 'picture',
          type: 'SelectorImage',
          parentSelectors: ['mainCategory'],
          selector: 'grid-product:nth-of-type(n+54) a img.principalImg',
          multiple: true,
          delay: 0
        }
      ]
    }
  )
  const job = await axios.post(
    'https://api.webscraper.io/api/v1/scraping-job?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
    {
      sitemap_id: sitemap.data.data.id,
      driver: 'fast', // "fast" or "fulljs"
      page_load_delay: 2000,
      request_interval: 2000,
      proxy: 0 // optional. 0 - no proxy, 1 - use proxy. Or proxy id for Scale plan users
    }
  )

  console.log(job.data)
  response.json(job.data.data)
})

router.get('/getdata', async (req, response) => {
  const jobs = await axios.get(
    'https://api.webscraper.io/api/v1/scraping-jobs?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS'
  )
  var result = []
  // console.log(jobs.data.data)
  for (var i = 0; i < jobs.data.data.length; i++) {
    console.log(jobs.data.data[i].id)
    const sData = await axios.get(
      'https://api.webscraper.io/api/v1/scraping-job/' +
        jobs.data.data[i].id +
        '/json?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS'
    )
    result.push(sData.data)
  }

  var finalArray = []
  for (var j = 0; j < result.length; j++) {
    var array = result[j].split('\n')
    for (var i = 0; i < array.length - 1; i++) {
      finalArray.push(JSON.parse(array[i]))
    }
  }
  console.log(result.length)
  response.json(finalArray)
})

router.post('/filterGender', async (req, response) => {
  const gender = req.body.gender

  const data = await getData()
  var result = []
  for (var i = 0; i < data.length; i++) {
    var g = data[i].main_category
    if (g == gender) {
      result.push(data[i])
    }
  }
  // console.log(gender)
  response.json(result)
})
async function getData() {
  const jobs = await axios.get(
    'https://api.webscraper.io/api/v1/scraping-jobs?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS'
  )
  var result = []
  // console.log(jobs.data.data)
  for (var i = 0; i < jobs.data.data.length; i++) {
    console.log(jobs.data.data[i].id)
    const sData = await axios.get(
      'https://api.webscraper.io/api/v1/scraping-job/' +
        jobs.data.data[0].id +
        '/json?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS'
    )
    result.push(sData.data)
  }

  var finalArray = []
  for (var j = 0; j < result.length; j++) {
    var array = result[j].split('\n')
    for (var i = 0; i < array.length - 1; i++) {
      finalArray.push(JSON.parse(array[i]))
    }
  }
  // console.log(finalArray)
  return finalArray
}

module.exports = router
