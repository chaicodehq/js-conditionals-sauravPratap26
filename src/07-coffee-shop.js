/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if (
    !["small", "medium", "large"].includes(size) ||
    !["regular", "latte", "cappuccino", "mocha"].includes(type)
  )
    return -1;
  let cost = extras.whippedCream ? 0.5 : 0;
  cost += extras.extraShot ? 0.75 : 0;
  switch (size) {
    case "small": {
      cost += 3.0;
      break;
    }
    case "medium": {
      cost += 4.0;
      break;
    }
    case "large": {
      cost += 5.0;
      break;
    }
    default:
      break;
  }
  switch (type) {
    case "regular": {
      cost += 0.0;
      break;
    }
    case "latte": {
      cost += 1.0;
      break;
    }
    case "cappuccino": {
      cost += 1.5;
      break;
    }
    case "mocha": {
      cost += 2.0;
      break;
    }
    default:
      break;
  }
  return Number(cost.toFixed(2));
}
