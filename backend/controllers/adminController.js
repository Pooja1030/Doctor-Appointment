


// api for adding doctor
const addDoctor = async (req,res) => {

    try{
        
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file

        // console.log({name, email, password, speciality, degree, experience, about, fees,address})


        // checking for all data to add doctor
        





    }
    catch(error){

    }
}

export {addDoctor}