import { useSelector } from 'react-redux';

import './App.css';
import { Form } from './components/Form/Form';
import { tokenFromStore } from './redux/store';
import Logo from './assets/test-capital-logo.svg';
import { Footer } from './components/Footer/Footer';
import { TokenProfile } from './components/TokenProfile/TokenProfile';


function App() {
  const token = useSelector(tokenFromStore);

  return (
    <>
      <header>
        <div className="container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
      </header>
      <main>
        {token.name === undefined ? (
          <Form />
        ) : (
          <TokenProfile token={token} />
        )}
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
