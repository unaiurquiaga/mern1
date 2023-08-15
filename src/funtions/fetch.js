import { today } from "../components/CurrentDate";

export const ApiPetition = ({ isMars, stateToChange, selectedDate }) => {
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = 'GyljqrfCMoxOBanaXplh6V1QemcLbIqxQaxb3xEK';
  const APOD_URL = `${NASA_URL}planetary/apod?date=${selectedDate ? selectedDate : today
    }&api_key=${NASA_API_KEY}`;

  const MARS_URL = `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`;
  const MARS_URL_DAY = `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${NASA_API_KEY}`;

  const URL = !isMars ? APOD_URL : selectedDate ? MARS_URL_DAY : MARS_URL;

  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      return response.json();
    })
    .then((data) => {
      stateToChange(data); // Guardar la información en el estado
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}