import { useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import videos from "../data/videos";

const MARGIN = 20;
const PLAYER_SCALE = .8;

export default function VideoDetails() {
  const { videoId } = useParams();
  const video = videos.find((video) => video.id === videoId);
  const container = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setContainerWidth(() => container.current ? container.current.offsetWidth - 2 * MARGIN : 0);
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [container]);

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

      <div className="Project-footer background-light" ref={container}>
        <div className="fullwidth background-white" >


          <p className="textAlign-left"><strong>Role:</strong> {video.roles.join(", ")}<br />
            <strong>Agency:</strong>  {video.agency}</p>
          <p>
            {video.description}
          </p>
          {video.youTubeIds.map((id) => (
            <div
              className="player"
              style={{
                display:'flex',
                alignItems:'center'
              }}
              >
              <iframe
                key={id}
                style={{ margin: MARGIN }}
                width={`${containerWidth}`}
                height={`${containerWidth * 9 / 16}`}
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              >
              </iframe>
            </div>
          ))}
        </div>

      </div>
      <div className="Headline-separator texture-noise2 background-accent2 border-solid"></div>
    </div >
  );

}