import React, { useEffect } from 'react';
import { ApiPetition } from '../funtions/fetch';

export const ApiNasa = ({ apiInfo, setApiInfo }) => {

  useEffect(() => {
    ApiPetition({ isMars: false, stateToChange: setApiInfo })
  }, []);

  return (
    <>
      {apiInfo && (
        <div className='div_content'>
          <p className='second_title'>{apiInfo.title}</p>
          <img className="api_img" src={apiInfo.url} alt={apiInfo.title} />
          <p className='pic_day'>Image Dated: {apiInfo.date}</p>
          <p className='api_info'>{apiInfo.explanation}</p>
        </div>
      )}
    </>
  );
};

export default ApiNasa;