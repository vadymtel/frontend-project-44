const getProgressionWithHiddenItem = (
  beginNumber,
  step,
  progressionLength,
  indexOfHiddenItem,
) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const itemToAdd = i === indexOfHiddenItem ? ' ..' : ` ${beginNumber + step * i}`;
    progression += itemToAdd;
  }
  return progression.trim();
};

export default getProgressionWithHiddenItem;
