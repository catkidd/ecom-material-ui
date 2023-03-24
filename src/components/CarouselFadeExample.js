import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src="/assets/carousel/online-shopping.jpg"
          alt="First slide"
          width="100%"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/carousel/cyber-monday.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/carousel/shopping-cart.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/carousel/digital-out-of-home.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/carousel/shopping-bag-cart.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;