export const plusOne = () => {
  return {
      type: "plusOne"
   }
}

export const minusOne = () => {
   return{
      type: "minusOne"
   }
}

export const reset = () => {
   return {
      type: "reset"
   }
}

export const addSelectedNumber = (selectedNumber) => {
   return {
      type: "addSelectedNumber",
      number: selectedNumber
   }
}