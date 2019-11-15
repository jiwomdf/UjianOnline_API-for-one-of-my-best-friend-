let express = require('express')
let model = require('../models/index')
let router = express.Router()


/* GET all Taruna. */
router.get('/', async function (req, res) {

    try {
        const retVal = await model.MsUjian.findAll({})
        
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
            ujianName,
            ujianUrlImage
        } = req.body

        console.log(req.body)

        const retVal = await model.MsUjian.create({
            ujianName,
            ujianUrlImage
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
            ujianName,
            ujianUrlImage
          } = req.body;

        const retVal = await model.MsUjian.update({
            ujianName : req.body.ujianName? req.body.ujianName : ujianName,
            ujianUrlImage : req.body.ujianUrlImage? req.body.ujianUrlImage : ujianUrlImage
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
        const retVal = await model.MsUjian.destroy({ 
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
