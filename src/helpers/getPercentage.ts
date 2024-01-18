
export const getPercentage = (smaller: number, larger: number) => {
    const difference = larger - smaller;
    const remainder = (difference / larger) * 100;
    return 100 - remainder;
  }