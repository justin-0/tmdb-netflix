import { useEffect, useState } from "react";
import useMediaStore from "../store/media-store";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ContentData } from "../pages/HomePage";

function DetailsRoute() {
  const { content } = useMediaStore();
  const { id } = useParams();

  const [mediaContent, setMediaContent] = useState<ContentData>();

  useEffect(() => {
    const getContentDetails = async () => {
      const response = await axios.get(`/api/v1/${content}/${id}/details`);

      setMediaContent(response.data.content);
    };
    getContentDetails();
  }, [content, id]);

  return (
    <div>
      <p>sdadada</p>
      <h1>{mediaContent?.name || mediaContent?.title}</h1>
    </div>
  );
}

export default DetailsRoute;
