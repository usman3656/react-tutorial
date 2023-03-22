import logo from './logo.svg';
import './App.css';
import { Button,form } from 'react-bootstrap';
import { TestButton } from './Componenst/Button';


function App() {
  return (
    <div className="App">
      react app demo
      <Button> bro</Button>
      <TestButton buttonname = {"usman"}/>
      <TestButton buttonname = {"boss"}/>

    </div>
  );
}

export default App;
