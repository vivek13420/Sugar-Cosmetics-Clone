
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import MakeupHero from './Pages/MakeupHero';
import ToastExample from './Components/Toast';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className="App">
      {/* <MakeupHero/> */}
      <MainRoutes/>
    {/* <ToastExample/> */}
    <Toaster/>
    </div>
  );
}

export default App;
