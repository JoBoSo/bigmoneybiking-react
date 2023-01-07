import Carousel from 'react-bootstrap/Carousel';

function UncontrolledCarousel(images) {
  //const myimg = require('../images/mtrl-sherbrooke/IMG_2707.jpg');
  // const {id} = useParams();

  // var fs = require('fs');
  // var img_files = fs.readdirSync(`../images/${id}`);
  // console.log(img_files)

  return (
    <Carousel>

      {images.map((image) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${image}`}
            alt="First slide"
            loading="lazy"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

    </Carousel>
  );
}

export default UncontrolledCarousel;