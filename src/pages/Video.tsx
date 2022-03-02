import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ControlBar = styled.div<{ showControls: boolean }>`
  display: ${({ showControls }) => (showControls ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ControlButton = styled.button`
  height: 50px;
  width: 50px;
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.text.primary};
`;

export default function Video() {
  // video source
  // autoplay
  // go to (time stamp)
  // kontrolki na onhover
  // dodać router
  // przewijanie do przodu / do tyłu
  // pasek progresu
  // skip intro / go to next episode (new source)
  // pasek głośności
  // podgląd wideo na przewijaniu
  // ustawianie wielkości wideo na stronie - małe / fullscreen
  // szybkość odtwarzania
  // wyświetlanie wideo na dole po lewej po przeskrolowaniu
  // obliczanie timestampu na którym aktualnie jest wideo
  // doładowywanie danych z dołu do góry

  const [showControls, setShowControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    !isPlaying && setShowControls(!showControls);

    isPlaying ? videoRef.current?.pause() : videoRef.current?.play();
    setIsPlaying((prevState) => !prevState);
  };

  const handleMuteClick = () => {
    setIsMuted((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOnMouseMove = () => {
      setShowControls(true);
    };

    videoRef.current &&
      videoRef.current.addEventListener("mousedown", handleOnMouseMove);

    return () => {
      videoRef.current &&
        videoRef.current.removeEventListener("mousedown", handleOnMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <VideoElement
        controls={false}
        autoPlay={false}
        ref={videoRef}
        muted={isMuted}
      >
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </VideoElement>
      <ControlBar showControls={showControls}>
        <ControlButton onClick={handlePlayClick}>
          {isPlaying ? "l l" : "l>"}
        </ControlButton>
        <ControlButton onClick={handleMuteClick}>
          {isMuted ? "U" : "M"}
        </ControlButton>
      </ControlBar>
    </Wrapper>
  );
}
