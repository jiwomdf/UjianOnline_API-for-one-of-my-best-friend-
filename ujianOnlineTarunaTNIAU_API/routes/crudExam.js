let express = require('express')
let router = express.Router()
const uuidv4 = require('uuid/v4');

let ujian = require('../routes/ujian')
let soal = require('../routes/soal')
let pilihanGanda = require('../routes/pilihanganda')

/* GET Ujian, Soal, PilihanGanda */
router.get('/', async function(req,res){

    try{

        const retVal = await ujian.getMsUjian()

        if (retVal.length !== 0) 
            success200(res,retVal)
        else
            failed404(res)
    } 
    catch (err) {
        error400(res,err)
    }
})

/* POST Ujian, Soal, PilihanGanda */
router.post('/', async function (req, res) {

    try {
        let retVal = 
            {
                examName,
                questions:[
                    {
                        examQuestion,
                        soalUrlImage,
                        answeres:[
                            {
                                pilihanGandaName,
                                pilihanGandaIsTrue
                            }
                        ]
                    }
                ]
            } = req.body;

        
        /* lOGIC */
        let ujianGroup = retVal.examName + "_" + uuidv4();

        ujian.insertMsUjian({
            "ujianName":retVal.examName,
            "ujianGroup":ujianGroup
        })

        retVal.questions.forEach(x => {

            let soalGroup = x.soalName + "_" + uuidv4();

            soal.insertSoal({
                "soalName": x.soalName,
                "soalUrlImage": x.soalUrlImage,
                "ujianGroup": ujianGroup,
                "soalGroup": soalGroup
            })
            
            x.answeres.forEach(y =>{

                pilihanGanda.insertPilihanGanda({
                    "pilihanGandaName": y.pilihanGandaName,
                    "pilihanGandaIsTrue": y.pilihanGandaIsTrue,
                    "ujianGroup": ujianGroup,
                    "soalGroup": soalGroup
                })

            })
            
        });
        
    }
    catch (err) {
        console.log(err)
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

