import axios from "axios";

const comment_service = {
  getCommentsFromAnArticle: ({ slug }) =>
    axios.get(`/api/articles/${slug}/comments`),
  addCommentsToAnArticle: ({ slug, comment }) =>
    axios.post(`/api/articles/${slug}/comments`, { comment }),
};

export default comment_service;
