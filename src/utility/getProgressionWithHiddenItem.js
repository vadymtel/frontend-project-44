const getProgressionWithHiddenItem = (
  beginNumber,
  step,
  lengthOfProgression,
  IndexOfHiddenItem,
) => {
  let progression = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === IndexOfHiddenItem) {
      progression += ' ..';
      i += 1;
    } progression += ` ${beginNumber + step * i}`;
  }
  return progression.trim();
};

export default getProgressionWithHiddenItem;
