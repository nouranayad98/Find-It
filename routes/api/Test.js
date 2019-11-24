const express = require('express')
const router = express.Router()
const axios = require('axios')

const functions = {
  getUsers: async () => {
    const Users = await axios.post(
      'https://api.webscraper.io/api/v1/sitemap?api_token=PLLPESd8qBOtONuYGeblk2DwGlWdmonRkebJf5XKbmMapW4deCuv4HmpDqWc',
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
    return Users
  }
}
// router.get('/', async (req, res) => {
//   res.json('hii')
// })

module.exports = functions

// module.exports = router
