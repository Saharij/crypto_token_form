import './App.css';
import { Form } from './components/Form/Form';
import Logo from './assets/test-capital-logo.svg';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <h1>
          Token
        </h1>
        <p>
          Create your own crypto token
        </p>
      </header>
      <main>
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
