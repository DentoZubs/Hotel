const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');
const {createBooking, checkBookingByEmail} = require('../models/query')

const booking = (req, res) => {

    const schema = Joi.object({
        firstname: Joi.string().min(3).required(),
        othernames: Joi.string().min(3).required(),
        age: Joi.number().required(),
        phone: Joi.number().max(11).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
       
     })

       
try {
        const { error, value } = schema.validate(req.body)
        // console.log('i got here', req.body)
        if (error != undefined) {
            throw new Error(error.details[0].message)
        }
        // if (value){
        //     res.status(201).json({
        //         status:true,
        //         message: "Validation successful"
        //     })
        // }
        
        onsole.log('i got here')
        const { firstname, othernames, age, phone, email} = req.body
        checkBookingByEmail(email)
        .then(responseFromCheckEmail => {
            if (responseFromCheckEmail.length > 0) {
               throw new Error("You booked already.Do you need more rooms?")
            }
           
         })

        const id = uuidv4()
        createBooking(id,firstname, othernames, age, phone, email)
        .then(bookingResult => {
                
            res.status(201).json({
                status:true,
                message: "Appointment booked"
            })
 
        })
        .catch(error => {
            console.log(error.message)
            res.status(400).json({
                status:false,
                message: error.message
            })
        })


    
} catch (error) {
    
        res.status(400).json({
            status : false,
            message: error.message
        })
}
   

}



module.exports  =  { booking }