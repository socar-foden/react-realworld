import axios from "axios";

const article_service = {
  createArticle: ({ articleInfo }) =>
    axios.post("/api/articles", { article: articleInfo }),
};

export default article_service;
