import { Dispatch } from "redux";
import { authAPI } from "../api/todolists-api";
import { setIsLoggedInAC } from "../features/Login/login-reducer";

const initialState: InitialStateType = {
  status: "idle",
  error: null,
  isInitialized: false,
};

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "APP/SET-STATUS":
      return { ...state, status: action.status };
    case "APP/SET-ERROR":
      return { ...state, error: action.error };
    case "APP/SET-INITIALIZED":
      return { ...state, isInitialized: action.isInitialized};
    default:
      return { ...state };
  }
};

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
export type InitialStateType = {
  status: RequestStatusType;
  error: string | null;
  isInitialized: boolean;
};

export const setAppErrorAC = (error: string | null) =>
  ({ type: "APP/SET-ERROR", error } as const);
export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: "APP/SET-STATUS", status } as const);
  export const setInitializedAC = (isInitialized: boolean) =>
  ({ type: "APP/SET-INITIALIZED", isInitialized } as const);

export const initializeAppTC = () => (dispatch: Dispatch) => {
  authAPI.me()
  .then((res) => {
    debugger;
    if (res.data.resultCode === 0) {
      dispatch(setIsLoggedInAC(true));
    } else {
    }
  })
  .finally( () => {
    dispatch(setInitializedAC(true));
  })

};

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type SetInitializedActionType = ReturnType<typeof setInitializedAC>;

type ActionsType = SetAppErrorActionType | SetAppStatusActionType | SetInitializedActionType;
