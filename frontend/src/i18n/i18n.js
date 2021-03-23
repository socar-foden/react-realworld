import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE } from "../middlewares/uiMiddleware";
import {
  ACCOUNT,
  ARTICLES,
  CANCEL,
  DELETE,
  FAVORITES,
  FEEDS,
  L_EN,
  L_KO,
  MAIN,
  SIGN_IN,
  SIGN_UP,
  UPDATE,
  VIEW_COMMENTS,
  EDIT,
  EMAIL,
  USERNAME,
  PASSWORD,
  PASSWORD_CONFIRM,
  SUBMIT,
  PLEASE_ENTER_YOUR_FIRST_COMMENT,
  ADD_COMMENT,
  TITLE,
  BODY,
  DESCRIPTION,
  TAGS,
  ARE_YOU_SURE_DELETE,
  IS_REQUIRED,
  NOT_EMAIL_FORMAT,
  PASSWORDS_NOT_MATCH,
} from "./constants";

const resources = {
  [L_EN]: {
    translation: {
      [VIEW_COMMENTS]: "View Comments..",
      [FAVORITES]: "favorites",
      [SIGN_IN]: "Sign in",
      [SIGN_UP]: "Sign up",
      [CANCEL]: "Cancel",
      [UPDATE]: "Update",
      [DELETE]: "Delete",
      [MAIN]: "Main",
      [ACCOUNT]: "Account",
      [ARTICLES]: "Articles",
      [FEEDS]: "Feeds",
      [EDIT]: "Edit",
      [EMAIL]: "E-mail",
      [USERNAME]: "Username",
      [PASSWORD]: "Password",
      [PASSWORD_CONFIRM]: "Password Confirm",
      [SUBMIT]: "Submit",
      [PLEASE_ENTER_YOUR_FIRST_COMMENT]: "Please enter your first comment.",
      [ADD_COMMENT]: "Add Comment..",
      [TITLE]: "Title",
      [BODY]: "Body",
      [DESCRIPTION]: "Description",
      [TAGS]: "Tags",
      [ARE_YOU_SURE_DELETE]: "Are you sure you want to delete it?",
      [IS_REQUIRED]: "is(are) required.",
      [NOT_EMAIL_FORMAT]: "Not in E-Mail format.",
      [PASSWORDS_NOT_MATCH]: "Password Confirm does not match Password.",
    },
  },
  [L_KO]: {
    translation: {
      [VIEW_COMMENTS]: "댓글 보기..",
      [FAVORITES]: "좋아요",
      [SIGN_IN]: "로그인",
      [SIGN_UP]: "회원가입",
      [CANCEL]: "취소",
      [UPDATE]: "수정",
      [DELETE]: "삭제",
      [MAIN]: "메인",
      [ACCOUNT]: "계정",
      [ARTICLES]: "게시물",
      [FEEDS]: "피드",
      [EDIT]: "편집",
      [EMAIL]: "E-mail",
      [USERNAME]: "사용자명",
      [PASSWORD]: "비밀번호",
      [PASSWORD_CONFIRM]: "비밀번호 확인",
      [SUBMIT]: "게시",
      [PLEASE_ENTER_YOUR_FIRST_COMMENT]: "첫번째 댓글을 남겨주세요.",
      [ADD_COMMENT]: "댓글 추가..",
      [TITLE]: "제목",
      [BODY]: "내용",
      [DESCRIPTION]: "설명",
      [TAGS]: "태그",
      [ARE_YOU_SURE_DELETE]: "정말 삭제하시겠습니까?",
      [IS_REQUIRED]: "이(가) 필요합니다.",
      [NOT_EMAIL_FORMAT]: "E-mail 형식이 아닙니다.",
      [PASSWORDS_NOT_MATCH]: "비밀번호 확인이 비밀번호와 일치하지 않습니다.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem(LANGUAGE) || L_EN,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
