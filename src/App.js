import './App.css';
import Image from "./assets/11755.jpg";
function App() {
  const x=10;
  var text;
  if(x===10)
  {
    text="equal";
  }
  else{
    text="not equal";
  }
  return (
  <div className="App">
    <h1>Hello world</h1>
    <p>this is paragraph</p>
    <h3>{5+50}</h3>
    <img src={Image}alt="pic"/>
    <h2>{text}</h2>

    <h2>{x>=10?"greater":"lesser"}</h2>
    </div>
  );
     }

export default App;
