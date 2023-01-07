import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BikeTour = () => {
  const {id} = useParams();
  const {data: tour, error, isLoading} = useFetch('http://localhost:3001/bike_tours/' + id);

  return (
    <div className="bike-tour">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {
        tour && 
        <article>
          
          <Row className="g-0">
            <h1 className="tour-title">{tour.title}</h1>
            <p className="stats-bar">
              <b>Distance: </b>{tour.distance} | 
              <b> Days: </b>{tour.days} | 
              <b> Dates: </b>{tour.dates}
            </p>
          </Row>

          <Row className="g-0">
            <div>
              <iframe src={tour.map_link} width="100%" height="480"></iframe>
            </div>
          </Row>

        </article>
      }
    </div>
  );
}
 
export default BikeTour;