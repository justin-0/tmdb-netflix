import { create } from "zustand";

interface MediaState {
  content: "movie" | "tv_shows";
  setContent: (media: "movie" | "tv_shows") => void;
}

const useMediaStore = create<MediaState>()((set) => ({
  content: "movie",
  setContent: (content) => set({ content }),
}));

export default useMediaStore;
