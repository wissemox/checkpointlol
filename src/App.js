import logo from './logo.svg';
import './App.css';
import IMGSRC from './index.jpg'



function App() {
  return ( 
    
   /* <div className="App">
      
      <img src="./MORG/554.png"></img>
    <Hello /> 
    </div> */ 
    <>
    <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
      <h1 className="titlered">wissem</h1>  <br/>
      <img src={IMGSRC} />  <br/> 
      <img src="PUBlic.jpg"></img>
    </div>
    <video width="320" height="240" controls>
    <source src="videpalu.mp4" type="video/mp4" />
    </video>
    </>
    
  );
}

export default App;

