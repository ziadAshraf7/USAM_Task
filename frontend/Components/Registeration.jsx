import React, { useState } from 'react'
import {backEndUrlPath} from "../utils.js"
import ErrorComponent from './ErrorComponent.jsx';
import { useNavigate } from "react-router-dom";

export default function Registeration({
    programType
}) {

    let [firstName , setFirstName] = useState("");
    let [lastName , setLastName] = useState("");
    let [email , setEmail] = useState("");
    let [whatsUpNumber , setWhatsUpNumber] = useState("")
    let [errMessage , setErrMessage] = useState("")

    const navigate = useNavigate();

    async function submitRegisteration(e){
        e.preventDefault()
      
        whatsUpNumber = new String(whatsUpNumber.toString().slice(1)) 
        
        const registerationData = {firstName , lastName , email , whatsUpNumber , programType}

        const response = await fetch(backEndUrlPath + "/api/usamRegisteration/register" , {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(registerationData), 
          });


          if(response.ok){
            setErrMessage("")
            navigate('../success')
          }else{
            console.error("Error:", response.status, response.statusText);
            const errorResponse = await response.json();
            setErrMessage(errorResponse)
            console.error("Error Details:", errorResponse);
          }

    }

  return (
    <section id='form'>
      <div className='container mx-auto p-20'>
        <div className='flex  flex-col space-y-20 p-10 border border-softMint rounded-2xl'>
            {/* upper intro section  */}
            <div className='flex flex-col space-y-5'>
                <span className='text-subtitle-lg md:text-[24px] text-teal '>Registration Wise program </span>
                <p className='text-caption  text-darkGrey'>Don't miss the chance to join wise program, where excellence meets creativity and you can experience something truly unique.</p>
            </div>

            {/* form section */}
            <form onSubmit={submitRegisteration}>
                <div className='flex flex-col space-y-10'>

                <div className='flex space-x-5 '>
                    <div className='flex flex-col space-y-2 w-1/2 '>
                        <span className='text-darkGrey text-body-text'>First Name</span>
                        <input onChange={(e) => setFirstName(e.target.value)} value={firstName} required className=' h-[40px] md:h-[68px] bg-offWhite p-5 -softMint focus:outline-softMint' type='text' />
                    </div>
                    <div className='flex flex-col space-y-2 w-1/2'>
                        <span className='text-darkGrey text-body-text'>Last Name</span>
                        <input onChange={(e) => setLastName(e.target.value)} value={lastName} required className='border-softMint h-[40px] md:h-[68px] p-5 bg-offWhite focus:outline-softMint' type='text' />
                    </div>
                </div>

                    <div className='flex flex-col space-y-2'>
                            <span className='text-darkGrey text-body-text'>Email<span className='text-red-600'>*</span></span>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} required className='border-softMint h-[40px] md:h-[68px]  p-5 bg-offWhite focus:outline-softMint' type='text' />
                        </div>
                    <div className='flex flex-col space-y-2'>
                        <span className='text-darkGrey text-body-text'>Whatsup Number</span>
                        <input onChange={(e) => setWhatsUpNumber(e.target.value)} value={whatsUpNumber} required className='border-softMint h-[40px] md:h-[68px]  p-5 bg-offWhite focus:outline-softMint' type='number' />
                    </div>


                        <div className='place-self-center md:place-self-end flex space-x-5'>
                            <input className='btn-secondary rounded-2xl w-[80px] md:w-[212px]' type='button' value={"Close"}/>
                            <input className=' hover:bg-teal text-caption cursor-pointer transition duration-150 text-center  md:text-body-text h-[50px] px-4 bg-darkCyan text-offWhite rounded-2xl  md:w-[212px]' type='submit' value={"Confirm Registration"}/>
                        </div>
                 </div>
            </form>

           {errMessage.length > 0 && <div className='flex justify-center'>
             <ErrorComponent errorMessage={errMessage} />
            </div>}

        </div>
      </div>
    </section>
  )
}
