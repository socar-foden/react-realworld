import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import articleReducer from "./article/articleReducer";
import commentReducer from "./comment/commentReducer";

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
  commentReducer,
});

export default rootReducer;
