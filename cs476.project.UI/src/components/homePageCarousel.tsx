import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HomePageCarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
      <div>
        <img src="src/assets/dog-image.jpg" alt="First slide" />
        <div className="legend">
          <h3>Buddy</h3>
          <p>
            Buddy is a loyal Golden Retriever who loves playing fetch and enjoys
            long walks in the park. His friendly nature makes him a great
            companion for families.
          </p>
        </div>
      </div>
      <div>
        <img src="src/assets/dog-image.jpg" alt="Second slide" />
        <div className="legend">
          <h3>Luna</h3>
          <p>
            Luna, the adventurous Husky, is always ready for an outdoor
            expedition. Her striking blue eyes and playful spirit capture the
            hearts of everyone she meets.
          </p>
        </div>
      </div>
      <div>
        <img src="src/assets/dog-image.jpg" alt="Third slide" />
        <div className="legend">
          <h3>Charlie</h3>
          <p>
            Charlie is a smart and curious Beagle who loves to sniff out new
            adventures. His energetic personality and affectionate nature make
            him a beloved member of the family.
          </p>
        </div>
      </div>
    </Carousel>
  );
};
