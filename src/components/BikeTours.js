import CardGrid from './CardGrid';
import useFetch from '../hooks/useFetch';

function BikeTours() {
  const {data: cards, isLoading, error} = useFetch('http://127.0.0.1:8000/api/bike_tour_cards/');

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {cards && <CardGrid cards={cards} />}
    </div>
  );
}

export default BikeTours;