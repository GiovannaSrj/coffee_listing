import Star from "../assets/Star.svg";
import StarFill from "../assets/Star_fill.svg";
import "../styles/CoffeeCard.css";

export default function CoffeeCard({ coffee }) {
  function Popular() {
    if (coffee.popular == true) {
      return (
        <>
          <span className="pop">Popular</span>
        </>
      );
    }
  }

  function SoldOut(){
    if(coffee.stocked == false){
      return(
        <>
        <span className="SoldOut">Sold out</span>
        </>
      )
    }
  }

  function Ratings() {
    let stars;
    let totalVotes;

    if (!coffee.total_votes) {
      stars = <img className="stars" src={Star} alt="Empty Star" />;
      totalVotes = "No ratings";
    } else {
      stars = <img className="stars" src={StarFill} alt="Filled Star" />;
      totalVotes = `(${coffee.total_votes} votes)`;
    }
    return (
      <>

      <div className="review_container">
      {stars}
        <span className="note">{coffee.note}</span>
        <span className="votes">{totalVotes}</span>
      </div>
        <SoldOut/>
      </>
    );
  }

  return (
    <div className="cards_container">
      <picture>
        <Popular />
        <img src={coffee.urlImg} alt="Coffee Image" />
      </picture>

      <div className="coffee_name">
        <span className="name_coffee">{coffee.name}</span>
        <span className="value">R$ {coffee.value}</span>
      </div>
      <div className="review">
      <Ratings />

      </div>
    </div>
  );
}
