import React, { Component } from "react";

import './Carousel2.css';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "images1/img13.jpg",
        "images1/img12.jpg",
        "images1/img8.jpg",
        // Add more image URLs as needed
      ],
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    const { currentIndex, images } = this.state;
    this.setState({
      currentIndex: (currentIndex + 1) % images.length,
    });
  };

  prevSlide = () => {
    const { currentIndex, images } = this.state;
    this.setState({
      currentIndex: (currentIndex - 1 + images.length) % images.length,
    });
  };

  goToSlide = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="carousel-container">
        <div className="carousel">
          <div
            className="carousel-slide"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="carousel-image"
              />
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button className="prev-button" onClick={this.prevSlide}>
            &lt;
          </button>
          <button className="next-button" onClick={this.nextSlide}>
            &gt;
          </button>
          <div className="indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => this.goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}





export default  Carousel;
