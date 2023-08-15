import React, { useEffect } from 'react';
import { ApiPetition } from '../funtions/fetch';

export const ApiMars = ({ marsData, setMarsData }) => {

  useEffect(() => {
    ApiPetition({ isMars: true, stateToChange: setMarsData })
  }, []);

  return (
    <>
      {marsData && marsData.photos && marsData.photos.length > 0 &&
        (<div className='div_content'>
          <p className='second_title'>{marsData.photos[0].camera.full_name}</p>
          <img className="api_img_rover" src={marsData.photos[0].img_src} alt={marsData.photos[0].camera.full_name} />
          <p className='pic_day'>Image Dated: {marsData.photos[0].earth_date}</p>
          <p className='api_info'>Status of Rover: {marsData.photos[0].rover.status}</p>
        </div>
        )}
    </>
  );
};

export default ApiMars;