import logo from './logo.svg';
import './App.css';

function App() {

  const List = [
  {
    Date: "August 2020 14",
    Name: "Toilet Paper",
    Price: "$94,12",
  },

  {
    Date: "March 2021 12",
    Name: "New TV",
    Price: "$799,49",
  },

  {
    Date: "March 2021 28",
    Name: "Car Insurance",
    Price: "$294.67",
  },

  {
    Date: "June 2021 12",
    Name: "New Desk (Wooden)",
    Price: "$450",
  },
  ]


  return (
    <div className="App-header">
      <div className="tab">
        <div  id="l1">
          <p>{List.map((el)=>(
            <li key={el.Date}>{el.Date}</li>
          ))}</p>
        </div>

        <div id="l2">
          <p>{List.map((el)=>(
            <li key={el.Name}>{el.Name}</li>
          ))}</p>
        </div>

        <div id="l3">
          <p>{List.map((el)=>(
            <li key={el.Price}>{el.Price}</li>
          ))}</p>
        </div>
      </div>
      

    </div>
  );
}

export default App;
