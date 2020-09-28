// MobilePrice is an enum that stores the price values of different variants of a mobile
enum MobilePrice{Black=25000,Gold=28000,White=30000};

// function to calculate the price after applying the discount
function calculateAmount(price:number):number{
    let discount: number;
    let totalAmount: number;
if(price==MobilePrice.Gold)
      discount=5;
else if(price==MobilePrice.White)
  discount=8;
else
    discount = 10;
totalAmount =price-price * discount / 100;
return totalAmount;
}

// displays the price of black variant of mobile without discount
console.log("Actual price of the Mobile is " + MobilePrice.Black);

// displays the price of black variant of mobile with discount
console.log("The final price after discount is "+calculateAmount(MobilePrice.Black));
