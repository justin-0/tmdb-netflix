import axios from "axios";
import useMediaStore from "../../store/media-store";
import useAuthStore from "../../store/auth-store";

export default async function contentLoader() {
  const { content } = useMediaStore.getState();
  const { user } = useAuthStore.getState();
  try {
    if (!user) {
      return null;
    }

    const response = await axios.get(`/api/v1/${content}/trending`);
    return response.data.content;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err.message);
    }
  }
}
