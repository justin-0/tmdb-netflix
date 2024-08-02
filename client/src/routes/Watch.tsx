import { useEffect, useState } from "react";
import Navbar from "../components/navbars/auth-nav";
import useAuthStore from "../store/auth-store";
import { useNavigate, useParams } from "react-router-dom";
import useMediaStore from "../store/media-store";
import axios from "axios";

function WatchRoute() {
  const { user } = useAuthStore();
  const { content } = useMediaStore();
  const navigate = useNavigate();
  const params = useParams();

  const [trailers, setTrailers] = useState<[]>();
  const [similarMedia, setSimilarMedia] = useState<[]>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [media, setMedia] = useState({});

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    const getSimilarMedia = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${content}/${params.id}/trailers`,
        );
        setSimilarMedia(response.data.content);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.message);
        }
      }
    };
    getSimilarMedia();
  }, [content, params.id]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    const getTrailers = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${content}/${params.id}/similar`,
        );
        setTrailers(response.data.content);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.message);
        }
      }
    };
    getTrailers();
  }, [content, params.id]);

  return (
    <div className="h-screen w-full bg-black text-white">
      <Navbar />
    </div>
  );
}

export default WatchRoute;
