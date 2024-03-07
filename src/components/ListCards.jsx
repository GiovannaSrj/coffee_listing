import { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import '../styles/ListCards.css'



export default function ListCards({ teste }) {
  const [coffees, setCoffees] = useState([]);

  fetch("http://localhost:3000/coffees", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setCoffees(data);
    })
    .catch((err) => console.log("erro ao conectar"(err)));

  if (!teste) {
    return (
      <ul>
        {coffees.map(
          (coffee) =>
            coffee.stocked && (
              <li key={coffee.id}>
                <CoffeeCard coffee={coffee} />
              </li>
            )
        )}
      </ul>
    );
  } else if (teste) {
    return (
      <ul>
        {coffees.map((coffee) => (
          <li key={coffee.id}>
            <CoffeeCard coffee={coffee} />
          </li>
        ))}
      </ul>
    );
  }
}

//NAO SE ESQUECER: COMPORENTES JS PRECISAM ESTAR ENTRE {}
