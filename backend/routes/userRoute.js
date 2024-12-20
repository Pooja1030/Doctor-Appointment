import express from 'express'
import { getProfile, loginUser, registerUser, updateProfile,bookAppointment, listAppointment, cancelAppointment, paymentStripe} from '../controllers/userController.js'
import upload from '../middlewares/multer.js'
import authUser from '../middlewares/authUser.js'
import { verify } from 'jsonwebtoken'
// import { paymentStripe } from '../controllers/adminController.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/payment-stripe',authUser,paymentStripe)


export default userRouter