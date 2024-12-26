import { useState } from "react";


function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  
  //This is a hook that allows you to add state to a functional component
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={index} onClick={() => {setSelectedIndex(index);}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
