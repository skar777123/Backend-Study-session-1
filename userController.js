import user from "./userModels.js";

export const register = async (req, res) => {
  const { name, password, studentId, course, age, address } = req.body;
  try {
    const User = await user.create({
      name,
      password,
      studentId,
      course,
      age,
      address,
    });

    res.status(200).json({
      success: true,
      message: User,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to register user",
      error: error.message,
    });
  }
};

export const login = async (req,res)=>{
  const {studentId,password}=req.body;
  try {
    if (!studentId || !password){
      res.status(400).json({
        success: false,
        message: "Required Student ID and Password",
        error: error.message,
      });
    }
    const User = await user.findOne({studentId});
    if(password == User.password){
      res.status(200).json({
        success: true,
        message: User,
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to Login",
      error: error.message,
    });
  }
}