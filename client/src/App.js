import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Chat from './components/Chat.js';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} exact />
      <Route path='/chat' component={Chat} />
    </div>
  );
}

export default App;
