import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
 url: BASE_URL,
 params: { maxResults : '50' },
 headers: {
   'X-RapidAPI-Key': "16ae45c987msh5704e8f272d30e1p14b925jsnba50c2b9382b",
   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
 }
};

export const fetchFromApi = async (url) => {
 const { data } = await axios.get(`${BASE_URL}/${url}` , options);

 return data;
}