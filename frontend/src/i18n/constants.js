export const L_EN = "en";
export const L_KO = "ko";

// UI
export const FAVORITES = "FAVORITES";
export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const CANCEL = "CANCEL";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const MAIN = "MAIN";
export const ACCOUNT = "ACCOUNT";
export const ARTICLES = "ARTICLES";
export const FEEDS = "FEEDS";
export const EDIT = "EDIT";
export const EMAIL = "EMAIL";
export const USERNAME = "USERNAME";
export const PASSWORD = "PASSWORD";
export const PASSWORD_CONFIRM = "PASSWORD_CONFIRM";
export const SUBMIT = "SUBMIT";
export const TITLE = "TITLE";
export const BODY = "BODY";
export const DESCRIPTION = "DESCRIPTION";
export const TAGS = "TAGS";

// MESSAGE
export const VIEW_COMMENTS = "VIEW_COMMENTS";
export const PLEASE_ENTER_YOUR_FIRST_COMMENT =
  "PLEASE_ENTER_YOUR_FIRST_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const ARE_YOU_SURE_DELETE = "ARE_YOU_SURE_DELETE";
export const IS_REQUIRED = "IS_REQUIRED";
export const NOT_EMAIL_FORMAT = "NOT_EMAIL_FORMAT";
export const PASSWORDS_NOT_MATCH = "PASSWORDS_NOT_MATCH";
export const WELCOME = "WELCOME";
export const SIGN_UP_COMPLETE = "SIGN_UP_COMPLETE";
// MESSAGE (Server Response)
export const SIGN_IN_FAILURE = "email or password is invalid";
export const SIGN_UP_FAILURE_EMAIL_EXIST = "email is already taken.";
export const SIGN_UP_FAILURE_USERNAME_EXIST = "username is already taken.";
export const SIGN_UP_FAILURE_ALL_EXIST = `username is already taken.
email is already taken.`;

// TIME FORMAT
export const dateFormatMap = {
  [L_KO]: {
    dayNames: [
      "일",
      "월",
      "화",
      "수",
      "목",
      "금",
      "토",
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
  },
  [L_EN]: {
    dayNames: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
  },
};
