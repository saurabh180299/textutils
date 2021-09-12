import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
function App() {
  return (
    <>
  <Navbar title="Textutils"/>
    <div className="Container">
      <Textform heading="Text to analyze"/>
    </div>
  </>
  );
}

export default App;
