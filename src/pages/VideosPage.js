import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import "./VideosPage.css";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function VideosPage({ useBorder }) {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const [selected, setSelected] = useState(role);

  const navigate = useNavigate();

  const activeVideos = role
    ?
    videos.filter((video) => video.roles.includes(role))
    :
    videos;

  return (
    <div className='VideosPage'>
      <div className="filterVideoForm border-solid background-accent2 texture-noise1">

        <form>
          <label htmlFor="filter">Filter by Role:</label>
          <select
            name="filter"
            value={selected}
            onChange={(e) => {
              const targetUrl = e.target.value ? `/videos?role=${e.target.value}` : '/videos';
              setSelected(e.target.value);
              navigate(targetUrl);
            }}
          >
            <option value={""}> Any Role</option>
            <option value={'Animator'}> Animator </option>
            <option value={'Director'}> Director</option>
            <option value={'Copywriter'}> Copywriter </option>
          </select>
        </form>
      </div>
      <div
        className='VideosPage-videos'
      >
        {activeVideos.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
}