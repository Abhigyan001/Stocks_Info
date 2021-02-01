import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import TopNav from '../components/Nav';
import Footer from '../components/Footer';
import Stockcontainer from '../container/StockContainer';
import { fetchStocks } from '../redux/index';

function App() {
  const dispatch = useDispatch();
  const handleOnSelect = e => {
    dispatch(fetchStocks(e.target.value));
  };

  return (
    <Container className="pt-5 pb-5">
      <TopNav handleOnSelect={handleOnSelect} />
      <Stockcontainer />
      <Footer />
    </Container>
  );
}

export default App;
