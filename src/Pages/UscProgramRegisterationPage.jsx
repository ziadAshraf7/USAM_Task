
import React from 'react'
import Regestration from '../Components/Registeration'
import { useEffect } from 'react';

export default function UscProgramRegisterationPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section id='uscRegestration'>
      <Regestration programType={"usc"}/>
    </section>
  )
}
