import React, { useState } from 'react'
import MenuItemsBar from './MenuItemsBar'

export default function Navbar() {
  const listsContent = ['Home', 'About', 'News', 'Events']

  let [displayMenuItemsBar, setDisplayMenuItemsBar] = useState(false)

  return (
    <nav id="navbar" className="relative bg-teal h-[188px]">
      <div className="container mx-auto p-6">
        <div className="flex flex-row items-center justify-between">
          {/* image icon */}
          <div>
            <img
              className="w-[111px] h-[111px]"
              src={require('../imgs/Ellipse.png')}
              alt=""
            />
          </div>

          {/* list of links */}

          <ul className="hidden md:flex md:space-x-10 lg:space-x-20 text-darkGrey">
            {listsContent.map((liContent) => (
              <li className="cursor-pointer text-darkGrey text-[18px]">
                {liContent}
              </li>
            ))}
            <li className=" text-white text-[18px]">USAM Programs</li>
          </ul>

          {/* langauage selection */}
          <div className="flex space-x-2 items-center cursor-pointer">
            <img
              className="w-[40px] h-[40px]"
              src={require('../imgs/language.png')}
              alt=""
            />
            <span className="w-[20px] h-[20px] text-white">EN</span>
          </div>

          {/* small screens */}

          <button
            onClick={() => setDisplayMenuItemsBar(true)}
            className="block md:hidden"
          >
            <img
              className="w-[40px] h-[40px]"
              src={require('../imgs/menuItemsIcon.png')}
            />
          </button>
        </div>
      </div>

      {displayMenuItemsBar && (
        <MenuItemsBar
          listsContent={listsContent}
          setDisplayMenuItemsBar={setDisplayMenuItemsBar}
        />
      )}
    </nav>
  )
}
