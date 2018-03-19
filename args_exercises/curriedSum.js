
function curriedSum(numArgs) {
  let numbers = [];
  const _curriedSum = function(number)  {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, val) => acc + val);
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

const sum = curriedSum(4);
// console.log(sum(5)(30)(20));
console.log(sum(5)(30)(20)(1));


// Function.prototype.curry = function(numArgs) {
//   let args = [];
//   let _method = this;
//   return function _curry(arg) {
//     args.push(arg);
//     if (args.length === numArgs) {
//       return _method.apply(null, args);
//     } else {
//       return _curry;
//     }
//   };
// };


Function.prototype.curry = function(numArgs) {
  let args = [];
  let _method = this;
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return _method(...args);
    } else {
      return _curry;
    }
  };
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// const sum2 = sumThree.curry(3);
console.log(sumThree.curry(3)(4)(20)(6));
// console.log(sum2(3, 5, 10));
