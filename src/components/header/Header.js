import React from 'react';
import Form from './form';
import {HeaderContainer,MainHeader} from "./HeaderStyle";


const Header = ({ setQuery, query, getData, mealTypes, meal, setMeal }) => {
    return (
       <HeaderContainer>
           <MainHeader>
               Food App
           </MainHeader>
           <Form
             setQuery={setQuery}
             query={query}
             getData={getData}
             mealTypes={mealTypes}
             setMeal={setMeal}
             meal={meal}/>


       </HeaderContainer>
    )
}

export default Header