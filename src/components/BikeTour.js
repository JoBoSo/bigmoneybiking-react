import { Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import UncontrolledCarousel from "./Carousel";

const BikeTour = () => {
  const {id} = useParams();
  const {data: tour} = useFetch('http://127.0.0.1:8000/api/bike_tours/' + id);
  const {data: page} = useFetch('http://127.0.0.1:8000/api/bike_tour_pages/' + id);

  return (
    <div className="bike-tour">
      {
        tour && 
        <Container>
          
          <Row className="g-0">
            <h1 className="tour-title">{page.title}</h1>
            <p className="stats-bar">
              <b>Distance: </b>{tour.distance_km}km | 
              <b> Days: </b>{tour.days} | 
              <b> Dates: </b>{tour.start_date} {tour.end_date}
            </p>
          </Row>

          <Row>
            {/* <UncontrolledCarousel /> */}
          </Row>

          <Row className="g-0">
            <div>
              <iframe src={page.map_url} width="100%" height="480"></iframe>
            </div>
          </Row>

          <Row>
            {page.report}
          </Row>

        </Container>
      }
    </div>
  );
}
 
export default BikeTour;