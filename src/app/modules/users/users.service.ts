import  config from "../../../config/index"
import { User } from "../users.model"
import { generateUserId } from "./user.utils"
import { IUser } from "./users.interface"

const createUser = async (user : IUser): Promise<IUser | null> => {

    //auto generated incremental id
   const id = await generateUserId()

   user.id = id
    //default password
    if(!user.password){
        user.password = config.default_student_password as string
    }




const createdUser  = await User.create(user)

if(!createUser){
    throw new Error ('failed to create user!')
}
return createdUser
}

export default {
    createUser
}