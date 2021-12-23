import React from "react";

function Spinner() {
  return (
    <>
      <div className="animate-ping inline-flex h-3 w-5 rounded-t-full bg-sky-400 opacity-75"></div>
      <div className="animate-ping h-3 w-5 rounded-b-full bg-red-400 opacity-75"></div>
    </>
  );
}

export default Spinner;

    // <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>

