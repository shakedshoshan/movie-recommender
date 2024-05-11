const userAuth = require("../models/userAuth");

exports.createNewUser = async (cradentials) => {
    try {
        const response = await userAuth.create({
            id: cradentials.id,
            userName: cradentials.userName,
            password: cradentials.password
        });
        return response;
      } catch (error) {
        console.error("Failed to save new user to db:", error);
        throw error;
      }
};

exports.findExistingUserByUserName = async(userNameFormController) => {
    try{
        const user = await userAuth.findOne({ userName: userNameFormController });
        return user;
    }
    catch(error){
        throw error;
    }
}