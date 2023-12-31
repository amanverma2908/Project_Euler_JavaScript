/*                              Problem 3: Largest prime factor

 The prime factors of 13195 are 5, 7, 13 and 29.
 What is the largest prime factor of the given number?

 */

function largestPrimeFactor(number) {
  let largePrime = -1;
  let i = 2;
  while (i * i <= number) {
    while (number % i == 0) {
      largePrime = i;
      number = number / i;
    }
    i = i + 1;
  }
  if (number > 1) {
    largePrime = number;
  }
  return largePrime;
}

largestPrimeFactor(13195);   // output : 29
