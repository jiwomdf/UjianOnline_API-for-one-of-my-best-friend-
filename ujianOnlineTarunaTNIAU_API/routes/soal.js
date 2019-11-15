let express = require('express')
let model = require('../models/index')
let router = express.Router()


/* GET all Soal. */
router.get('/', async function (req, res) {

    try {
        const retVal = await model.MsSoal.findAll({})
        
        if (retVal.length !== 0) 
            success200(res,retVal)
        else
            failed404(res)
    } 
    catch (err) {
      error400(res,err)
    }
})

/* POST Soal */
router.post('/', async function (req, res) {

    try {
        const {
            soalName,
            pilihanGandaAnswere
          } = req.body;

        const retVal = await model.MsSoal.create({
            soalName,
            pilihanGandaAnswere
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

/* Update Soal */
router.patch('/:id', async function (req, res) {

    try {
        const {
            soalName,
            pilihanGandaAnswere
          } = req.body;

        const retVal = await model.MsSoal.update({
            soalName : req.body.soalName? req.body.soalName : soalName,
            pilihanGandaAnswere : req.body.pilihanGandaAnswere? req.body.pilihanGandaAnswere : pilihanGandaAnswere
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

/* Delete Soal */
router.delete('/:id', async function(req,res){

    try {
        const retVal = await model.MsSoal.destroy({ 
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
