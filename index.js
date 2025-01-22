//Prompt user to place order separated by commas.
const onlineOrder = prompt(`Please enter your order separated by commas.`);

//Create an array from the order
const onlineOrderString = onlineOrder.split(`,`);
const flavorNames = []

for(let i = 0; i < onlineOrderString.length; i++) {
  if(onlineOrderString[i] !== flavorNames) {
    flavorNames.push(onlineOrderString[i]);
  }
}

console.log(flavorNames);