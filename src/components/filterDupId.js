export const filterDupId = (arr) => {
  const seen = new Set();
  return arr.filter((item) => {
    const { id } = item;
    if (seen.has(id)) {
      return false;
    }
    seen.add(id);
    return true;
  });
};
