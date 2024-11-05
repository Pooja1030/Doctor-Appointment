import doctorModel from '../models/doctorModel.js'

const changeAvailablity = async (req,res) => {
    try {
        const {docId} = req.body

        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available: !docData.available })
        res.json({success:true, message: 'Avalability Changed'})

    } catch (error) {
       console.log(error)
       res.json({success:false, message:error.message}) 
    }
}

const doctorList = async () => {
    try {
        
    } catch (error) {
        
    }
}


export {changeAvailablity}