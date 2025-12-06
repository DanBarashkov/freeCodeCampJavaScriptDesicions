/*Given a date in the format "Month day, year", return the date in the format "YYYY-MM-DD".
For example, given "December 6, 2025", return "2025-12-06".*/

function formatDate(dateString) {

  const findYear = dateString.indexOf(",") + 2;
  const sliceYear = dateString.slice(findYear);
  console.log(sliceYear);
  
  const findMonthAndDate = dateString.indexOf(",");
  const sliceMonthAndDate = dateString.slice(0,findMonthAndDate)
  console.log(sliceMonthAndDate);


  const findDate = sliceMonthAndDate.indexOf(" ") + 1;
  const sliceDate = dateString.slice(findDate,findMonthAndDate);
  console.log(sliceDate);

  const sliceDateAdd = sliceDate.length === 1 ? '0' + sliceDate : sliceDate;
  console.log(sliceDateAdd);

  const findMonth = sliceMonthAndDate.indexOf(" ");
  const sliceMonth = dateString.slice(0,findMonth);
  console.log(sliceMonth);

  let replaceMonth = "";

  if (sliceMonth === "December") {
    replaceMonth = "12";
  } else if (sliceMonth === "January") {
    replaceMonth = "01";
  } else if (sliceMonth === "November") {
    replaceMonth = "11";
  } else if (sliceMonth === "September") {
    replaceMonth = "09";
  } else if (sliceMonth === "May") {
    replaceMonth = "05";
  } else if (sliceMonth === "February") {
    replaceMonth = "02";
  } else {
    console.log("There is no such month!")
  }

  return sliceYear + "-" + replaceMonth + "-" + sliceDateAdd;
}