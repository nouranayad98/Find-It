const express = require('express')
const router = express.Router()
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
router.get('/screatezara', async (req, response) => {
  const sitemap = await axios.post(
    'https://api.webscraper.io/api/v1/sitemap?api_token=' +
      process.env.api_token,
    {
      _id: 'zara',
      startUrl: ['https://www.zara.com/eg/en/'],
      selectors: [
        {
          id: 'main_category',
          type: 'SelectorLink',
          parentSelectors: ['_root'],
          selector:
            "li.menu-item--level-1[data-layout='marketing-content-view']:nth-of-type(n+4) > a",
          multiple: true,
          delay: 0
        },
        {
          id: 'sub_category',
          type: 'SelectorLink',
          parentSelectors: ['main_category'],
          selector:
            '.subcategory-menu--current li.menu-item--level-2:nth-of-type(n+4) > a',
          multiple: true,
          delay: 0
        },
        {
          id: 'product',
          type: 'SelectorLink',
          parentSelectors: ['sub_category'],
          selector: "[data-colorcode='712'] div:nth-of-type(2) a",
          multiple: true,
          delay: 0
        },
        {
          id: 'product_name',
          type: 'SelectorText',
          parentSelectors: ['product'],
          selector: 'h1.product-name',
          multiple: false,
          regex: '',
          delay: 0
        },
        {
          id: 'product_price',
          type: 'SelectorText',
          parentSelectors: ['product'],
          selector: 'span.main-price',
          multiple: false,
          regex: '',
          delay: 0
        }
      ]
    }
  )

  const job = await axios.post(
    'https://api.webscraper.io/api/v1/scraping-job?api_token=' +
      process.env.api_token,
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

router.get('/screatelcwakiki', async (req, response) => {
  const sitemap = await axios.post(
    'https://api.webscraper.io/api/v1/sitemap?api_token=' +
      process.env.api_token,
    {
      _id: 'lcw',
      startUrl: ['https://www.lcwaikiki.eg/en/'],
      selectors: [
        {
          id: 'main_category',
          type: 'SelectorLink',
          parentSelectors: ['_root'],
          selector: 'a.navigation__link',
          multiple: true,
          delay: 0
        },
        {
          id: 'product',
          type: 'SelectorLink',
          parentSelectors: ['main_category'],
          selector: 'div:nth-of-type(n+4) .product-name a',
          multiple: true,
          delay: 0
        },
        {
          id: 'product_name',
          type: 'SelectorText',
          parentSelectors: ['product'],
          selector: 'h1',
          multiple: false,
          regex: '',
          delay: 0
        },
        {
          id: 'product_price',
          type: 'SelectorText',
          parentSelectors: ['product'],
          selector: 'div.product-detail__sale-price',
          multiple: false,
          regex: '',
          delay: 0
        }
      ]
    }
  )
  const job = await axios.post(
    'https://api.webscraper.io/api/v1/scraping-job?api_token=' +
      process.env.api_token,
    {
      sitemap_id: sitemap.data.data.id,
      driver: 'fast', // "fast" or "fulljs"
      page_load_delay: 2000,
      request_interval: 2000,
      proxy: 0 // optional. 0 - no proxy, 1 - use proxy. Or proxy id for Scale plan users
    }
  )

  console.log(job.data)
  response.json(job.data)
})

router.get('/screateamericaneagle', async (req, response) => {
  const sitemap = await axios.post(
    'https://api.webscraper.io/api/v1/sitemap?api_token=' +
      process.env.api_token,
    {
      _id: 'americaneagle',
      startUrl: ['https://www.ae.com/intl/en'],
      selectors: [
        {
          id: 'main_category',
          type: 'SelectorLink',
          parentSelectors: ['_root'],
          selector: 'a.top-level-link',
          multiple: true,
          delay: 0
        },
        {
          id: 'sub_category',
          type: 'SelectorLink',
          parentSelectors: ['main_category'],
          selector: '.cms-even-thirds-img-content a',
          multiple: true,
          delay: 0
        },
        {
          id: 'product',
          type: 'SelectorLink',
          parentSelectors: ['sub_category'],
          selector: 'div:nth-of-type(n+17) a.tile-link',
          multiple: true,
          delay: 0
        },
        {
          id: 'product_name',
          type: 'SelectorText',
          parentSelectors: ['product'],
          selector: 'h1',
          multiple: false,
          regex: '',
          delay: 0
        },
        {
          id: 'product_price',
          type: 'SelectorText',
          parentSelectors: ['product'],
          selector: 'div.product-sale-price',
          multiple: false,
          regex: '',
          delay: 0
        }
      ]
    }
  )
  const job = await axios.post(
    'https://api.webscraper.io/api/v1/scraping-job?api_token=' +
      process.env.api_token,
    {
      sitemap_id: sitemap.data.data.id,
      driver: 'fast', // "fast" or "fulljs"
      page_load_delay: 2000,
      request_interval: 2000,
      proxy: 0 // optional. 0 - no proxy, 1 - use proxy. Or proxy id for Scale plan users
    }
  )

  console.log(job.data)
  response.json(job.data)
})

router.get('/getdata', async (req, response) => {
  const jobs = await axios.get(
    'https://api.webscraper.io/api/v1/scraping-jobs?api_token=' +
      process.env.api_token
  )
  var result = []
  for (var i = 0; i < jobs.data.data.length; i++) {
    console.log(jobs.data.data[i].id)
    const sData = await axios.get(
      'https://api.webscraper.io/api/v1/scraping-job/' +
        jobs.data.data[i].id +
        '/json?api_token=' +
        process.env.api_token
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
  response.json({ data: finalArray })
})

async function getData() {
  const jobs = await axios.get(
    'https://api.webscraper.io/api/v1/scraping-jobs?api_token=' +
      process.env.api_token
  )
  var result = []
  for (var i = 0; i < jobs.data.data.length; i++) {
    console.log(jobs.data.data[i].id)
    const sData = await axios.get(
      'https://api.webscraper.io/api/v1/scraping-job/' +
        jobs.data.data[i].id +
        '/json?api_token=' +
        process.env.api_token
    )
    sData.store = jobs.data.data[i].sitemap_name

    result.push(sData.data)
  }

  var finalArray = []
  for (var j = 0; j < result.length; j++) {
    var array = result[j].split('\n')
    for (var i = 0; i < array.length - 1; i++) {
      finalArray.push(JSON.parse(array[i]))
    }
  }
  return finalArray
}

async function filterGender(filter) {
  const gender = filter
  const data = await getData()
  var result = []
  for (var i = 0; i < data.length; i++) {
    var g = data[i].main_category.toLowerCase()
    if (gender == 'man') {
      if (g == gender || g == 'men') {
        result.push(data[i])
      }
    } else {
      if (gender == 'woman') {
        if (g == 'Women') console.log(g)

        if (g == gender || g == 'women') {
          result.push(data[i])
        }
      } else {
        if (g == gender) {
          result.push(data[i])
        }
      }
    }
  }
  return result
}
router.post('/search', async (req, response) => {
  const keyWord = req.body.keyWord.toLowerCase()
  const filter = req.body.filter
  var data = []
  if (filter == '') {
    data = await getData()
  } else {
    data = await filterGender(filter.toLowerCase())
  }
  var result = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].sub_category != undefined) {
      if (data[i].sub_category.toLowerCase().includes(keyWord)) {
        result.push(data[i])
      }
    }
    if (data[i].product_name.toLowerCase().includes(keyWord)) {
      result.push(data[i])
    }
  }
  console.log('T-shirt'.includes('shirt'))
  response.json({ data: result })
})

async function search(keyWord, filter) {
  var data = []
  if (filter == '') {
    data = await getData()
  } else {
    data = await filterGender(filter.toLowerCase())
  }
  var result = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].sub_category != undefined) {
      if (data[i].sub_category.toLowerCase().includes(keyWord)) {
        result.push(data[i])
      }
    }
    if (data[i].product_name.toLowerCase().includes(keyWord)) {
      result.push(data[i])
    }
  }
  return result
}

router.post('/sortByLocation', async (req, response) => {
  const keyWord = req.body.keyWord
  const filter = req.body.filter
  const stores = req.body.stores
  const data = await search(keyWord, filter)
  var result = []
  for (var i = 0; i < stores.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data[j]['web-scraper-start-url'].includes(stores[i])) {
        result.push(data[j])
      }
    }
  }
  response.json({ data: result })
})

//genders : MAN TRF KIDS Kids Women Men Baby
module.exports = router