import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/carouselStyles.css';

export const HomePageCarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
      <div>
        <img src="src/assets/carousel-image-1.jpg" alt="First slide" />
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
        <img src="src/assets/carousel-image-2.jpg" alt="Second slide" />
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
        <img src="src/assets/carousel-image-3.jpg" alt="Third slide" />
        <div className="legend">
          <h3>Charlie</h3>
          <p>
            Charlie is a smart and curious Beagle who loves to sniff out new
            adventures. His energetic personality and affectionate nature make
            him a beloved member of the family.
          </p>
        </div>
      </div>
      <div>
        <img src="src/assets/carousel-image-4.jpg" alt="Fourth slide" />
        <div className="legend">
          <h3>Max</h3>
          <p>
            Max is a devoted Labrador Retriever who adores playing tug-of-war
            and revels in long hikes in the woods. His affectionate demeanor
            makes him an ideal friend for households of all sizes.
          </p>
        </div>
      </div>
      <div>
        <img src="src/assets/carousel-image-5.jpg" alt="Fifth slide" />
        <div className="legend">
          <h3>Bun</h3>
          <p>
            Bun is a laid-back domestic short-haired cat who loves nothing more
            than curling up in cozy spots for long naps. His calm and gentle
            personality makes him a perfect companion for a tranquil home
            environment.
          </p>
        </div>
      </div>
      <div>
        <img src="src/assets/carousel-image-6.jpg" alt="Sixth slide" />
        <div className="legend">
          <h3>Oggy</h3>
          <p>
            Oggy is a sassy Bangel cat who often sports an endearing, slightly
            annoyed expression. Despite her grumpy appearance, she has a soft
            spot for her favorite humans and loves to play with her toys when no
            one is watching.
          </p>
        </div>
      </div>
    </Carousel>
  );
};
