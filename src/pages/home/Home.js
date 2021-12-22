import React, {useState} from 'react';
import axios from 'axios';
import Header from "../../components/header/Header";
import {HomeImg, ImgDiv, MainContainer,} from "./HomeStyle";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp"


const mealTypes=["Breakfast","Lunch","Dinner","Snack","TeaTime"];
const API_ID="9606e4ba";
const API_KEY= "0ce63d5f58a075f04301c091fdf924ad";

const Home = () => {
    const[query,setQuery] = useState("pizza");
    const[recipes,setRecipes]=useState();
    const[meal,setMeal]=useState(mealTypes[0].toLowerCase());
    const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;

    const getData = async () => {
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                alert(`No food with such ${query}`);
            }
            console.log(result.data.hits);
            setRecipes(result.data.hits);
            setQuery("");
        } else {
            console.log("Please fill the form");
        }
    };


    return (
    <div>
            <Header
             setQuery={setQuery}
             query={query}
             getData={getData}
             mealTypes={mealTypes}
             setMeal={setMeal}
             meal={meal}
             />
             {recipes ? (

                 <MainContainer>
                  {recipes.map((recipe, index) => (
                    <RecipeCardComp key={index} recipe={recipe.recipe} />
                  ))}
                 </MainContainer>
              ) : (
                <ImgDiv>
                  <HomeImg src={homeSvg} />
                </ImgDiv>
      )}
    </div>
    )
}

export default Home