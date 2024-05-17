import React from "react";
import ascension from "../images/ascension.jpg";
import botw from "../images/botw.jpg";
import cyberpunk from "../images/cyberpunk.jpg";
import eldenring from "../images/eldenring.jpg";
import ffxvi from "../images/ffxvi.jpg";
import gtav from "../images/gtav.jpg";
import mario from "../images/mario.jpg";
import pacman from "../images/pacman.jpeg";
import re4 from "../images/re4.jpg";
import riftapart from "../images/riftapart.jpg";
import sonic from "../images/sonic.jpg";
import witcher3 from "../images/witcher3.jpg";
import automata from "../images/automata.jpg";

export default function Carousel() {
  const images = [
    {
      src: cyberpunk,
    },
    {
      src: botw,
    },
    {
      src: eldenring,
    },
    {
      src: automata,
    },
    {
      src: ascension,
    },
    {
      src: ffxvi,
    },
    {
      src: gtav,
    },
    {
      src: mario,
    },
    {
      src: pacman,
    },
    {
      src: re4,
    },
    {
      src: riftapart,
    },
    {
      src: sonic,
    },
    {
      src: witcher3,
    },
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    // cycle images
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentImage ? "active" : ""}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        ></div>
      ))}
      <div className="overlay"></div>
    </div>
  );
}
