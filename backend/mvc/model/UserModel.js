import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({

    fullname:{type:String, required:true},
    age:{type:String, required:true},
    gender:{type:String, required:true},
    mobile:{type:String, required:true},
    city:{type:String, required:true}

})

const UserModel=mongoose.model('crudTable', UserSchema);

export default UserModel;