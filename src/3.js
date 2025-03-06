const getRandomMathProblem = () => {
  const operators = ['+', '-', '*', '/'];
  const numbers = [1, 2, 3, 4, 5];
  const randomOperatorIndex = Math.floor(Math.random() * operators.length);
  const randomNumberA = numbers[Math.floor(Math.random() * numbers.length)];
  const randomNumberB = numbers[Math.floor(Math.random() * numbers.length)];
  let problemString;
  if (operators[randomOperatorIndex] === '+') {
    problemString = `${randomNumberA} + ${randomNumberB}`;
  } else if (operators[randomOperatorIndex] === '-') {
    problemString = `${randomNumberA} - ${randomNumberB}`;
  } else if (operators[randomOperatorIndex] === '*') {
    problemString = `${randomNumberA} * ${randomNumberB}`;
  } else if (operators[randomOperatorIndex] === '/') {
    problemString = `${randomNumberA} / ${randomNumberB}`;
  }
  return problemString;
};
