import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3,"First Name must contain min of 3 letters !"]
        },

    lastName:{
            type:String,
            required:true,
            minLength: [3,"Last Name must contain min of 3 letters !"]
            },

         email:{
                type:String,
                required:true,
                validate: [validator.isEmail,"please provide a valid email"]
                },

        phone:{
                    type:String,
                    required:true,
                    minLength: [10,"Enter a valid mobile Number"],
                    maxLength: [10,"Enter a valid mobile Number"]
                    },

         nic:{
            type:String,
            required:true,
            minLength: [12,"Aadhar must contain 12 digits"],
            minLength: [12,"Aadhar must contain 12 digits"],
         },

         dob:{
            type: String,
            required: [true,"DOB is required"]
         },

         gender:{
            type: String,
            required: true,
            enum: ["Male","Female","prefer Not to say"],
         },

         password:{
            type:String,
            minLength: [6,"Password must contain atleast 6 characters"],
            required:true,
            select: false
         },

         role:{
            type:String,
            required:true,
            enum: ["Admin","Patient","Doctor"],
         },

         doctorDepartment:{
            type:String,
         },

         docAvatar: {
            public_id: String,
            url: String,
         },

});



userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.generateJsonWebToken = function () {
   return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
     expiresIn: process.env.JWT_EXPIRES,
   });
 }; 

userSchema.methods.comparePassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

userSchema.methods.generateJsonwebToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User=mongoose.model("User", userSchema);

