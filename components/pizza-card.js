import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cart.slice';

export default function PizzaCard({ pizza }) {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(add());
  //   });

  return (
    <div>
      {pizza.attributes.name}
      <ul>
        {pizza.attributes.toppings.data.map((toppings) => {
          return <li key={toppings.id}>{toppings.attributes.name}</li>;
        })}
      </ul>
      <button onClick={() => dispatch(add(pizza))}>ADD TO CART</button>
    </div>
  );
}
