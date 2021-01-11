import logo from './logo.svg';
import './App.css';
import FetchFromRedisModule from './Modules/FetchFromRedisModule';
import PushToRedisModule from './Modules/PushToRedisModule';

function App() {
  return (
    <div id='container'>
    <PushToRedisModule />  
    <FetchFromRedisModule />
    </div>
    
  );
}

export default App;
