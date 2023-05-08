import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import './recipeCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, fahear, faHeartCircleBolt, faHandHoldingHeart, faHeadSideCough } from "@fortawesome/free-solid-svg-icons";

const RecipeCardComponent = ({ foodDetails, clicked }) => {

    const detailDataClick = () => {
        clicked();
    }
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const makeFavorite = () => {
       
        //setFavoriteRecipes(recipes.at(index));
        //document.getElementById("heartId").className = "faFavHeart";
        //console.log("Is Favorite", document.getElementById("heartId").className);
document.getElementById("heartId").style.display = "none";
document.getElementById("heartFav").style.display = "faFavHeart";
    }

    return <div>
        <FontAwesomeIcon id="heartId" className="faHeart" icon={faHeart} title="Favorite Recipes" onClick={() => makeFavorite()}>
        </FontAwesomeIcon>
        <FontAwesomeIcon style={{display:"none"}} id="heartFav" className="faFavHeart" icon={faHeart} title="Favorite Recipes" onClick={() => makeFavorite()}>
        </FontAwesomeIcon >
        <Card
            style={{
                width: '18rem'
            }}
        >
            <img className="imageStyle"
                alt="Card"
                src={foodDetails.image}//"https://swabirestaurants.com/images/food-4-original-1200x800.jpg"
                width="250px"
                height="300px"
                onClick={detailDataClick}
            />
            <CardBody>
                <CardTitle tag="h3">
                    <div className="divRecipe">
                        {foodDetails.recipe}
                    </div>
                </CardTitle>
                <CardText>
                    <div>
                        <label>Category: </label>
                        <img
                            title={foodDetails.category.category}
                            alt="Sample"
                            src={foodDetails.category.thumbnail}
                            width="55px"
                            height="55px"
                            style={{ margin: '-10px -10px -20px -10px' }}

                        />
                        <span>Diffculty : </span>
                        <button className="servingButton" height="175" width="175">
                            {foodDetails.difficulty}
                        </button>
                    </div>
                    <div>
                        <span>  Cooking Time: </span>
                        <button className="minutesButton" height="175" width="175" title="Cooking Time..." >
                            {foodDetails.prep_time_in_minutes}
                        </button>
                        <span>     Serving: </span>
                        <button className="servingButton" height="175" width="175" title="Serving..." >
                            {foodDetails.serving}
                        </button>


                        <ul className="ul.nutr-left">
                            <li style={{ color: 'Orange' }}>Calories: {foodDetails.calories}</li>
                            <li style={{ color: 'purple' }}>Fat: {foodDetails.fat_in_grams}</li>
                            <li style={{ color: 'green' }}>Carbohydrates: {foodDetails.carbohydrates_in_grams}</li>
                            <li style={{ color: 'brown' }}>Protein: {foodDetails.protein_in_grams}</li>
                        </ul>
                    </div>
                </CardText>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h5"
                >
                </CardSubtitle>
            </CardBody>

            <CardBody>
                <CardText>

                </CardText>
            </CardBody>
        </Card>
    </div>
}

export default RecipeCardComponent;