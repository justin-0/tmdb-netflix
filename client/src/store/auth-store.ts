import { create } from "zustand";
import axios, { AxiosError, AxiosResponse } from "axios";
import { UserDocument } from "../lib/types/user";
import { toast } from "sonner";

interface RegisterData {
  email: string;
  username: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

export interface RegisterReponse {
  success: boolean;
  user: UserDocument;
}

interface AuthState {
  user: null | UserDocument;
  register: (data: RegisterData) => Promise<RegisterReponse | undefined>;
  login: (data: LoginData) => Promise<RegisterReponse | undefined>;
  logout: () => void;
  isAuth: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  register: async (data: RegisterData) => {
    try {
      const response: AxiosResponse<RegisterReponse> = await axios.post(
        "/api/v1/auth/register",
        data,
      );
      if (response.data.success) {
        set({ user: response.data.user });
        toast.success("Account created.");
        return response.data;
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<{ success: boolean; message: string }>;
        if (!error.response?.data.success) {
          toast.error(error.response?.data?.message || "An error occurred");
          set({ user: null });
        }
      }
    }
  },
  login: async (data: LoginData) => {
    try {
      const response: AxiosResponse<RegisterReponse> = await axios.post(
        "/api/v1/auth/login",
        data,
      );
      if (response.data.success) {
        set({ user: response.data.user });
        toast.success("Credentials valid.");
        return response.data;
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<{ success: boolean; message: string }>;
        if (!error.response?.data.success) {
          toast.error(error.response?.data?.message || "An error occurred");
          set({ user: null });
        }
      }
    }
  },
  logout: async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null });
    } catch (err) {}
  },
  isAuth: async () => {
    try {
      const resp: AxiosResponse<RegisterReponse> = await axios.get(
        "/api/v1/auth/authCheck",
      );

      if (resp.data.success) {
        set({ user: resp.data.user });
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<{ success: boolean; message: string }>;
        if (!error.response?.data.success) {
          // toast.error(error.response?.data?.message || "An error occurred");

          set({ user: null });
        }
      }
    }
  },
}));

export default useAuthStore;
