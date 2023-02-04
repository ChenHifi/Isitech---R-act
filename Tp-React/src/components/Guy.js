import MyList from './MyList';


function Guy({items}) {
  return(
      <div>
        <ul>
        {items.map((element)=>{
          return <MyList key={element.id} data = {element}/>;
        })}
        </ul>
      </div>
  );
};

export default Guy;