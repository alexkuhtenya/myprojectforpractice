const Router = require('express')
const router = new Router()
const controller = require('../../controller/LeaderBoardController')




router.get('/getLB', controller.rewriteLB)

module.exports = router