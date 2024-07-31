import { create } from "zustand";

interface MediaState {
  content: "movies" | "tv";
  setContent: (media: "movies" | "tv") => void;
}

const useMediaStore = create<MediaState>()((set) => ({
  content: "movies",
  setContent: (content) => set({ content }),
}));

export default useMediaStore;
