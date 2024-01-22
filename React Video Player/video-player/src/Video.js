function Video(props) {
  return (
    <div id="video-player">
      <video src= {props.src} controls autostart autoPlay muted/>
    </div>
  );
};
export default Video;