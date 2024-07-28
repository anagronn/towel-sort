module.exports = function towelSort(matrix) {
  if (matrix && matrix.length !== 0) {
    matrix.forEach((elem, i) => {
      if ((Array.isArray(elem)) && (i + 1) % 2 === 0) {
        elem.reverse();
      }
    })
    return matrix.flat();
  }
  return [];
}