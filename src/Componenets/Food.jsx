

const Food = ({foodtransfer,cookbutton}) => {
    return (
        <div>
            <img className="mb-3" src={foodtransfer.image} alt="" />
            <h1>{foodtransfer.title}</h1>
            <div className="flex gap-2">
                <h1>{foodtransfer.time} time lagbe</h1>
                <h1>{foodtransfer.calories} calories</h1>
            </div>
            <button onClick={()=>cookbutton(foodtransfer)} className="bg-[#1ea327] text-white py-2 px-4 rounded-lg my-3">Want To a Cook</button>
        </div>
    );
};

export default Food;