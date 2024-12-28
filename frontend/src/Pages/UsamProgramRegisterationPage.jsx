

import React from 'react'
import Regestration from '../Components/Registeration'
import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {usamProgramsTypes} from '../utils'

export default function UsamProgramRegisterationPage() {
  const { formId } = useParams();

    const navigate = useNavigate();
    

    useEffect(() =>{
      if(!Object.values(usamProgramsTypes).includes(formId)){
        navigate("../")
      }
    },[])
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id= {formId + "program"}>
      <Regestration programType={formId}/>
    </section>
  )
}
