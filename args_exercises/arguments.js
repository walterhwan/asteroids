function sum(...args) {
  // let args = Array.from(arguments);
  let total = 0;
  args.forEach(el => {
    total += el;
  });
  return total;
}

console.log(sum(1, 2, 3, 4));


// Function.prototype.myBind = function(context) {
//   let args = Array.from(arguments).slice(1);
//   return (...otherArgs) => {
//     this.apply(context, args.concat(otherArgs));
//   };
// };

Function.prototype.myBind = function(context, ...args) {
  return (...otherArgs) => {
    this.apply(context, args.concat(otherArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");
// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
