const connection = require('./connection')
const { v4: uuidv4 } = require('uuid');


const createBooking = (firstname, othernames, age, phone, email) => {


    return  new Promise((resolve, reject) => {

        const id = uuidv4()
         connection.query(`INSERT INTO Customers (id,firstname,othernames,age, phone,email) VALUES('${id}','${firstname}', '${othernames}', '${age}', '${phone}','${email}')`,
                (err, results, fields) =>  {
                     if (err) reject(err) 
                       resolve(results)
                    // connection.end()
             })
    
                // connection.end()
    })

}



const checkBookingByEmail = (email) => {

    return new Promise((resolve, reject) => {
         connection.query(`SELECT * FROM customers where email='${email}'`,
            (err, results, fields) => {
                if (err) reject(err)
                resolve(results)
                // connection.end()
            })
            // connection.end()

        })
    
  
    
}

const getCustomers = () => {

    return new Promise((resolve, reject) => {
         connection.query('SELECT * FROM customers',
            (err, results, fields) => {
                if (err) reject(err)
                resolve(results)
                // connection.end()
            })
            // connection.end()
        })
    
  
    
}



module.exports = {createBooking, checkBookingByEmail, getCustomers}