$(document).ready(function() {
  const returnValues = [
    "Hakuna",
    "Matata",
    "It means",
    "No worries",
    "For the rest of your days"
  ].sort(() => (Math.random() > 0.5 ? 1 : -1));

  const createService = (retVal, index) => () =>
    new Promise(resolve =>
      setTimeout(() => {
        console.log(`${index}. ${retVal}`);
        resolve(retVal);
      }, Math.random() * 10000)
    );

  const services = returnValues.map(createService);

  // created race function to loop through services and modify DOM elements
  const race = array => {
    let counter = 1;
    // forEach to loop through array of services (takes current function and index parameters)
    array.forEach((func, i) => {
      // calls function at index within services array and supplies parameters retVal and index
      func(returnValues[i], i).then(result => {
        // after promise resolves modify text
        $("#service" + i).text(returnValues[i]);
        $("#service" + i + "Status").text("DONE");
        $("#service" + i + "Place").text(counter + ". ");
        counter++;
      });
    });
  };
  //starts race
  race(services);
});
