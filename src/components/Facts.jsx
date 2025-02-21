import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import VideoPlayer from "./VideoPlayer";
import recipes from "../Data/recipes";

function Facts() {
    const [currentRecipe, setCurrentRecipe] = useState(recipes[0]);

    const getRandomRecipe = () => {
        const random = recipes[Math.floor(Math.random() * recipes.length)];
        setCurrentRecipe(random);
    };

    return (
        <div className="fact-body">
            <RecipeDetails recipe={currentRecipe} />
            <VideoPlayer videoUrl={currentRecipe.video} />
            <button onClick={getRandomRecipe} style={{ marginTop: "20px" }}>
                Get Random Recipe
            </button>
        </div>
    );
}

export default Facts;
