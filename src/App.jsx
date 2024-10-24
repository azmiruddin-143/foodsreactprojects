import { useState } from "react"
import Alldata from "./Componenets/Alldata"

function App() {


  const [cook, setcook] = useState([])
  // const [diletitem, setdiletitem] = useState([])

  const cookbutton = (foodtransfer) => {
    let validitem = cook.find(valid => valid.id == foodtransfer.id)
    if (validitem) {
      alert("dfgvdf")
    }

    else {
      const finalcook = [...cook, foodtransfer]
      setcook(finalcook)
    }
  }

  const foodsdilet = (id) => {
    const updata = cook.filter(d => d.id !== id.id)
    setcook(updata)

  
  }

 



  return (
    <>
      <Alldata cookbutton={cookbutton} cook={cook} foodsdilet={foodsdilet} ></Alldata>
    </>
  )
}

export default App
