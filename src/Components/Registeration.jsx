import React from 'react'
import PrimaryButton from './custom buttons/PrimaryButton'
export default function Registeration() {
  return (
    <section id='form'>
      <div className='container mx-auto p-20'>
        <div className='flex  flex-col space-y-20 p-10 border border-softMint rounded-2xl'>
            {/* upper intro section  */}
            <div className='flex flex-col space-y-5'>
                <span className='text-subtitle-lg md:text-[24px] text-teal '>Registration Wise program </span>
                <p className='text-caption text-caption text-darkGrey'>Don't miss the chance to join wise program, where excellence meets creativity and you can experience something truly unique.</p>
            </div>

            {/* form section */}
            <form >
                <div className='flex flex-col space-y-10'>

                <div className='flex space-x-5 '>
                    <div className='flex flex-col space-y-2 w-1/2 '>
                        <span className='text-darkGrey text-body-text'>First Name</span>
                        <input required className=' h-[40px] md:h-[68px] bg-offWhite p-5 -softMint focus:outline-softMint' type='text' />
                    </div>
                    <div className='flex flex-col space-y-2 w-1/2'>
                        <span className='text-darkGrey text-body-text'>Last Name</span>
                        <input required className='border-softMint h-[40px] md:h-[68px] p-5 bg-offWhite focus:outline-softMint' type='text' />
                    </div>
                </div>

                    <div className='flex flex-col space-y-2'>
                            <span className='text-darkGrey text-body-text'>Email<span className='text-red-600'>*</span></span>
                            <input required className='border-softMint h-[40px] md:h-[68px]  p-5 bg-offWhite focus:outline-softMint' type='text' />
                        </div>
                    <div className='flex flex-col space-y-2'>
                        <span className='text-darkGrey text-body-text'>Whatsup Number</span>
                        <input required className='border-softMint h-[40px] md:h-[68px]  p-5 bg-offWhite focus:outline-softMint' type='number' />
                    </div>


                        <div className='place-self-center md:place-self-end flex space-x-5'>
                            <input className='btn-secondary rounded-2xl w-[80px] md:w-[212px]' type='button' value={"Close"}/>
                            <input className=' hover:bg-teal text-caption cursor-pointer transition duration-150 text-center  md:text-body-text h-[50px] px-4 bg-darkCyan text-offWhite rounded-2xl  md:w-[212px]' type='submit' value={"Confirm Registration"}/>
                        </div>
                 </div>
            </form>
        </div>
      </div>
    </section>
  )
}
