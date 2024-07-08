import { Carousel } from "react-responsive-carousel";

export const homePageCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay>
      <div>
        <img src="src/assets/dog-image.jpg" alt="First slide" />
        <div className="legend">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div>
        <img src="src/assets/dog-image.jpg" alt="Second slide" />
        <div className="legend">
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div>
        <img src="src/assets/dog-image.jpg" alt="Third slide" />
        <div className="legend">
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </Carousel>
  );
};
