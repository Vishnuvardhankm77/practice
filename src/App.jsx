import logo from './logo.svg';
import './App.css';
import Component from './Component';

function App() {
  return (
   <div>
      <Component p={10} q={100}></Component>
      <Component p={100} q={40}></Component>
      <Component p={300} q={50}></Component>
   </div>
  );
}

export default App;
