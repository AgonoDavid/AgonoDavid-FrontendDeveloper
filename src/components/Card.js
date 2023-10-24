import focaccia from "../images/focaccia.jpg";
import margherita from "../images/margherita.jpg";
import spinaci from "../images/spinaci.jpg";
import funghi from "../images/funghi.jpg";
import salamino from "../images/salamino.jpg";
import prosciutto from "../images/prosciutto.jpg";

import Pizza from "./Pizza";

const pizzaData = [
  new Pizza(
    "Focaccia",
    "Bread with italian olive oil and rosemary",
    6,
    focaccia,
    false
  ),
  new Pizza("Pizza Margherita", "Tomato and mozzarella", 10, margherita, true),
  new Pizza(
    "Pizza Spinaci",
    "Tomato, mozzarella, spinach, and ricotta cheese",
    12,
    spinaci,
    false
  ),
  new Pizza(
    "Pizza Funghi",
    "Tomato, mozzarella, mushrooms, and onion",
    12,
    funghi,
    false
  ),
  new Pizza(
    "Pizza Salamino",
    "Tomato, mozzarella, and pepperoni",
    15,
    salamino,
    true
  ),
  new Pizza(
    "Pizza Prosciutto",
    "Tomato, mozzarella, ham, arugula, and burrata cheese",
    18,
    prosciutto,
    false
  ),
];

// Card.js

function Card() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
      {pizzaData.map((output) => (
        <DisplayCard data={output} key={output.id} />
      ))}
    </div>
  );
}

// DisplayCard.js

function DisplayCard({ data }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4 p-4 mx-auto mt-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={data.photoName}
          alt={data.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <p className="text-xl font-semibold mb-2">{data.name}</p>
          <p className="text-gray-600 text-lg">${data.price}</p>
          <p className="text-sm mt-2 text-gray-700">{data.ingredients}</p>
        </div>
        {data.soldOut ? (
          <div className="bg-red-500 text-white text-center py-2">Sold Out</div>
        ) : (
          <div className="bg-green-500 text-white text-center py-2">
            In Stock
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
