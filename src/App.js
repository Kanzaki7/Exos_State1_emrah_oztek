import './App.css';
import Profile from './components/Profile/Profile';
import Card from './components/Card/Card';
import data from './data.json';
import { useState } from 'react';

function App() {

  const [time, setTime] = useState("Daily");
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");
  const [active3, setActive3] = useState("");

let changeTime = (e) => {
    if (e.target.innerText === "Daily") {
        setTime("Daily");
        setActive1("active");
        setActive2("");
        setActive3("");
    } else if (e.target.innerText === "Weekly") {
        setTime("Weekly");
        setActive1("");
        setActive2("active");
        setActive3("");
    } else if (e.target.innerText === "Monthly") {
        setTime("Monthly");
        setActive1("");
        setActive2("");
        setActive3("active");
    }
}

  return (
    <div className="App">
      <Profile function={changeTime} active1={active1} active2={active2} active3={active3}/>
      <div className='cards'>
      {time === "Daily" && 
        data.map(
        (element, index)=> 
        ( <Card title={element.title} current={element.timeframes.daily.current} previous={element.timeframes.daily.previous} time="Yesterday" card={index === 0 ? "card1" :index === 1 ? "card2" : index === 2 ? "card3" : index === 3 ? "card4" : index === 4 ? "card5" : index === 5 && "card6" } />)
        )
      }
      {time === "Weekly" && 
        data.map(
        (element, index)=> 
        ( <Card key={index} title={element.title} current={element.timeframes.weekly.current} previous={element.timeframes.weekly.previous} time="Last Week" card={index === 0 ? "card1" : index === 1 ? "card2" : index === 2 ? "card3" : index === 3 ? "card4" : index === 4 ? "card5" : index === 5 ? "card6" : null}/>)
        )
      }
      {time === "Monthly" && 
        data.map(
        (element, index)=> 
        ( <Card key={index} title={element.title} current={element.timeframes.monthly.current} previous={element.timeframes.monthly.previous} time="Last Month" card={index === 0 ? "card1" : index === 1 ? "card2" : index === 2 ? "card3" : index === 3 ? "card4" : index === 4 ? "card5" : index === 5 ? "card6" : null}/>)
        )
      }

      </div>
    </div>
  );
}

export default App;
