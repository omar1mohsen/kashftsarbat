"use client"
import { useState } from "react";
import { PlayIcon } from '@/assets/icons/PlayIcon';
import Image from "next/image";
import { Modal } from "antd";

const VideoThumbnail = ({ heroData,width,height,className,showImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
   <>
    <div className={`video-thumbnail ${isPlaying ? "playing" : ""}`}>
        <>
          <Image
            src={showImage && heroData?.image || '/images/video-img.jpg'}
            alt="video-thumbnail"
            className={`video-image ${className?className:""}`}
            width={width? width : 213}
            height={height? height : 213}
          />
          <div className="play-button" onClick={handlePlayVideo}>
            <PlayIcon />
          </div>
        </>
    </div>
      {isPlaying && (
        <Modal open={isPlaying} onCancel={()=>setIsPlaying(false)} footer={false} className="video-modal">
            <video
              className="w-full h-[350px]"
              src={heroData?.video}
              controls={false}
              autoPlay
              loop
            />
        </Modal>
      )}
      </> 

  );
};

export default VideoThumbnail;
