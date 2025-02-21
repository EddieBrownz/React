import "../assests/general.css";
import "../assests/Header.css";
import "../assests/products.css";

function RecipeDetails({ recipe }) {
    return (
        <div className="fact-body">
        <div className="container-fact" >
            <div className="article">
                <h1 style={{ color: "rgba(69, 123, 157, 1)" }}>RECIPE</h1>
                <p>{recipe.intro}</p>
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>Steps:</h3>
                <ul>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>
                            <strong>{step.title}:</strong>
                            <p>{step.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    );
}

export default RecipeDetails;
