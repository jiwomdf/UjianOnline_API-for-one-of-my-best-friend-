let express = require('express')
let router = express.Router()

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
        //ujian.insertMsUjian({"ujianName":retVal.examName})  // insert MsExam
        //console.log(retVal.questions)
        retVal.questions.forEach(x => {

            // soal.insertSoal({
            //     "soalName": x.examQuestion,
            //     "soalUrlImage": x.soalUrlImage
            // })
            
            x.answeres.forEach(y =>{

                // pilihanGanda.insertPilihanGanda({
                //     "pilihanGandaName": y.pilihanGandaName,
                //     "pilihanGandaIsTrue": y.pilihanGandaIsTrue
                // })
            })
            
        });
        
    } 
    catch (err) {
        console.log(err)
    }


})

module.exports = router
