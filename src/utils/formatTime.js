const formatTime = (date) => {
  const extractTime = date.split("T");

  return extractTime[1].split(".")[0];
};
export default formatTime;
