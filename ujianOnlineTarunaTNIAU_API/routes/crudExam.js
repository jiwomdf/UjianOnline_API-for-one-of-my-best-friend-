let express = require('express')
let router = express.Router()
let request = require('request');


/* POST Soal */
router.post('/', async function (req, res) {

    try {
        const retVal = {
            questions:[
                {
                    examQuestion,
                    answeres:[
                        {
                            examAnswere
                        }
                    ]
                }
            ]
          } = req.body;

        /* lOGIC */
        request.post('http://localhost:3000/ujian',{ }, (err,res,body) => {
                if (!err && res.statusCode == 200) {
                    console.log(body);
                }
            }
        )

        //console.log(retVal)
        // exam.forEach(x => {
            
        //     console.log(x);
            
        // });
        


        /*
            const retVal = await model.MsSoal.create({
                soalName,
                pilihanGandaAnswere
            })
            
            if (retVal) 
                success200(res,retVal)
            else
                failed404(res)
        */
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
