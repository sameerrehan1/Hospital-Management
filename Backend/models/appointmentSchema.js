import mongoose from "mongoose";
import {Mongoose} from "mongoose";
import validator from "validator";

const appointmentSchema= new mongoose.Schema({
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

      appointment_date:{
        type:String,
        required:true,
      },

      department:{
        type:String,
        required:true,
      },

      doctor:{
        firstName:{
            type:String,
        required:true,
        },

        lastName:{
            type:String,
        required:true,
        }
      },

      hasVisited:{
        type:Boolean,
        default:false,
      },

      doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
      },

      patientId:{
        type:mongoose.Schema.ObjectId,
        required:true,
      },

      address:{
        type:String,
        required:true,
      },

      status:{
        type:String,
        enum:["Accepted","Pending","Rejected"],
        default: "Pending",
      },
});

export const Appointment = mongoose.model("Appointment",appointmentSchema);