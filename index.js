const newOrder = () => {
  const onlineOrder = prompt(`Please enter your froyo order separated by commas.`);
  const orderArray = onlineOrder.split(`,`);
  const orderObject = {};
   for(let i = 0; i < orderArray.length; i++) {
    const flavors = orderArray[i];
    if (orderObject[flavors]) {
      orderObject[flavors]++;
    } else { 
      orderObject[flavors] = 1;
    }
  }
  console.log(orderObject);
}

newOrder();