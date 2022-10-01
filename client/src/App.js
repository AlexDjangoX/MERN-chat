import './App.css';
import { Route } from 'react-router-dom';
import Home from '../src/pages/Home.js';
import Chat from '../src/pages/Chat.js';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} exact />
      <Route path='/chat' component={Chat} />
    </div>
  );
}

export default App;
