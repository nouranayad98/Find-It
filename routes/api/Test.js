const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/screatezara', async (req, response) => {
  const sitemap = await axios.post(
      'https://api.webscraper.io/api/v1/sitemap?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
    {
      _id: 'zara506505',
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
          id: 'product_img',
          type: 'SelectorImage',
          parentSelectors: ['sub_category'],
          selector: '._item img._imageLoaded',
          multiple: true,
          delay: 0
        },
        {
          id: 'product_name',
          type: 'SelectorText',
          parentSelectors: ['sub_category'],
          selector: 'a.name',
          multiple: true,
          regex: '',
          delay: 0
        },
        {
          id: 'product_price',
          type: 'SelectorText',
          parentSelectors: ['sub_category'],
          selector: 'span.main-price',
          multiple: true,
          regex: '',
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
  response.json(job.data)
})


// router.get('/screatelcwakiki', async (req, response) => {
//   const sitemap = await axios.post(
//       'https://api.webscraper.io/api/v1/sitemap?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
//       {"_id":"lcwakiki","startUrl":["https://www.lcwaikiki.eg/en/"],"selectors":[{"id":"main_cat","type":"SelectorLink","parentSelectors":["_root"],"selector":"a.navigation__link","multiple":true,"delay":0},{"id":"product_name","type":"SelectorText","parentSelectors":["main_cat"],"selector":".product-name a","multiple":true,"regex":"","delay":0},{"id":"product_img","type":"SelectorImage","parentSelectors":["main_cat"],"selector":"img.product-item-image","multiple":true,"delay":0},{"id":"product_price","type":"SelectorText","parentSelectors":["main_cat"],"selector":"div:nth-of-type(n+4) span.product-sale-price","multiple":true,"regex":"","delay":0}]}
//   )
//   const job = await axios.post(
//     'https://api.webscraper.io/api/v1/scraping-job?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
//     {
//       sitemap_id: sitemap.data.data.id,
//       driver: 'fast', // "fast" or "fulljs"
//       page_load_delay: 2000,
//       request_interval: 2000,
//       proxy: 0 // optional. 0 - no proxy, 1 - use proxy. Or proxy id for Scale plan users
//     }
//   )

//   console.log(job.data)
//   response.json(job.data)
// })


// router.get('/screatepullansbear', async (req, response) => {
//   const sitemap = await axios.post(
//       'https://api.webscraper.io/api/v1/sitemap?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
//       {"_id":"pullandbear","startUrl":["https://www.pullandbear.com/eg/"],"selectors":[{"id":"main_cat","type":"SelectorLink","parentSelectors":["_root"],"selector":".title a","multiple":true,"delay":0},{"id":"sub_cat","type":"SelectorLink","parentSelectors":["main_cat"],"selector":"li.level-2:nth-of-type(n+2) > a","multiple":true,"delay":0},{"id":"product_name","type":"SelectorText","parentSelectors":["sub_cat"],"selector":"div.name","multiple":true,"regex":"","delay":0},{"id":"product_img","type":"SelectorImage","parentSelectors":["sub_cat"],"selector":"div:nth-of-type(n+9) img[data-object-fit]","multiple":true,"delay":0},{"id":"product_price","type":"SelectorText","parentSelectors":["sub_cat"],"selector":"div:nth-of-type(n+47) [data-instance-id] .price span","multiple":true,"regex":"","delay":0}]}
//   )
//   const job = await axios.post(
//     'https://api.webscraper.io/api/v1/scraping-job?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
//     {
//       sitemap_id: sitemap.data.data.id,
//       driver: 'fast', // "fast" or "fulljs"
//       page_load_delay: 2000,
//       request_interval: 2000,
//       proxy: 0 // optional. 0 - no proxy, 1 - use proxy. Or proxy id for Scale plan users
//     }
//   )

//   console.log(job.data)
//   response.json(job.data)
// })



router.get('/screateamericaneagle', async (req, response) => {
  const sitemap = await axios.post(
      'https://api.webscraper.io/api/v1/sitemap?api_token=rozN4A44lCBCkcBLLP2C8vCrZs7An7EZsrrOS9eGDrUCAToBRxffs8zab2nS',
      {"_id":"american_eagle","startUrl":["https://www.ae.com/intl/en"],"selectors":[{"id":"main_cat","type":"SelectorLink","parentSelectors":["_root"],"selector":"a.top-level-link","multiple":true,"delay":0},{"id":"sub_cat","type":"SelectorLink","parentSelectors":["main_cat"],"selector":".cms-even-thirds-img-content a","multiple":true,"delay":0},{"id":"product_name","type":"SelectorText","parentSelectors":["sub_cat"],"selector":"h3.product-name","multiple":true,"regex":"","delay":0},{"id":"product_img","type":"SelectorImage","parentSelectors":["sub_cat"],"selector":"img.product-tile-image-hover","multiple":true,"delay":0},{"id":"product_price","type":"SelectorText","parentSelectors":["sub_cat"],"selector":"div.product-sale-price","multiple":true,"regex":"","delay":0},{"id":"product_link","type":"SelectorLink","parentSelectors":["sub_cat"],"selector":"a.tile-link","multiple":true,"delay":0}]}
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
  response.json(job.data)
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
  // console.log(result)
  response.json(result)
})
module.exports = router