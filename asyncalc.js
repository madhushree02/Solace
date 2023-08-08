function add(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

function subtract(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a - b);
    }, 1000); 
  });
}

function multiply(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a * b);
    }, 1000); 
  });
}

function divide(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a / b);
    }, 1000);
  });
}

function calculatePercentage(value, percentage) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((value * percentage) / 100);
    }, 1000); 
});
}

async function performCalculations() {
  try {
    const resultAdd = await add(10, 5);
    console.log("Addition:", resultAdd);

    const resultSubtract = await subtract(15, 7);
    console.log("Subtraction:", resultSubtract);

    const resultMultiply = await multiply(8, 4);
    console.log("Multiplication:", resultMultiply);

    const resultDivide = await divide(20, 2);
    console.log("Division:", resultDivide);

    const resultPercentage = await calculatePercentage(200, 15);
    console.log("Percentage:", resultPercentage);
  } catch (error) {
    console.error("Error:", error);
  }
}

performCalculations();