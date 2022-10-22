const isGreatestCommonDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const minNum = Math.min(num1, num2);
  let greatestCommonDivisor = 0;
  for (let i = minNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      greatestCommonDivisor = i;
      break;
    }
  }
  return greatestCommonDivisor;
};

export default isGreatestCommonDivisor;
