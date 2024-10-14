import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CounterContainer from './components/CounterContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='style'>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
