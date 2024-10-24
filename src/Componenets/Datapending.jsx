
const Datapending = ({azmir,index,foodsdilet}) => {
    return (
        <div>
            <h1>{index+1}</h1>
        <div className="flex justify-between my-4">
             
             <h1>{azmir.title}</h1>
              <h1>{azmir.time}</h1>
              <h1>{azmir.calories}</h1>
              <button onClick={()=>foodsdilet(azmir)} className="bg-[#00e1ff] py-1 px-3 my-2">Preparning</button>
        </div>
        </div>
    );
};

export default Datapending;