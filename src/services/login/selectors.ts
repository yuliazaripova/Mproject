import { IAuthStore } from "../../redux/types";

export const getEmail = (state:IAuthStore) => state.email;
export const getPassword = (state:IAuthStore) => state.password;