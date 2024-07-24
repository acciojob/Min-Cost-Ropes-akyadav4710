function mincost(arr) {
  // Initialize total cost to 0
  let totalCost = 0;

  // Sort the array to always deal with the smallest ropes first
  arr.sort((a, b) => a - b);

  // While there's more than one rope, combine the smallest two
  while (arr.length > 1) {
    // Get the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Calculate the cost of combining these two ropes
    let cost = first + second;

    // Add this cost to the total cost
    totalCost += cost;

    // Insert the new rope back into the array, keeping it sorted
    arr.unshift(cost);
    arr.sort((a, b) => a - b);
  }

  // Return the total cost
  return totalCost;
}

module.exports = mincost;
