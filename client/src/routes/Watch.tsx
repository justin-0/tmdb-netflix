import { useEffect, useState } from "react";
import Navbar from "../components/navbars/auth-nav";
import useAuthStore from "../store/auth-store";
import { useNavigate, useParams } from "react-router-dom";
import useMediaStore from "../store/media-store";
import axios from "axios";
import ReactPlayer from "react-player";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TrailerType = {
  key: string;
  name: string;
};

function WatchRoute() {
  const { user } = useAuthStore();
  const { content } = useMediaStore();
  const navigate = useNavigate();
  const params = useParams();

  const [trailers, setTrailers] = useState<TrailerType[]>([]);
  const [similarMedia, setSimilarMedia] = useState<[]>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [media, setMedia] = useState({});
  const startOfTrailers = currentIndex === 0 ? true : false;
  const endOfTrailers = currentIndex === trailers.length - 1;
  console.log(currentIndex === 0);

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
          `/api/v1/${content}/${params.id}/trailers`,
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

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    const getMediaContent = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${content}/${params.id}/details`,
        );
        setMedia(response.data.content);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.message);
        }
      }
    };
    getMediaContent();
  }, [content, params.id]);

  if (!trailers) {
    return (
      <div className="h-screen w-full bg-black text-white">
        <Navbar />
        <div className="mx-auto max-w-4xl outline outline-red-500">
          {/* SHOW NO CONTENT STATE */}
        </div>
      </div>
    );
  }
  // console.log(trailers);
  return (
    <div className="h-screen w-full bg-black text-white">
      <Navbar />
      <div className="mx-auto mt-8 flex w-10/12 flex-col items-center justify-center md:max-w-4xl">
        {/* SHOW CURRENT TRAILER */}
        {trailers[currentIndex] ? (
          <>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailers[currentIndex].key}`}
              controls={true}
              width={"100%"}
              height={"70vh"}
            />
          </>
        ) : null}
        <div className="mt-4 space-x-8">
          <Button
            size="icon"
            onClick={() => setCurrentIndex((i) => i - 1)}
            disabled={startOfTrailers}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            onClick={() => setCurrentIndex((i) => i + 1)}
            disabled={endOfTrailers}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WatchRoute;
