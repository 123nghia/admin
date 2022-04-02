const calRangeTwoDay = (from, to) => {
  var fromDate = new Date(from);
  var toDate = new Date(to);

  // To calculate the time difference of two dates
  var differenceInTime = toDate.getTime() - fromDate.getTime();

  // To calculate the no. of days between two dates
  return differenceInTime / (1000 * 3600 * 24);
};
export default calRangeTwoDay;
