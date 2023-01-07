import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const CardGrid = ({cards}) => {
  return (
    <Container fluid className="p-0">
      <Row xs={1} sm={2} md={3} className="g-0 card-margin">
        {cards.map((card) => (
          <Col key={card.title}>
            <Card className="border-0 card-margin card-corners">
              <Link to={`/${card.id}`}>
                <div className="card-content">
                  <div className="overlay"></div>
                  <Card.Img className="image img-fluid corners" src={require("./images/to-mtrl/IMG_4290.JPG")} />
                  <div className="details">
                    <Card.Title className="title">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="subtitle">
                      {card.subtitle}
                    </Card.Text>
                  </div>
                </div>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 
export default CardGrid;