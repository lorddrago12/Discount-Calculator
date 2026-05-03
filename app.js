// Main Functon

function apply_disccount(price, discount) {
  if (!price.isInteger() || !discount.isInteger()) {
    return "The price should be a number";
  } else if (discount < 0 || discount > 100) {
    return "The discount should be between 0 and 100";
  } else {
    return price - (price * discount) / 100;
  }

  final_price = apply_disccount(100, 20);
  return final_price;
}

// Tests
console.log(apply_disccount(100, 20));
console.log(apply_disccount(100, -5));
console.log(apply_disccount(100, 150));
console.log(apply_disccount("100", 20));
console.log(apply_disccount(100, "20"));
