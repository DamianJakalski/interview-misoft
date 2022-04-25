export const getNeighbors = (
  pages: number,
  page: number,
  arr: number[],
  setNeighbors: (value: number[]) => void
) => {
  let currentNeighborsPages: number[] = [...arr];
  if (pages <= 6) {
    const lessArr = Array.from(Array(pages), (_, i) => i + 1);
    currentNeighborsPages = lessArr;
  } else if (pages > 6 && page >= 0 && page <= 2) {
    currentNeighborsPages = [
      1,
      2,
      3,
      -1,
      arr.length - 2,
      arr.length - 1,
      arr.length,
    ];
  } else if (pages > 6 && page >= 3 && page < arr.length - 5) {
    const leftSliced = arr.slice(page - 2, page);
    const rightSliced = arr.slice(page, page + 1);
    currentNeighborsPages = [
      ...leftSliced,
      ...rightSliced,
      -1,
      arr.length - 2,
      arr.length - 1,
      arr.length,
    ];
  } else if (pages > 6 && page >= arr.length - 5) {
    const sliced = arr.slice(arr.length - 7);
    currentNeighborsPages = [...sliced];
  }
  setNeighbors(currentNeighborsPages);
};
