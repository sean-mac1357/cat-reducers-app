import { Provider } from 'react-redux';
import { store } from './redux/store';
import Display from './components/Display';
import AddCat from './components/AddCat';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>App Meow</h1>
        </header>
        <AddCat />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
