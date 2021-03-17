import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import articleReducer from "./article/articleReducer";
import commentReducer from "./comment/commentReducer";
import uiReducer from "./ui/uiReducer";
import profileReducer from "./profile/profileReducer";

const rootReducer = combineReducers({
  userReducer,
  articleReducer,
  commentReducer,
  uiReducer,
  profileReducer,
});

export default rootReducer;
