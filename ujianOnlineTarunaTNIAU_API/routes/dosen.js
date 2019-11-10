let express = require('express')
let model = require('../models/index')
let router = express.Router()


/* GET all dosen. */
router.get('/', async function (req, res) {

    try {
        const retVal = await model.MsDosen.findAll({})
        
        if (retVal.length !== 0) 
            success200(res,retVal)
        else
            failed404(res)
    } 
    catch (err) {
      error400(res,err)
    }
})

/* POST dosen */
router.post('/', async function (req, res) {

    try {
        const {
            dosenID,
            password,
            nrp,
            nama,
            email,
            telp,
            alamat,
            dosenUrlPhoto
          } = req.body;

        const retVal = await model.MsDosen.create({
            dosenID,
            password,
            nrp,
            nama,
            email,
            telp,
            alamat,
            dosenUrlPhoto
        })
        
        if (retVal) 
            success200(res,retVal)
        else
            failed404(res)
    } 
    catch (err) {
      error400(res,err)
    }
})


function success200(res,retVal){
    res.status(200).json({
        'status': '200',
        'messages': 'success',
        'data': retVal
    })
}

function failed404(res){
    res.status(404).json({
        'status': '404',
        'messages': 'data not found',
        'data': {}
    })
}

function error400(res,err){
    console.log(err)
    res.status(400).json({
        'status': '400',
        'messages': err.messages,
        'data': {}
    })
}

module.exports = router
