import React, { useEffect, useState } from "react";
import RecipeCard from '../recipeCard/recipe_index'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../searchBar/searchBar'
const Recipes = () => {

    const url = 'https://keto-diet.p.rapidapi.com/?protein_in_grams__lt=15&protein_in_grams__gt=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8da1e382fbmsha5d3cf273d8c29ep1fd46ejsnae24dc5ff66e',
            'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
        }
    };
    const [currentRecipe, setCurrentRecipe] = useState();
    const [recipes, setRecipes] = useState([]);
    const [isOpenDir, setIsOpenDir] = useState(true);
    const [isOpenIng, setIsOpenIng] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [favoriteRecipe, setFavoriteRecipe] = useState([]);
    //const [filterRecipes,setFilterRecipes] =useState([]);
    useEffect(() => {
        fetch('./foodRecipeResponse.json')
        fetch(url, options)
            .then((resp) => resp.json())
            .then((response) => {
                setRecipes(response);
                console.log(response);
            })
    }, [])
    const textChanged = (searchText) => {
        setSearchText(searchText);
    }

    var filterRecipes = ( searchText !== "" ? recipes.filter(recp => recp.recipe.toLowerCase().includes(searchText.toLowerCase())) : recipes);

    const toggleDirections = (divId) => {
        setIsOpenDir(!isOpenDir);
        console.log(isOpenDir);
        isOpenDir ? document.getElementById(divId).style.display = 'block' : document.getElementById(divId).style.display = 'none';
    }

    const toggleIngrediants = (divId) => {
        setIsOpenIng(!isOpenIng);
        console.log(isOpenIng);
        isOpenIng ? document.getElementById(divId).style.display = 'block' : document.getElementById(divId).style.display = 'none';
    }

    const clickedHandler = (index) => {
        setCurrentRecipe(recipes.at(index));
    }
  

  
    const showFavorites = () => {
       // console.log("isFavoriteRecipe: ", favoriteRecipes)
        //filterRecipes = ( favoriteRecipes);
    }

    return <div>
        <div style={{ padding: '10px' }} >

            <SearchBar textChanged={textChanged}></SearchBar>
            {/* <button onClick={() => showFavorites()}>
                <FontAwesomeIcon className="faFavHeart" icon={faHeart} height="200px" width="200px" title="Favorite Recipes">
                </FontAwesomeIcon>
            </button> */}
        </div>
        <div className="mainPageList">
            {
                // recipes && recipes.hints && recipes.hints.length && recipes.hints.map((rfood) => {
                //     console.log("Reciepies: ", rfood);
                //     return <div><RecipeCard foodDetails={rfood}></RecipeCard></div>
                //     //console.log("Reciepies: ", rfood);
                // })
                !currentRecipe ?
                    filterRecipes && filterRecipes.length && filterRecipes.map((foodDetails, index) => {

                        return <div>
                            
                            <RecipeCard foodDetails={foodDetails} clicked={() => clickedHandler(index)}></RecipeCard>
                            <div>
                                <button onClick={() => toggleDirections(`directionsDiv${index}`)}>Directions:</button>
                                <div className="divWrap" id={"directionsDiv" + index} style={{ display: 'none' }}>
                                    <span>Directions: </span>
                                    <span style={{ fontStyle: 'italic', wordWrap: "normal", width: 150 }} >
                                        {foodDetails.directions_step_1}{foodDetails.directions_step_2}{foodDetails.directions_step_3}{foodDetails.directions_step_4}{foodDetails.directions_step_5}
                                        {foodDetails.directions_step_6}{foodDetails.directions_step_7}{foodDetails.directions_step_8}{foodDetails.directions_step_9}{foodDetails.directions_step_10}
                                    </span>
                                </div>
                                <button onClick={() => toggleIngrediants(`ingredientsDiv${index}`)}>Ingredients:</button>
                                <div className="divWrap" id={"ingredientsDiv" + index} style={{ display: 'none' }}>
                                    <h4>Ingredients: </h4>
                                    <p style={{ fontStyle: 'italic', flexWrap: "wrap" }}>
                                        <ul>
                                            <li>{foodDetails.ingredient_1}{foodDetails.ingredient_2}{foodDetails.ingredient_3}{foodDetails.ingredient_4}{foodDetails.ingredient_5}
                                                {foodDetails.ingredient_6}{foodDetails.ingredient_7}{foodDetails.ingredient_8}{foodDetails.ingredient_9}{foodDetails.ingredient_10}</li>
                                        </ul>
                                    </p>
                                </div>

                            </div>
                        </div>

                    })
                    :
                    <div className="divcentered">
                        <div>
                            <FontAwesomeIcon icon={faHouse} height="150px" width="150px" onClick={() => setCurrentRecipe(null)} title="Back to Recipes"></FontAwesomeIcon>
                        </div>
                        <RecipeCard foodDetails={currentRecipe} display="flex"></RecipeCard>
                        <div>
                            <div className="divWrap" id="directionsDiv" >
                                <h4>Directions: </h4>
                                <div className="divWrap"  >
                                    {currentRecipe.directions_step_1}{currentRecipe.directions_step_2}{currentRecipe.directions_step_3}{currentRecipe.directions_step_4}{currentRecipe.directions_step_5}
                                    {currentRecipe.directions_step_6}{currentRecipe.directions_step_7}{currentRecipe.directions_step_8}{currentRecipe.directions_step_9}{currentRecipe.directions_step_10}
                                </div>
                            </div>

                            <div id="ingredientsDiv">
                                <h4>Ingredients: </h4>
                                <p style={{ fontStyle: 'italic', flexWrap: "wrap" }}>
                                    <ul>
                                        <li>{currentRecipe.measurement_1}{currentRecipe.ingredient_1}</li>
                                        <li>{currentRecipe.measurement_2}{currentRecipe.ingredient_2}</li>
                                        <li>{currentRecipe.measurement_3}{currentRecipe.ingredient_3}</li>
                                        <li>{currentRecipe.measurement_4}{currentRecipe.ingredient_4}</li>
                                        <li>{currentRecipe.measurement_5}{currentRecipe.ingredient_5}</li>
                                        <li>{currentRecipe.measurement_6}{currentRecipe.ingredient_6}</li>
                                        <li>{currentRecipe.measurement_7}{currentRecipe.ingredient_7}</li>
                                        <li>{currentRecipe.measurement_8}{currentRecipe.ingredient_8}</li>
                                        <li>{currentRecipe.measurement_9}{currentRecipe.ingredient_9}</li>
                                        <li>{currentRecipe.measurement_10}{currentRecipe.ingredient_10}</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    </div>
}

export default Recipes;