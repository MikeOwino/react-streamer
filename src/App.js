import "./styles.css";

export default function App() {
  return (
    <video
      id="my-video"
      className="video-js"
      controls
      preload="auto"
      poster="https://res.cloudinary.com/weknow-creators/image/upload/c_scale,w_1280/v1647843623/wallhaven-83g6zy_i52wko.png"
      data-setup
      loop
    >
      <source
        src="https://nl37.seedr.cc/ff_get/1135095125/hillsong-a.megachurch.exposed.s01e01.720p.DSCP.WEBRip.x264-GalaxyTV.mkv?st=kpRmaU8YYv_vpsjYyhDwqA&e=1648331749"
        type="video/mp4"
      />
    </video>
  );
}
