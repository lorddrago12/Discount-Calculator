# 🏷️ Discount Calculator

A lightweight JavaScript utility that applies a percentage discount to a price, with input validation built in.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Function Reference](#function-reference)
- [Input Validation](#input-validation)
- [Example Output](#example-output)
- [Known Issues & Notes](#known-issues--notes)

---

## Overview

`apply_disccount` is a simple JavaScript function that calculates a discounted price given an original price and a discount percentage. It validates both inputs before performing the calculation and returns a helpful error message if something is wrong.

---

## Features

- ✅ Calculates final price after applying a discount
- ✅ Validates that both `price` and `discount` are integers
- ✅ Ensures discount is within the valid range (0–100)
- ✅ Returns descriptive error messages for invalid input

---

## Usage

```js
// Main Function
function apply_disccount(price, discount) {
  if (!price.isInteger() || !discount.isInteger()) {
    return "The price should be a number";
  } else if (discount < 0 || discount > 100) {
    return "The discount should be between 0 and 100";
  } else {
    return price - (price * discount) / 100;
  }
}

console.log(apply_disccount(100, 20));   // → 80
console.log(apply_disccount(100, -5));   // → "The discount should be between 0 and 100"
console.log(apply_disccount(100, 150));  // → "The discount should be between 0 and 100"
console.log(apply_disccount("100", 20)); // → "The price should be a number"
console.log(apply_disccount(100, "20")); // → "The price should be a number"
```

---

## Function Reference

### `apply_disccount(price, discount)`

| Parameter  | Type    | Description                              |
|------------|---------|------------------------------------------|
| `price`    | integer | The original price of the item           |
| `discount` | integer | The discount percentage to apply (0–100) |

**Returns:** The discounted price as a number, or an error message string if validation fails.

---

## Input Validation

| Scenario                        | Return Value                                  |
|---------------------------------|-----------------------------------------------|
| Valid price and discount        | Final discounted price (number)               |
| Non-integer price or discount   | `"The price should be a number"`              |
| Discount less than 0            | `"The discount should be between 0 and 100"`  |
| Discount greater than 100       | `"The discount should be between 0 and 100"`  |

---

## Example Output

```
80
The discount should be between 0 and 100
The discount should be between 0 and 100
The price should be a number
The price should be a number
```

---

## Known Issues & Notes

> ⚠️ **Typo in function name:** The function is named `apply_disccount` (double `c`). Consider renaming to `apply_discount` for clarity.

> ⚠️ **Unreachable code:** The original source contains code inside the function after the `return` statement (assigning `final_price`). This code never executes. It should be moved outside the function.

> ⚠️ **`isInteger()` method:** JavaScript numbers don't have an `.isInteger()` method. The correct approach is `Number.isInteger(price)`. The current implementation will throw a `TypeError` at runtime. Suggested fix:

```js
function apply_discount(price, discount) {
  if (!Number.isInteger(price) || !Number.isInteger(discount)) {
    return "The price should be a number";
  } else if (discount < 0 || discount > 100) {
    return "The discount should be between 0 and 100";
  } else {
    return price - (price * discount) / 100;
  }
}

const final_price = apply_discount(100, 20);
console.log(final_price); // → 80
```
