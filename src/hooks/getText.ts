import axios from 'axios';

export const getText = () => {
  const text = 'lorem ipsum dolor sit amet';
  const options = {
    method: 'GET',
    url: 'https://wiki-briefs.p.rapidapi.com/search',
    params: { q: 'javascript', topk: '5' },
    headers: {
      'X-RapidAPI-Key': 'fc3682aa67msh05b5b9f24424608p1a7f19jsne1df060c0c9e',
      'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return text;
};
