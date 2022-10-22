const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const smallerNumber = Math.min(num1, num2);
  for (let i = smallerNumber; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

export default getGreatestCommonDivisor;
