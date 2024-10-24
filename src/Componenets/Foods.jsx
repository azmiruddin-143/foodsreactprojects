import { useEffect } from "react";
import { useState } from "react";
import Food from "./Food"

const Foods = ({cookbutton}) => {
     const [food, setfood] = useState([])

     useEffect(()=>{
           fetch("Foods.json")
           .then(res => res.json())
           .then(fooddata => setfood(fooddata))
     },[])

    return (
        <div>
            {
                food.map(foodloop => <Food cookbutton ={cookbutton} foodtransfer = {foodloop} ></Food> )
            }
        </div>
    );
};

export default Foods;