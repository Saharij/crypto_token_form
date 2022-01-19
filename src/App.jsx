import './App.css';
import { Form } from './components/Form/Form';
import Logo from './assets/test-capital-logo.svg';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
      </header>
      <main>
        <Form />
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
