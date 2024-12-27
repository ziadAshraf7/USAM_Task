import React from 'react'
import {Link} from 'react-router-dom'

export default function IntroSection({
  title,
  paragraph,
  buttonContent,
  imagePath,
  paragraphList,
  destination
}) {
  return (
    <section id="introSection" className="bg-teal h-fit py-5 ">
      <div className="container mx-auto ">
        {/* Container */}
        <div className="flex flex-col space-y-20 text-center md:text-left items-center jsutify-center md:justify-between md:space-y-0 md:flex-row">
          {/* left section */}
          <div className="md:w-2/3  flex flex-col space-y-10">
            <div
              className=" max-w-[805px] leading-[40px]  text-heading-sm md:text-heading-xl font-bold md:leading-[66px] text-white"
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
            {paragraphList?.length == 0 && <p className="max-w-2xl text-offWhite text-caption md:text-subtitle-md">
              {paragraph}
            </p>}
            {paragraphList?.length > 0 && paragraphList.map(p => {
              return <div className='flex space-x-5'>
                 <img className='w-[32px] h-[32px]' src={require("../imgs/check-mark 1.png")}/>
                 <p className='text-white text-body-text'>{p}</p>
              </div>
            })}
            <div>
              <Link to={destination}><button className='btn-primary'>{buttonContent}</button></Link> 
            </div>
          </div>

          {/* right section */}
          <div className="md:w-1/3">
            <img
              className="w-[400px] h-[400px]  md:w-[500px] md:h-[500px]"
              src={`${imagePath}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
