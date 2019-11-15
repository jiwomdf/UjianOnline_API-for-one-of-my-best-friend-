let express = require('express')
let model = require('../models/index')
let router = express.Router()


/* GET all Taruna. */
router.get('/', async function (req, res) {

    try {
        const retVal = await model.MsTaruna.findAll({})
        
        if (retVal.length !== 0) 
            success200(res,retVal)
        else
            failed404(res)
    } 
    catch (err) {
      error400(res,err)
    }
})

/* POST Taruna */
router.post('/', async function (req, res) {

    try {
        const {
            nama,
            tarunaID,
            password,
            kelas,
            tarunaUrlImage,
            email,
            gender
        } = req.body

        const retVal = await model.MsTaruna.create({
            nama,
            tarunaID,
            password,
            kelas,
            tarunaUrlImage,
            email,
            gender
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

/* Update Taruna */
router.patch('/:id', async function (req, res) {

    try {
        const {
            nama,
            tarunaID,
            password,
            kelas,
            tarunaUrlImage,
            email,
            gender
          } = req.body;

        const retVal = await model.MsTaruna.update({
            nama : req.body.nama? req.body.nama : nama,
            tarunaID : req.body.tarunaID? req.body.tarunaID : tarunaID,
            password : req.body.password? req.body.password : password,
            kelas : req.body.kelas? req.body.kelas : kelas,
            tarunaUrlImage : req.body.tarunaUrlImage? req.body.tarunaUrlImage : tarunaUrlImage,
            email : req.body.email? req.body.email : email,
            gender : req.body.gender? req.body.gender : gender
        },{
            where: {
                id: req.params.id
            }
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

/* Delete Taruna */
router.delete('/:id', async function(req,res){

    try {
        const retVal = await model.MsTaruna.destroy({ 
            where: {
                id: req.params.id
            }
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

    console.log(res)

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
