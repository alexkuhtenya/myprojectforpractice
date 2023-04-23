const Router = require('express')
const router = new Router()
const controller = require('../../controller/attemptController')




router.get('/getResult', controller.getResult)

module.exports = router