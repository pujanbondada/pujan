import './App.css';
import Form from './components2/form';
import Navbar from './components2/navbar';
import Navbar2 from './components2/navbar2';
import Slider from './components2/slider';
import './css/bootstrap.css';


function App() {
  
  return (
    <>
    <div class="container-fluid">
      <div class="row nav1">
        <Navbar/>
      </div>
      <div class="row justify-content-center nav2">
       <Navbar2/>
      </div>

      
      <div class="row">
       <Slider/>
      </div>
      <div class="row">
        <Form/>
      </div>
    </div>
    </>
  );
}

export default App;