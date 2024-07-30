import { create } from "zustand";
import axios, { AxiosError, AxiosResponse } from "axios";
import { UserDocument } from "../lib/types/user";
import { toast } from "sonner";

interface RegisterData {
  email: string;
  username: string;
  password: string;
}

interface RegisterReponse {
  success: boolean;
  user: UserDocument;
}

interface AuthState {
  user: null | UserDocument;
  signup: (data: RegisterData) => Promise<RegisterReponse | undefined>;
  login: () => void;
  logout: () => void;
  isAuth: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  signup: async (data: RegisterData) => {
    try {
      const response: AxiosResponse<RegisterReponse> = await axios.post(
        "/api/v1/auth/register",
        data,
      );
      if (response.data.success) {
        set({ user: response.data.user });
        toast.success("Account created.");
      }

      return response.data;
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
  login: async () => {},
  logout: async () => {},
  isAuth: async () => {},
}));

export default useAuthStore;
