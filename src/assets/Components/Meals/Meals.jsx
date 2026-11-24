import { useLoaderData } from "react-router";
import Meal from "../Meal/Meal";
import './Meals.css'

const Meals = () => {
    const meals = useLoaderData();
    return (
        <div>
            <h3> Miles: {meals.meals.length} </h3>
          <div className="meals">
              {
                meals.meals.map(meal =><Meal key={meal.idMeal} meal={meal}></Meal> )
            }
          </div>
        </div>
    );
};

export default Meals;