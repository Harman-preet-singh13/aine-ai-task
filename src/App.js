
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
