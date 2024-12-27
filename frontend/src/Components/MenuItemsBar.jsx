import React from 'react'
import { useEffect } from 'react'
export default function MenuItemsBar({ listsContent, setDisplayMenuItemsBar }) {
  const handleResize = () => {
    if (window.innerWidth > 765) {
      setDisplayMenuItemsBar(false)
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      onClick={() => setDisplayMenuItemsBar(false)}
      id="menuItemsBar"
      className="absolute top-0 w-screen h-screen bg-transparent"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute w-1/2  top-10 left-1/2 transform -translate-x-1/2 bg-slate-50"
      >
        <ul className="flex flex-col mx-auto text-center space-y-10 ">
          {listsContent.map((mi) => {
            return <li className="text-darkGrey  cursor-pointer">{mi}</li>
          })}
        </ul>
      </div>
    </section>
  )
}
