import { useLoaderData, useNavigate } from "react-router";

const ShowMeals = () => {
    const data = useLoaderData();
    const meal = data.meals[0];

    const {idMeal, dateModified, strSource, strInstructions , strMeal, strMealThumb } =meal;
    const detailsStyle = {
        width: '600px',
        margin: '0 auto'
    }
    const navigate = useNavigate();

    const handleGoBack =()=>{
        navigate(-1);
    }
    
    return (
        <div style={detailsStyle}>
            <h2>Details: {idMeal}</h2>
            <p><small>Date:{dateModified}</small></p>
            <h4>Title: {strMeal}</h4>
            <p><small>Recipe Instruction: {strInstructions}</small></p>
            <img src={strMealThumb} alt="" width={300}/>
            <p><small>visit us: {strSource}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ShowMeals;