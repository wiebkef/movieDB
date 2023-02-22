import React from "react";
import "../App.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="images">
        <div className="image-item">
          <h2 className="gallery">Perfect Burgers</h2>
        </div>
        <div className="image-item">
          <h2 className="gallery">The</h2>
        </div>
        <div className="image-item">
          <h2 className="gallery">Place</h2>
        </div>
        <div className="image-item">
          <h2 className="gallery">To</h2>
        </div>
        <div className="image-item">
          <h2 className="gallery">Be</h2>
        </div>
      </div>
    </div>
  );
}
