const mongoose = require('mongoose')
connectDB = async()=>(
 mongoose.connect('mongodb+srv://nozha:nozha1995@userlist.0b3luhv.mongodb.net/?retryWrites=true&w=majority')
 .then(()=>console.log("Db connected"))
 .catch(error => console.log(error)))

 module.exports = connectDB