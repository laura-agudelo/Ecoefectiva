import React, { useEffect, useRef, useState } from "react";
import "./TwoColumn.css";

function TwoColumn({ title, text, url, mediaType, textOnLeft = true }) {
  // Define las clases CSS basadas en la prop textOnLeft
  const containerClass = `two-column-container ${textOnLeft ? "" : "reverse"}`;
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observa el texto
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => textObserver.disconnect();
  }, []);

  useEffect(() => {
    if (mediaType !== "video" || !videoRef.current) return;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            video.muted = false;
            video.play().catch((error) => {
              console.error("Error al reproducir el video:", error);
            });
          } else {
            video.muted = true;
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoObserver.observe(videoRef.current);

    return () => videoObserver.disconnect();
  }, [mediaType]);

  return (
    <section className={containerClass}>
      <div
        ref={textRef}
        className={`text-content ${isVisible ? "show" : ""} ${
          textOnLeft ? "from-left" : "from-right"
        }`}
      >
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
              controls
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
