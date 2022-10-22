const getProgressionWithHiddenItem = (
  beginNumber,
  step,
  lengthOfProgression,
  numberOfHiddenItem,
) => {
  let progression = '';
  for (let i = 1; i < lengthOfProgression; i += 1) {
    progression += ` ${beginNumber + step * i}`;
    if (i === numberOfHiddenItem - 1) {
      progression += ' ..';
      i += 1;
    }
  }
  return progression.trim();
};

export default getProgressionWithHiddenItem;
