const { Router } = require("express")
const controller = require("../controller")

const router=Router()
/**
 * @function API~/user
 * @param {string} name
 * @param {number} age
 * @return {string}
 */
router.get('/user',controller)