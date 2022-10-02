// import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import ReactDOM from "react-dom/client";

function App() {
  FavoriteColor();

   return sum();

}

// function favColor()
// {
//    const[color,setColor] = userState("red");
//    return <h1>My favourite color is {color}</h1>;
// }

const sum = () => {

  // let a = 1;
  // let b = 2;
  return (
    <>
      <button>-</button>

      <div className='Name'>
        <h1>Hi I am learning</h1>
      </div>
      <button>+</button>

    </>

  );
}
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}


// const myEle=document.getElementById('root')
// myEle.style.color =  "red";
// const root = ReactDOM.createRoot(myEle);
// root.render(<FavoriteColor />);
export default App;