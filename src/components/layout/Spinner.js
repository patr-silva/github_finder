import React from "react";
import spinnerGif from "./assets/spinner (1).gif";

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        src={spinnerGif}
        alt='Loading...'
        width={180}
        className='text-center mx-auto'
      />
    </div>
  );
};

export default Spinner;
