import { createNewRegesteration } from '../database/services/UsamRegisterationProgramService.js';



const createRegisterationData = async (req , res) => {
  try {
    const {firstName , lastName , email , whatsUpNumber , programType } = req.body
   
    await createNewRegesteration({
      firstName , lastName , email , whatsUpNumber , programType
    })
    
    return res.status(201).json({ message: "Created Successfully" });
  
  
  } catch (error) {
     
    if(error.name === 'SequelizeUniqueConstraintError'){
      console.log(error)
      return res.status(400).json("You have Registered before on that Program with your Email Or WhatsUp Number");
    }


    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(err =>{
        const errMessage = err.message
        return errMessage.slice(errMessage.indexOf(".") + 1)
      });

      return res.status(400).json({ errors: validationErrors });
    }
    res.status(500).json({ message: error }); 
  }
}

export default {
  createRegisterationData
};
