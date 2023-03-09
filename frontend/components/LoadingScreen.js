import React from "react";
import { LineWave } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <LineWave
        height='100'
        width='100'
        color='#4fa94d'
        ariaLabel='line-wave'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default LoadingScreen;
