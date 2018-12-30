import axios from 'axios';
import qs from 'qs';

export const fetchJokes = () => {
  return fetchCategories()
    .then(categories => {
      return Promise.all(
        categories.map(category => {
          return axios.get(
            `https://api.chucknorris.io/jokes/random?category=${category}`
          );
        })
      );
    })
    .then(responses =>
      responses.map(response => {
        const parsed = qs.parse(
          response.config.url.replace(
            'https://api.chucknorris.io/jokes/random?',
            ''
          )
        );
        return { ...response.data, category: parsed.category };
      })
    );
};

export const fetchCategories = () => {
  return axios
    .get('https://api.chucknorris.io/jokes/categories')
    .then(response => response.data);
};
