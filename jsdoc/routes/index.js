const { Router } = require('express')

const router = Router()

/**
 * API 문서
 * @namespace API
 */
/**
 * @function API~/hi
 * @param {number} boutique_id 부티크 아이디
 * @param {string} boutique_name 부티크 명
 * @return {User}
 */
router.get('/hi', (req, res, next) => {
  console.log('api is good')
  res.send('say hello')
})

module.exports = router