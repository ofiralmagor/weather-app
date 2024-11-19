import './App.css';
import Weather from './components/Weather.jsx';
<<<<<<< HEAD
import logo from '/logo.jpg';
=======
import logo from '/logo.jpeg';
>>>>>>> a49df4e (Initial commit with backend integration)

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Logo" className="logo" />
      <div className="container">
        <Weather/>
      </div>

    </div>
  );
}
export default App;
