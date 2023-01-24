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
      <p>{List.map((el)=>(
        el.Date
      ))}</p>

      <p>{List.map((el)=>(
        el.Name
      ))}</p>

      <p>{List.map((el)=>(
        el.Price
      ))}</p>
    </div>
  );
}

export default App;
