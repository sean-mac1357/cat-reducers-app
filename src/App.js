import { Provider } from 'react-redux';
import { store } from './redux/store';
import ActivityApp from './components/ActivityApp'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Meow App</h1>
        </header>
        <ActivityApp />
      </div>
    </Provider>
  );
}

export default App;
