const getProgressionWithHiddenItem = (
  beginNumber,
  step,
  lengthOfProgression,
  numberOfHiddenItem,
) => {
  let progression = String(beginNumber);
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    progression += ` ${beginNumber + step * i}`;
    if (i === numberOfHiddenItem) {
      progression += ' ..';
      i += 1;
    }
  }
  return progression;
};

export default getProgressionWithHiddenItem;
