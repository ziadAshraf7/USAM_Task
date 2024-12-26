import React from 'react'
import PrimaryButton from './custom buttons/PrimaryButton'

export default function IntroSection({
  title,
  paragraph,
  buttonContent,
  imagePath,
  buttonWidth,
}) {
  return (
    <section id="introSection" className="bg-teal h-fit lg:h-[528px] ">
      <div className="container mx-auto ">
        {/* Container */}
        <div className="flex flex-col space-y-20 text-center md:text-left items-center jsutify-center md:justify-between md:space-y-0 md:flex-row">
          {/* left section */}
          <div className="md:w-2/3  flex flex-col space-y-10">
            <div
              className=" max-w-[805px] leading-[40px]  text-heading-sm md:text-heading-xl font-bold md:leading-[66px] text-white"
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
            <p className="max-w-2xl text-offWhite text-caption md:text-subtitle-md">
              {paragraph}
            </p>
            <div>
              <PrimaryButton width={buttonWidth}>{buttonContent}</PrimaryButton>
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
