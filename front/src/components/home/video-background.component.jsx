import React from 'react';

const VideoBackground = () => {
  return (
    <video
      style={{
        objectFit: 'cover',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0
      }}
      autoPlay
      loop
      muted>
      <source
        src="https://dl.dropboxusercontent.com/s/o34gw59v3doomda/2_5463254187842213157.mp4?dl=0"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoBackground;
