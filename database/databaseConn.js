const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Conversale')
.then((con)=>{
    console.log("Database Connected")
})
.catch(err=>{
    console.log(err,"Error")
})
module.exports = mongoose;