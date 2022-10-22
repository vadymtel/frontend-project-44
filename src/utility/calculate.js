const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': {
      return num1 + num2;
    }
    case '-': {
      return num1 - num2;
    }
    case '*': {
      return num1 * num2;
    }
    default: {
      return 'Error of choose operator';
    }
  }
};

export default calculate;
