  
import { Container } from 'react-bootstrap';
import TopNav from '../components/Nav';
import Stockcontainer from '../container/StockContainer';

function App() {
  return (
    <Container className="pt-5 pb-5">
      <TopNav />
      <Stockcontainer />
    </Container>
  );
}

export default App;