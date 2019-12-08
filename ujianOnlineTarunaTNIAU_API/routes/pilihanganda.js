let express = require('express')
let model = require('../models/index')
let router = express.Router()


/* GET all PilihanGanda. */
router.get('/', async function (req, res) {

    try {
        const retVal = await model.MsPilihanGanda.findAll({})
        
        if (retVal.length !== 0) 
            success200(res,retVal)
        else
            failed404(res)
    } 
    catch (err) {
      error400(res,err)
    }
})

/* POST PilihanGanda */
router.post('/', async function (req, res) {

    try {
        const {
            pilihanGandaName,
            pilihanGandaIsTrue
          } = req.body;

        const retVal = await model.MsPilihanGanda.create({
            pilihanGandaName,
            pilihanGandaIsTrue
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

/* Update PilihanGanda */
router.patch('/:id', async function (req, res) {

    try {
        const {
            pilihanGandaName,
            pilihanGandaIsTrue
          } = req.body;

        const retVal = await model.MsPilihanGanda.update({
            pilihanGandaName : req.body.pilihanGandaName? req.body.pilihanGandaName : pilihanGandaName,
            pilihanGandaIsTrue : req.body.pilihanGandaIsTrue? req.body.pilihanGandaIsTrue : pilihanGandaIsTrue
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

/* Delete PilihanGanda */
router.delete('/:id', async function(req,res){

    try {
        const retVal = await model.MsPilihanGanda.destroy({ 
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

/* funtional API */
const insertPilihanGanda = async function(pilihanGandaParam){

    console.log(pilihanGandaParam)

    try {
        const {
            pilihanGandaName,
            pilihanGandaIsTrue
          } = pilihanGandaParam;

        const retVal = await model.MsPilihanGanda.create({
            pilihanGandaName,
            pilihanGandaIsTrue
        })
        
        console.log(retVal)

    } 
    catch (err) {
      console.log(err)
    }

}

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

module.exports = {
    insertPilihanGanda: insertPilihanGanda
}