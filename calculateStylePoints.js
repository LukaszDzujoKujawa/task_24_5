const calcStylePoints = styleNotes => {
  const maxIndex = styleNotes.indexOf(Math.max(...styleNotes));
  styleNotes.splice(maxIndex, 1);

  const minIndex = styleNotes.indexOf(Math.min(...styleNotes));
  styleNotes.splice(minIndex, 1);

  const pointsSum = styleNotes.reduce((acc, current) => acc + current);
  return pointsSum;
}

module.exports = calcStylePoints;