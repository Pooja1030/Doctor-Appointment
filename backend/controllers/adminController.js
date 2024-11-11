import validator from "validator";
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js"

// api for adding doctor
const addDoctor = async (req,res) => {

    try{
        
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file

        // console.log({name, email, password, speciality, degree, experience, about, fees,address})


        // checking for all data to add doctor
        
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success: false, message:"Missing Details"})
        }
        
        
        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Please enter a valid email"})         
        }
        
        // validating strong password
        if(password.length < 8){
            return res.json({success: false, message:"Please enter a strong password"})         
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success: true, message: "Doctor Added"})

    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API For admin Login
const loginAdmin = async (req,res) => {
    try{

        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({success:true, token})

        } else{
            res.json({success:false, message:"Invalid credentials"})
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            
        }


    } catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get all doctors list for admin panel
const allDoctors = async (req,res) => {
    try{

        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})

    } catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get all appointments list
const appointmentsAdmin = async (req,res) => {
    
    try {
        
        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}

// API for appointment cancellation




export {addDoctor, loginAdmin,allDoctors,appointmentsAdmin}