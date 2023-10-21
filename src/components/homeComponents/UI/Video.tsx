import { Player, ControlBar } from 'video-react';

const videoURL = require("../../../assets/taiyokai.mp4");

function Video () {
  
  return (
    <Player autoPlay src={videoURL} muted>
      <ControlBar autoHide={false} disableDefaultControls={true}></ControlBar>
    </Player>
  )
}

export default Video
