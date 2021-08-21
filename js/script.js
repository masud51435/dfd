////////////////////////   memory secton    //////////////////////////////
function memoryCost(isIncreasing) {
  const extraMemoryCost = document.getElementById('memory-cost');
  if (isIncreasing == true) {
    extraMemoryCost.innerText = 180;
  }
  else {
    extraMemoryCost.innerText = 0;
  }
  allPrice()
}

////////////////////////    storage section  //////////////////////////
function storageCost(storageValue) {
  const extraStorageCost = document.getElementById('storage-cost');
  extraStorageCost.innerText = storageValue;
  allPrice()
}


//////////////////////     delivery section   ///////////////////////////
function deliveryCost(isIncreasingValue) {
  const extraDeliveryCost = document.getElementById('shipment-cost');
  if (isIncreasingValue == true) {
    extraDeliveryCost.innerText = 20;
  }
  else {
    extraDeliveryCost.innerText = 0;
  }
  allPrice()
}

////////////////////////////  all price   ////////////////////////////////////
function allPrice() {
  const bestPrice = document.getElementById('best-price');
  const setPrice = bestPrice.innerText;
  const extraMemory = document.getElementById('memory-cost');
  const memoryCosts = extraMemory.innerText;
  const extraStorage = document.getElementById('storage-cost');
  const storageCosts = extraStorage.innerText;
  const extraDelivery = document.getElementById('shipment-cost');
  const deliveryCharge = extraDelivery.innerText;
  const allCost = parseInt(setPrice) + parseInt(memoryCosts) + parseInt(storageCosts) + parseInt(deliveryCharge);
  const totalPrice = document.getElementById('total-price');
  totalPrice.innerText = allCost;
  const totals = document.getElementById('total');
  totals.innerText = totalPrice.innerText;
}


///////////////////////////  cupon area  //////////////////////////////////////
function cuponArea(){
  const inputField = document.getElementById('input-field');
  const input = inputField.value;
  if(input == 'stevekaku'){
    const totals = document.getElementById('total');
    const allTotal = totals.innerText - ((totals.innerText * 20) / 100);
    totals.innerText = allTotal;
    document.getElementById('cupon-btn').setAttribute('disabled', true);
  }
  inputField.value = ''; 
}



////////////////////////////  memory call section  ///////////////////////////////
document.getElementById('16gb-memory').addEventListener('click', function () {
  memoryCost(true);
});
document.getElementById('8gb-memory').addEventListener('click', function () {
  memoryCost(false);
});

// ////////////////////////  storage call section  //////////////////////////////
document.getElementById('256gb-ssd').addEventListener('click', function () {
  storageCost(0);
});
document.getElementById('512gb-ssd').addEventListener('click', function () {
  storageCost(100);
});
document.getElementById('1tb-ssd').addEventListener('click', function () {
  storageCost(180);
});

//////////////////////////   delivery call section  ///////////////////////////////
document.getElementById('free-delivery').addEventListener('click', function () {
  deliveryCost(false);
});
document.getElementById('Delivery-charge').addEventListener('click', function () {
  deliveryCost(true);
});

