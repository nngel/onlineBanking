import { useState } from "react";

function ListGroup() {
  let item = [
    "Manila",
    "Rizal",
    "Angono",
    "La Union",
    "Baguio",
    "Binangonan",
    "Taguig",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //item = [];

  return (
    <>
      <h1>List</h1>

      {item.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log("clicked " + item + " " + index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
