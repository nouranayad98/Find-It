const express = require('express')
const router = express.Router()
const axios = require('axios')
router.get('/', async (req, response) => {
    const sitemap = await axios.post(
      'https://api.webscraper.io/api/v1/sitemap?api_token=FcHU0rvsmldc8joVoslI6cbXZdU5j4sVNWIxyRiJwVmv5GR2WaSQSp8rooN9',
      {"_id":"tedbaker","startUrl":["https://www.tedbaker.com"],"selectors":[{"id":"categs","type":"SelectorLink","parentSelectors":["_root"],"selector":".js-root-category a.categories_main","multiple":true,"delay":0},{"id":"subcategs","type":"SelectorLink","parentSelectors":["categs"],"selector":".cat-pnl-swiper a","multiple":true,"delay":0},{"id":"name","type":"SelectorText","parentSelectors":["subcategs"],"selector":"p.summary","multiple":true,"regex":"","delay":0},{"id":"price","type":"SelectorText","parentSelectors":["subcategs"],"selector":"div:nth-of-type(n+37) li.price","multiple":true,"regex":"","delay":0},{"id":"image","type":"SelectorImage","parentSelectors":["subcategs"],"selector":"div:nth-of-type(n+49) img","multiple":true,"delay":0}]}
      
    )
    const job = await axios.post(
              'https://api.webscraper.io/api/v1/scraping-job?api_token=FcHU0rvsmldc8joVoslI6cbXZdU5j4sVNWIxyRiJwVmv5GR2WaSQSp8rooN9',
              {
                "sitemap_id": sitemap.data.data.id,
                "driver": "fast", // "fast" or "fulljs"
                "page_load_delay": 2000,
                "request_interval": 2000,
                "proxy": 0 // optional. 0 - no proxy, 1 - use proxy. Or proxy id for Scale plan users
              }
            )

          
      const data= await axios.get(
                'https://api.webscraper.io/api/v1/scraping-job/'+job.data.data.id+'/json?api_token=FcHU0rvsmldc8joVoslI6cbXZdU5j4sVNWIxyRiJwVmv5GR2WaSQSp8rooN9'
               )

              console.log(data.data)
               response.json(data.data)


  })
    module.exports = router

//     .then (res => {
//          axios.post(
//         'https://api.webscraper.io/api/v1/scraping-job?api_token=FcHU0rvsmldc8joVoslI6cbXZdU5j4sVNWIxyRiJwVmv5GR2WaSQSp8rooN9',
//         {
//           "sitemap_id": res.data.id,
//           "driver": "fast", // "fast" or "fulljs"
//           "page_load_delay": 2000,
//           "request_interval": 2000,
//           "proxy": 0 // optional. 0 - no proxy, 1 - use proxy. Or proxy id for Scale plan users
//         }
//       ).then(res =>{
//          const data= axios.get(
//           'https://api.webscraper.io/api/v1/scraping-job/'+res.data.id+'/json?api_token=FcHU0rvsmldc8joVoslI6cbXZdU5j4sVNWIxyRiJwVmv5GR2WaSQSp8rooN9'

//         )

//       } )
//     }
//     )
//     response.json({data:sitemap})
// })
// // router.get('/', async (req, res) => {
// //   res.json('hii')
// // })



// // module.exports = router
