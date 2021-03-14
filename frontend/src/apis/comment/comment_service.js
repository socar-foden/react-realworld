import axios from "axios";

const comment_service = {
  getCommentsFromAnArticle: ({ slug }) =>
    axios.get(`/api/articles/${slug}/comments`),
  addCommentsToAnArticle: ({ slug, comment }) =>
    axios.post(`/api/articles/${slug}/comments`, { comment }),
  deleteComment: ({ slug, id }) =>
    axios.delete(`/api/articles/${slug}/comments/${id}`),
};

export default comment_service;
