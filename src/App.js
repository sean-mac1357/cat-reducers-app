import { Provider } from 'react-redux';
import { store } from './redux/store';
import Activity from './components/Activity';
import ChangeName from './components/ChangeName';
import './App.css';
import ActivityButton from './components/ActivityButton';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Meow App</h1>
        </header>
        <ChangeName />
        <Activity />
        <ActivityButton />
      </div>
    </Provider>
  );
}

export default App;
