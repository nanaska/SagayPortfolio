import React from "react";
import { Categories, SortPopup } from "../components/index.js";
import "../scss/app.scss";
import "../scss/_variables.scss";
import Header from "../components/Header1";
import PizzaBlock from "../components/PizzaBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
const arr = ["Роллы-Суши", "Пицца", "Салаты", "Коктейли", "Соки"];
const sortItems = [
  { name: "Популярности", type: "popular" },
  { name: "Цене", type: "price" },
  { name: "Алфавиту", type: "alphabet" },
];
function Dome() {
  

  
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if(!items.length){dispatch(fetchPizzas())}
  }, []);
  const items = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <>
      <div classname="wrapper2">
        <div className="wrapper">
          <Header />
          <div className="container1">
            <div className="content__top">
              <Categories onClick={onSelectCategory} items={arr} />
              <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все</h2>
            <div className="content__items">
              {items &&
                items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dome;
