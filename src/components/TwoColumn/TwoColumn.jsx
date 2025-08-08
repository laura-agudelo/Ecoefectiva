import React, { useEffect, useRef } from "react";
import "./TwoColumn.css";

function TwoColumn({ title, text, url, mediaType, textOnLeft = true }) {
  // Define las clases CSS basadas en la prop textOnLeft
  const containerClass = `two-column-container ${textOnLeft ? "" : "reverse"}`;
  const videoRef = useRef(null);

  useEffect(() => {
    if (mediaType !== "video" || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.error("Error al reproducir el video:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [mediaType]);

  return (
    <section className={containerClass}>
      <div className="text-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="media-content">
        {mediaType === "image" && <img src={url} alt={title} />}
        {mediaType === "video" && (
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={url}
              title={title}
              frameBorder="0"
              muted
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></video>
          </div>
        )}
      </div>
    </section>
  );
}

export default TwoColumn;
