import mongoose from  'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema ({
   firstNmae : String,
   lastName : String,
   email : {

    type : String,
    unique :true,
    required : [true, 'vbitte mussen Sie ein mail eingeben']
   },
   password : String,
   dateCreated : Date,
   dateModified : Date,
   lastLogin : {
       type : Date,
       default : new Date()
   }

});
export default mongoose.model('user',userSchema);