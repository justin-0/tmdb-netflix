import { useEffect, useState } from "react";
import Navbar from "../components/navbars/auth-nav";
import useAuthStore from "../store/auth-store";
import { Link, useNavigate, useParams } from "react-router-dom";
import useMediaStore from "../store/media-store";
import axios from "axios";
import ReactPlayer from "react-player";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import Slider from "../components/slider";
import { ContentData } from "../pages/HomePage";

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
  const [similarMedia, setSimilarMedia] = useState<ContentData[]>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const startOfTrailers = currentIndex === 0 ? true : false;
  const endOfTrailers = currentIndex === trailers.length - 1;

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    const getSimilarMedia = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${content}/${params.id}/similar`,
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

  if (!trailers || trailers.length === 0) {
    return (
      <div className="h-screen w-full bg-black text-white">
        <Navbar />
        <div className="mx-auto flex h-5/6 w-10/12 flex-col items-center justify-center md:max-w-4xl">
          <h2>No Trailers Available.</h2>
        </div>
      </div>
    );
  }

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
        <div className="my-10 bg-black md:mb-0">
          <Link to={`/details/${params.id}`}>
            <Button variant="secondary">
              <Info className="mr-2 h-4 w-4" />
              More Info
            </Button>
          </Link>
        </div>
        {/* SIMILAR MEDIA */}
      </div>
      <div className="bg-black">
        <Slider data={similarMedia} title="Similar Movies and Shows" />
      </div>
    </div>
  );
}

export default WatchRoute;
