const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let countDividers = 0;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      countDividers += 1;
    }
  }
  return countDividers === 0;
};

export default isPrime;
