

import React from 'react'
import Regestration from '../Components/Registeration'
import { useEffect } from 'react';

export default function SparkProgramRegisterationPage() {
      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <section id='sparkRegestration'>
      <Regestration programType={"spark"}/>
    </section>
  )
}
