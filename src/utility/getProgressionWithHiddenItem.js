const getProgressionWithHiddenItem = (
  beginNumber,
  step,
  lengthOfProgression,
  numberOfHiddenItem,
) => {
  let progression = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === numberOfHiddenItem) {
      progression += ' ..';
      i += 1;
    } progression += ` ${beginNumber + step * i}`;
  }
  return progression.trim();
};

export default getProgressionWithHiddenItem;
