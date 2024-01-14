import React from "react";
let src = "/sample2.mp4";

function VideoSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">


      <video src={src}  className="w-100 aspect-video " loop autoPlay muted></video>
      </div>
    </div>
  );
}

export default VideoSection;
