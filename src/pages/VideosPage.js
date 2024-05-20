import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import "./VideosPage.css"

export default function VideosPage() {
  return (
    <div
      className="VideosPage background-Light"
    >
    {videos.map((video) => (
      <VideoCard video={video} key={video.id} />
    ))}
    </div>
)
}