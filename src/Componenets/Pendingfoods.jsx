import Datapending from "./Datapending";


const Pendingfoods = ({cook,foodsdilet}) => {
    return (
        <div className="border-b my-6">
            <div className="flex justify-between items-center">
                <h1>Title</h1>
                <h1>Time</h1>
                <h1>calories</h1>
                <h1>Pending Button</h1>
            </div>
            {
             cook?.map((cookloop,index) => <Datapending index ={index} foodsdilet ={foodsdilet}   azmir ={cookloop}></Datapending>)
            }
        </div>
    );
};

export default Pendingfoods;