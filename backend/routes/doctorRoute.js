import express from 'express'
import { doctorList, loginDoctor, appointmentsDoctor, appointmentComplete, appointmentCancel } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'


const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.postt('/complete-appointment',authDoctor,appointmentComplete)
doctorRouter.postt('/cancel-appointment',authDoctor,appointmentCancel)

export default doctorRouter
