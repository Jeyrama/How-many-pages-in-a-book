/*
Every book has n pages with page numbers 1 to n. 
The summary is made by adding up the number of digits of all page numbers.

Task: 
  Given the summary, find the number of pages n the book has.

Example:
  If the input is summary=25, then the output must be n=17: 
  The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.
*/


// Solution

function amountOfPages(summary){
  let counter = 1;
  let string = '';
  
  while(string.length < summary) {
    string += counter
    counter++
  }
  return counter - 1
}

// or

function amountOfPages(summary){
  let res = 0;
  
  for (let i = 0; true; i++) {
    if (summary > 0) {
      summary -= 9 * Math.pow(10, i) * (i+1);
      res += 9 * Math.pow(10, i);
    } else {
      res += summary / i;
      break;
    }
  }
  return res;
}