import React from "react";
import RecipeCardComponent from "./recipeCard_component";

const RecipeCardContainer = ({foodDetails, clicked}) =>{
    return <RecipeCardComponent foodDetails={foodDetails} clicked={clicked}/>
}

export default RecipeCardContainer;