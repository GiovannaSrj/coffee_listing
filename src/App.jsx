import { useState } from "react";
import "./styles/var.css";
import "./styles/App.css";
import ListCards from "./components/ListCards";

function App() {
  const [count, setCount] = useState(true);

  return (
    <>
      <header>
        <img
          className="bg_img"
          src="src/assets/bg-cafe.jpg"
          alt="Coffee Shop"
        />
      </header>

      <main>
        <div className="container">
          <div className="container_texts">
            <h1>Our Collection</h1>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <nav>
            <span className="container_button">
              <button type="button" onClick={() => setCount(true)} checked>
                All Products
              </button>
            </span>
            <span className="container_button">
              <button type="button" onClick={() => setCount(false)}>
                Available Now
              </button>
            </span>
          </nav>
          <ListCards teste={count} />
        </div>
      </main>
    </>
  );
}

export default App;
