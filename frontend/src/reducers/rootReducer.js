import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import articleReducer from "./article/articleReducer";
import commentReducer from "./comment/commentReducer";
import uiReducer from "./ui/uiReducer";

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
  commentReducer,
  uiReducer,
});

export default rootReducer;
