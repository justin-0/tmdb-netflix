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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [media, setMedia] = useState({});

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    const getTrailers = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${content}/${params.id}/trailers`,
        );
        console.log("RESPONSE FROM API ", response);
        setTrailers(response.data.content);
        console.log("TRAILERS_STATE ", trailers);
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
