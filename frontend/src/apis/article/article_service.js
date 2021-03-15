import axios from "axios";

const article_service = {
  createArticle: ({ articleInfo }) =>
    axios.post("/api/articles", { article: articleInfo }),
  listArticles: ({ queryParameters }) =>
    axios.get("/api/articles", { params: { ...queryParameters } }),
  favoriteArticle: ({ slug }) => axios.post(`/api/articles/${slug}/favorite`),
  unfavoriteArticle: ({ slug }) =>
    axios.delete(`/api/articles/${slug}/favorite`),
  updateArticle: ({ articleInfo, slug }) =>
    axios.put(`/api/articles/${slug}`, { article: articleInfo }),
};

export default article_service;
