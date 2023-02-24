import './App.css';
import CollisionCharges from './collisions/CollisionCharges';
import { MonthlyCollisions } from './collisions/MonthlyCollisions';

function App() {
  return (<>
    <h1 className="App-header">San Diego Open Data: Traffic Collisions</h1>
    <CollisionCharges/>
    <MonthlyCollisions/>
  </>);
}

export default App;
