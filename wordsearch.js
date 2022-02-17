const transpose = function (matrix) {
  return matrix[0].map((a, i) => matrix.map((b) => b[i]));
};

const backwardMatrix = function (matrix) {
  return matrix.map((arr) => arr.reverse());
};

const horizontalJoin = function (letters, word) {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizon = horizontalJoin(letters, word);
  const vertialMatrix = transpose(letters);
  const vertical = horizontalJoin(vertialMatrix, word);
  const bwMatrix = backwardMatrix(letters);

  const backward = horizontalJoin(bwMatrix, word);
  if (vertical || horizon || backward) {
    return true;
  }
  return false;
};

module.exports = wordSearch;
