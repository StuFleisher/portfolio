import { useParams } from "react-router-dom";
import videos from "../data/videos";
import YouTubeEmbed from "./YouTubeEmbed";

export default function VideoDetails() {
  const { videoId } = useParams();
  const video = videos.find((video) => video.id === videoId);


  return (
    <div className="Project border-solid">
      <div className="Video-hero ">
        <div className="floatCard">
          <div className="background-white border-solid">
            <div className="Headline-separator texture-waves-accent1 border-solid"></div>
            <h3>{video.title}</h3>
          </div>
        </div>
        <div className="Project-image texture-waves-accent1 border-dashed">
        </div>
      </div>

      <div className="Project-footer background-light">
        <div className="fullwidth background-white" >


          <p className="textAlign-left"><strong>Role:</strong> {video.roles.join(", ")}<br />
            <strong>Agency:</strong>  {video.agency}</p>
          <p>
            {video.description}
          </p>
          {video.youTubeIds.map((id) => (
            <YouTubeEmbed videoId={id} key={id}/>
          ))}
        </div>

      </div>
      <div className="Headline-separator texture-noise2 background-accent2 border-solid"></div>
    </div >
  );

}