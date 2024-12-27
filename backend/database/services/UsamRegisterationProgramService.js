import UsamProgramRegisterationModel from '../models/UsamProgramRegisterationModel.js';


export const createNewRegesteration = async (registerationData) => {
  return await UsamProgramRegisterationModel.create(registerationData);
};

export const getRegisterations = async () => {
  return await UsamProgramRegisterationModel.findAll();
};


