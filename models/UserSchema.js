const mongoose = require("mongoose")

 const Schema = mongoose.Schema ;


const UserSchema = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,lowercase:true, unique:true },
    password:{type:String,required:true}
})

const UsersModel = mongoose.model("users",UserSchema)


module.exports= UsersModel;



