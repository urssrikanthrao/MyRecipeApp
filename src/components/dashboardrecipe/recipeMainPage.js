import React, { useEffect } from "react";
import Recipes from "../hoc/RecipeHoc";
import './recipeMainpage.css'


const RecipeMainPage = () => {
    
    const recipes = Recipes();
   
    return <div >
        {recipes}
    </div>
}

export default RecipeMainPage;