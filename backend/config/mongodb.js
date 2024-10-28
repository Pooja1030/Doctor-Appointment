import mongoose  from "mongoose";

const connectD = async () => {

    mongoose.connection.on('connected', () => console.log("Dataase Connected"))

    await mongoose.connect(`${process.env.MONGOD_URI}/prescripto`)
}

export default connectD