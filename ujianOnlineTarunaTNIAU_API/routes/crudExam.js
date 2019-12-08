let express = require('express')
let router = express.Router()
const uuidv4 = require('uuid/v4');

let ujian = require('../routes/ujian')
let soal = require('../routes/soal')
let pilihanGanda = require('../routes/pilihanganda')

/* POST Soal */
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

            soal.insertSoal({
                "soalName": x.soalName,
                "soalUrlImage": x.soalUrlImage,
                "ujianGroup": ujianGroup
            })
            
            x.answeres.forEach(y =>{

                pilihanGanda.insertPilihanGanda({
                    "pilihanGandaName": y.pilihanGandaName,
                    "pilihanGandaIsTrue": y.pilihanGandaIsTrue,
                    "ujianGroup": ujianGroup
                })

            })
            
        });
        
    } 
    catch (err) {
        console.log(err)
    }


})

module.exports = router
