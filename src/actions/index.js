// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

export function fetchCar(id) {
  const car = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(r=>r.json());
  return {
    type: FETCH_CAR,
    payload: car
 }
}

export function fetchCars(garage) {
  const cars = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(r=>r.json());
  return {
    type: FETCH_CARS,
    payload: cars
 }
}
//damians-cars
