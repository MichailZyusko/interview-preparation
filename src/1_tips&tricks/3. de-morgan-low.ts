export const deMorganLow = () => {
  const firstBool = true;
  const secondBool = false;

  // BEFORE
  const firstCondition = !firstBool || !secondBool;


  // AFTER 
  const secondCondition = !(firstBool && secondBool);

  console.log(firstCondition === secondCondition)
};