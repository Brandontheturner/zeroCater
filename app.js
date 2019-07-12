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

  const race = array => {
    let counter = 1;
    array.forEach((func, i) => {
      func(returnValues[i], i).then(result => {
        $("#service" + i).text(returnValues[i]);
        $("#service" + i + "Status").text("DONE");
        $("#service" + i + "Place").text(counter + ". ");
        counter++;
      });
    });
  };

  race(services);
});
