import Foods from "./Foods";
import Pendingfoods from "./Pendingfoods";
import Coking from "./Coking";


const Alldata = ({cookbutton,cook,foodsdilet,}) => {
    return (
        <div className="grid grid-cols-3 mx-16 my-5">
            <div className="col-span-2">
                <Foods cookbutton ={cookbutton}></Foods>

            </div>

            <div>
                <h1>All Select  Product {cook?.length}</h1>
                <Pendingfoods cook ={cook} foodsdilet ={foodsdilet}></Pendingfoods>
                <Coking ></Coking>
                
            </div> 
        </div>
    );
};

export default Alldata;
