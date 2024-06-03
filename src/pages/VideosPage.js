import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import "./VideosPage.css";
import { useSearchParams } from "react-router-dom";

export default function VideosPage({useBorder}) {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  const selected = role
    ?
    videos.filter((video) => video.roles.includes(role))
    :
    videos;

  return (
    <div
      className={`VideosPage`}
    >
      {selected.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  );
}