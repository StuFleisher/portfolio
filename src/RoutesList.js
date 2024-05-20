import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import VideosPage from "./pages/VideosPage";
import VideoDetails from "./components/VideoDetails";

export default function RoutesList(){

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/videos" element={<VideosPage/>} />
      <Route path="/videos/:videoId" element={<VideoDetails/>} />
    </Routes>
  )

}