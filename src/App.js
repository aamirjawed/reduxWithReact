import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CounterContainer from './components/CounterContainer';

import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';




function App() {
  return (
    <Provider store={store}>
      <div className='style'>
      {/* <ItemContainer cake />
      <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CounterContainer /> */}
        <UserContainer />
       
      </div>
    </Provider>
  );
}

export default App;
