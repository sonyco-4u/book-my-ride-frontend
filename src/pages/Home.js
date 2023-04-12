import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../Redux/carsList/carsListSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.cardata);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="headline-cont">
        <h1>Latest Models</h1>
        <span>Please select a car</span>
      </div>
      <div className="cars-container">
        {items.map((item) => (
          <div className="car-item" key={item.id}>
            <img className="car-img" src={item.image} alt="car" />
            <div className="car-det">
              <h2>
                {item.make}
                {' '}
                {item.model}
              </h2>
              <p className="price">
                $
                {item.daily_rate}
              </p>

              <Link to={`/car/${item.id}`} className="btn-details">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
