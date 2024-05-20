import { Link } from "react-router-dom";
import './VideoCard.css';

export default function VideoCard({ video }) {
  return (
    <div className="VideoCard">
    <Link to={`/videos/${video.id}`}>
      <div style={{
        margin: '10px',
        marginTop: '20px',
        paddingTop: '3px',
      }}
        className="background-white border-solid"
      >
        <div
          className="VideoCard-contents border-solid background-white"
          style={{
            backgroundImage: `url(${video.thumb})`,
            backgroundSize: 'cover',
          }}
        >


          <div className="floatCard">
            <div className="background-white border-solid">
              <div className="Headline-separator texture-waves-accent1 border-solid"></div>
              <h3>{video.title}</h3>
            </div>
          </div>
        </div >
        <div className="Headline-separator texture-noise2 background-accent2 border-solid"></div>
      </div>
    </Link >
    </div>
  );
}