import mongoose from "mongoose";
import validator from "validator";

const messageSchema= new mongoose.Schema({
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

         message:{
            type:String,
            required:true,
            minLength: [10,"Message must contain atleast 10 cahracters"]
            },

});

export const Message=mongoose.model("Message", messageSchema);
