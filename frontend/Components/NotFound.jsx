import React from "react";

export default function NotFoundPage()  {
    return (
      <div className="flex justify-center h-screen bg-gray-100 py-20">
        <div className="text-center">
          <h1 className="text-heading-xl font-bold text-teal">404</h1>
          <p className="mt-4 text-heading-lg text-gray-600">
           <span className="text-amber font-bold">Oops!</span> The page you are looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  };