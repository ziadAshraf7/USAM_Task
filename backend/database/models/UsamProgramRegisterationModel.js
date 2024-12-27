
import __sequalize from "../dbConfig.js"
import { DataTypes } from "sequelize";
const {sequelize} = __sequalize

const UsamProgramRegisterationModel = sequelize.define('programRegisterations', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: "First name cannot be empty" }
      }
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Last name cannot be empty" }
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        isEmail: { msg: "You entered an invalid email" }
      }
    },
    whatsUpNumber: {
      type: DataTypes.BIGINT, 
      allowNull: false,
      validate: {
        is: {
          args: [/^\+?[1-9]\d{1,14}$/], 
          msg: 'Invalid WhatsApp number format',
        }
      }
    },
    programType: {
      type: DataTypes.ENUM('wise', 'usc', 'spark', 'ambassadors'),
      allowNull: false,
      validate: {
        notEmpty: "Program type cannot be empty",
        isIn: {
          args: [['wise', 'usc', 'spark', 'ambassadors']],
          msg: 'Program type must be one of: wise, usc, spark, or ambassadors',
        }
      }
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['email', 'programType'],
        name: 'unique_email_programType'
      },
      {
        unique: true,
        fields: ['email', 'whatsUpNumber'],
        name: 'unique_whatsUpNumber_programType'
      }
    ]
  });
  
export default UsamProgramRegisterationModel