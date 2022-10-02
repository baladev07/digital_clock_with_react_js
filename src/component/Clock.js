
import {useState,useEffect} from 'react'
// const currentTime = new Date();
import ReactDOM from 'react-dom/client';
var time;
function Clock()
{
    const [currentTime,setTime] = useState(new Date());
    function refreshClock()
    {
       setTime(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);
    return <span>{currentTime.toLocaleTimeString()}</span>
    
}

document.getElementById("root").innerText = time;
document.getElementById("root").textContent = time;
const myEle=document.getElementById('root');
myEle.style.color =  "#17D4FE";
myEle.style.background = 'black';
myEle.style.position = 'absolute';
myEle.style.height = '100%';
myEle.style.width = '100%'
myEle.style.fontSize = '60px';
myEle.style.fontStyle = 'Orbitron';
myEle.style.letterSpacing = '7px';
myEle.style.textAlign = 'center';

const root = ReactDOM.createRoot(myEle);
root.render(<Clock />);
console.log(myEle);
export default Clock;