function VideoPlayer({ videoUrl }) {
        return (
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      
      export default VideoPlayer;