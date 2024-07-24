function mincost(arr) {

  let totalCost = 0;

 
  arr.sort((a, b) => a - b);

 
  while (arr.length > 1) {
    // Get the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    
    let cost = first + second;

   
    totalCost += cost;

   
    arr.unshift(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports = mincost;
