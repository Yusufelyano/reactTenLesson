import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusOne, reset, addSelectedNumber } from "./actions";

function Counter() {
   const counter = useSelector((state) => state)

   const dispatch = useDispatch()

   const handlePlusOne = () => {
      dispatch(plusOne())
   }

   const handleMinusOne = () => {
      dispatch(minusOne())
   }

   const handleReset = () => {
      dispatch(reset())
   }

   const plusSelectedNumber = () => {
      dispatch(addSelectedNumber(selectedNumber))
   }

   const [selectedNumber, setSelectedNumber] = useState("")
   const numbers = (e) => {
      setSelectedNumber(e.target.value)
   }

   return (
      <div>
         <div>
            <input
             type="text"
             value={selectedNumber}
             onChange={numbers}
              />
         </div>
         {counter}
         <div>
            <button onClick={handlePlusOne}>
               +1
            </button>
         </div>
         <div>
            <button onClick={handleMinusOne}>
               -1
            </button>
         </div>
         <div>
            <button onClick={handleReset}>
               Reset to 0
            </button>
         </div>
         <div>
            <button onClick={plusSelectedNumber}>
               addSelectedNumber
            </button>
         </div>
      </div>
   );
}

export default Counter;
