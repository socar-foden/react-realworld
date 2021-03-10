import axios from "axios";

const article_service = {
  createArticle: ({ articleInfo }) =>
    axios.post("/api/articles", { article: articleInfo }),
  listArticles: ({ queryParameters }) =>
    axios.get("/api/articles", { params: { ...queryParameters } }),
};

export default article_service;
