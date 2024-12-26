import React from 'react'
import SecondaryButton from './custom buttons/SecondaryButton'

export default function ProgramCard({
  title,
  paragraph,
  imageIconPath,
  joinNowDestinationUrl,
}) {
  return (
    <section id="programInfo">
      <div className="container text-center mx-auto ">
        <div className=" hover:bg-aqua transition duration-200 flex  flex-col border border-brightAqua rounded-xl h-[406px] justify-between items-center p-5 space-y-2">
          <div>
            <img src={imageIconPath} alt="" />
          </div>
          <div className="text-teal font-bold text-heading-md">{title}</div>
          <p className="text-caption text-darkGrey ">{paragraph}</p>
          <SecondaryButton>Join Now</SecondaryButton>
        </div>
      </div>
    </section>
  )
}
