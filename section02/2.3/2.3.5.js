// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number

// 2) create a variable to represent the current total

// 3) write a while loop that sums the numbers from 1 to 100

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
let currentNum = 100;
let currentTotal = 0;
let i = 1;
while (i <= currentNum) {
  currentTotal += i;
  i++;
  console.log(currentTotal);
}
let curNum = 100;
let curTotal = 0;
for (i; i <= curNum; i++) {
  curTotal += i;
}
console.log(curTotal);
