let express = require('express')
let router = express.Router()
router.get('/',(req,res,next)=>{
  console.log('admin product')
})
module.exports = router;