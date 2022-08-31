const truncateString = (string, limit) => {
  return `${string.slice(0, limit)} ...`;
};
export default truncateString;
