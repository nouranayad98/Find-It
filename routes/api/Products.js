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
            ".subcategory-menu--current .menu-item--level-2[data-layout='products-category-view'] > a",
          multiple: true,
          delay: 0
        },
        {
          id: 'product',
          type: 'SelectorLink',
          parentSelectors: ['sub_category'],
          selector: 'li:nth-of-type(n+13) a.name',
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
    // {
    //   _id: 'lcw',
    //   startUrl: ['https://www.lcwaikiki.eg/en/'],
    //   selectors: [
    //     {
    //       id: 'main_category',
    //       type: 'SelectorLink',
    //       parentSelectors: ['_root'],
    //       selector: 'a.navigation__link',
    //       multiple: true,
    //       delay: 0
    //     },
    //     {
    //       id: 'product',
    //       type: 'SelectorLink',
    //       parentSelectors: ['main_category'],
    //       selector: '.product-name a',
    //       multiple: true,
    //       delay: 0
    //     },

    //     {
    //       id: 'product_name',
    //       type: 'SelectorText',
    //       parentSelectors: ['product'],
    //       selector: 'h1',
    //       multiple: false,
    //       regex: '',
    //       delay: 0
    //     },
    //     {
    //       id: 'product_price',
    //       type: 'SelectorText',
    //       parentSelectors: ['product'],
    //       selector: 'div.product-detail__sale-price',
    //       multiple: false,
    //       regex: '',
    //       delay: 0
    //     }
    //   ]
    // }
    {
      _id: 'lcc2', //bel pages bs el selectors msh mazboteen
      startUrl: ['https://www.lcwaikiki.eg/en/c/women/?page=[2-30]'],
      selectors: [
        {
          id: 'price',
          type: 'SelectorText',
          parentSelectors: ['_root'],
          selector: 'div:nth-of-type(n+10) span',
          multiple: true,
          regex: '',
          delay: 0
        },
        {
          id: 'img',
          type: 'SelectorImage',
          parentSelectors: ['_root'],
          selector: 'img.product-item-image',
          multiple: true,
          delay: 500
        },
        {
          id: 'product_name',
          type: 'SelectorText',
          parentSelectors: ['_root'],
          selector: 'div:nth-of-type(n+7) p',
          multiple: true,
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
    // {
    //   _id: 'americaneagle',
    //   startUrl: ['https://www.ae.com/intl/en'],    //msh btraga3 el link
    //   selectors: [
    //     {
    //       id: 'main_category',
    //       type: 'SelectorLink',
    //       parentSelectors: ['_root'],
    //       selector: 'a.top-level-link',
    //       multiple: true,
    //       delay: 0
    //     },
    //     {
    //       id: 'sub_category',
    //       type: 'SelectorLink',
    //       parentSelectors: ['main_category'],
    //       selector: '.cms-even-thirds-img-content a',
    //       multiple: true,
    //       delay: 0
    //     },
    //     {
    //       id: 'product',
    //       type: 'SelectorLink',
    //       parentSelectors: ['sub_category'],
    //       selector: 'div:nth-of-type(n+6) a.xm-link-to',
    //       multiple: true,
    //       delay: 0
    //     },
    //     {
    //       id: 'product_name',
    //       type: 'SelectorText',
    //       parentSelectors: ['product'],
    //       selector: 'h1',
    //       multiple: false,
    //       regex: '',
    //       delay: 0
    //     },
    //     {
    //       id: 'product_price',
    //       type: 'SelectorText',
    //       parentSelectors: ['product'],
    //       selector: 'div.product-sale-price',
    //       multiple: false,
    //       regex: '',
    //       delay: 0
    //     }
    //   ]
    // }
    {
      _id: 'american_eagle1', //taree2et seif lesa 3ayza tetgarab
      startUrl: [
        'https://www.ae.com/intl/en/?&mkwid=stpejEDOl_dc|pcrid|113447253256|pkw|american%20eagle%20egypt|pmt|p|slid||pgrid|9610252936|ptaid|kwd-62440276936|&cid=SRC_InternationalBrand_stpejEDOl&pgrid=9610252936&ptaid=kwd-62440276936&intent=&gclid=CjwKCAiAuK3vBRBOEiwA1IMhujoYbNVvx7H4YcKEg4MGfqStbig3O6_ggtWcRSdO3WzcqA-jJp9xXRoC2EIQAvD_BwE'
      ],
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
          id: 'product_img',
          type: 'SelectorImage',
          parentSelectors: ['sub_category'],
          selector: 'img.product-tile-image-hover',
          multiple: true,
          delay: 0
        },
        {
          id: 'product_name',
          type: 'SelectorText',
          parentSelectors: ['sub_category'],
          selector: 'h3.product-name',
          multiple: true,
          regex: '',
          delay: 0
        },
        {
          id: 'product',
          type: 'SelectorLink',
          parentSelectors: ['sub_category'],
          selector: 'img.product-tile-image-hover',
          multiple: true,
          delay: 10
        },
        {
          id: 'product_price',
          type: 'SelectorText',
          parentSelectors: ['sub_category'],
          selector: 'div.product-sale-price',
          multiple: true,
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
  // console.log(jobs.data.data)
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
  response.json(finalArray)
})

async function getData() {
  const jobs = await axios.get(
    'https://api.webscraper.io/api/v1/scraping-jobs?api_token=' +
      process.env.api_token
  )
  var result = []
  // console.log(jobs.data.data)
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
  // console.log(finalArray)
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
  // console.log(gender)
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
  response.json(result)
})
router.get('/getZara', async (req, response) => {
  const data = await getData()
  var result = []
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]['web-scraper-start-url'])
    if (data[i]['web-scraper-start-url'] == 'https://www.zara.com/eg/en/') {
      result.push(data[i])
    }
  }
  response.json(result)
})

//genders : MAN TRF KIDS Kids Women Men Baby Jeans
module.exports = router
