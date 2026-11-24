import { Link, useNavigate } from "react-router";

const Meal = ({meal}) => {
    const navigate = useNavigate();
    const {idMeal, dateModified, strMealThumb, strMeal }= meal;
    const mealStyle = {
        border: '2px solid red',
        borderRadius: '20px'
        }
        const handleNavigate =()=>{
            navigate(`/meal/${idMeal}`);
        }
    return (
        <div style={mealStyle}>
            <h4>Id: {idMeal}</h4>
            <h3>{strMeal}</h3>
            <img src={strMealThumb} alt="" width={300}/>
            <p>{dateModified}</p>
            <Link to={`/meal/${idMeal}`}>Show More:</Link>
            <button onClick={handleNavigate}>click on</button>            
        </div>
    );
};

export default Meal;