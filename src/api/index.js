import axios from 'axios';

export const fetchRecords = () => {
  const promise = axios.get(
    'http://rallycoding.herokuapp.com/api/music_albums'
  );
  return promise;
};
