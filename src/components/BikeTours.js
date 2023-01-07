import CardGrid from './CardGrid';
import useFetch from '../hooks/useFetch';

function BikeTours() {
  const {data: tours, isLoading, error} = useFetch('http://localhost:3001/bike_tours');

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {tours && <CardGrid cards={tours} />}
    </div>
  );
}

export default BikeTours;