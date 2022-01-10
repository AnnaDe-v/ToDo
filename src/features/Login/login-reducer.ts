import { Dispatch } from "react";
import { authAPI, LoginParamsType } from "../../api/todolists-api";
import {
  SetAppErrorActionType,
  setAppStatusAC,
  SetAppStatusActionType,
} from "../../app/app-reducer";
// import { handleServerAppError } from "../../utils/error-utils"

const initialState: InitialStateType = {
  isLoggedIn: false
};

export const loginReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "login/SET-IS-LOGGED-IN":
      return { ...state, isLoggedIn: action.value };
    default:
      return state;
  }
};

// thunks

export const loginTC =
  (data: LoginParamsType) =>
  (dispatch: Dispatch<ActionsType | SetAppStatusActionType>) => {
    dispatch(setAppStatusAC("loading"));
    authAPI.login(data).then((res) => {
      if (res.data.resultCode === 0) {
        alert("YO");
        dispatch(setIsLoggedInAC(true))
        dispatch(setAppStatusAC("succeeded"));
      } else {
        alert("NO");
        dispatch(setAppStatusAC("succeeded"));
      }
    });
  };

export const setIsLoggedInAC = (value: boolean) =>
  ({ type: "login/SET-IS-LOGGED-IN", value } as const);

type ActionsType =
  | ReturnType<typeof setIsLoggedInAC>
  | SetAppStatusActionType
  | SetAppErrorActionType;

type InitialStateType = {
  isLoggedIn: boolean
};
