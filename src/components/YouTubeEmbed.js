import { useEffect,useState,useRef } from "react";

const MARGIN = 20;

function YouTubeEmbed({ videoId, useBorder }) {

  const [containerWidth, setContainerWidth] = useState(0);
  const container = useRef();

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
    <div
    ref={container}
      className={`player ${useBorder ? 'texture-noise2 background-accent2 border-solid' : ""}`}
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <iframe
        key={videoId}
        style={{ margin: MARGIN }}
        width={`${containerWidth}`}
        height={`${containerWidth * 9 / 16}`}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}

export default YouTubeEmbed;