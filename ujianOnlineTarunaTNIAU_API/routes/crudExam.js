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
        retVal.questions.forEach(x => {
            
            console.log(x.examQuestion) // insert MsQuestion
            console.log(x.answeres[0].examAnswere) // insert MsAnswere
            
        });
        
    } 
    catch (err) {
        console.log(err)
    }


})


module.exports = router
