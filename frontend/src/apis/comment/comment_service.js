import axios from "axios";

const comment_service = {
  getCommentsFromAnArticle: ({ slug }) =>
    axios.get(`/api/articles/${slug}/comments`),
};

export default comment_service;
