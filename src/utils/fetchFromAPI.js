import axios from "axios";

const REACT_APP_BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: REACT_APP_BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    // 'X-RapidAPI-Key': '5c369a06e4msha69bed85c1f6618p17a18ajsne4aafa6597c9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) =>{
  const {data} =  await axios.get(`${REACT_APP_BASE_URL}/${url}`,options);

  return data;
    
}