import axios from "axios";

export function getNews(category) {
  const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;

  // const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  const newsUrl = `https://newsapi.org/v2/everything?language=en&limit=9&q=${category}&apiKey=${apiKey}`;

  return axios.get(newsUrl)

}