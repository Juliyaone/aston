const user = {
  name: "Bob", 
  funcFunc() { 
    return function () {
      console.log(this);
    };
  },


  funcArrow() { 
    return () => {
      console.log(this);
    };
  },
  arrowFunc: () => { 
    return function () {
      console.log(this);
    };
  },
  arrowArrow: () => { 
    return () => {
      console.log(this);
    };
  },
};


// вызываем дважды!!!
console.log('funcFunc вызов', user.funcFunc()()); // ? undefined или Object [global] 


console.log('funcArrow вызов', user.funcArrow()()); // ? undefined или
    // {
    //   name: 'Bob',
    //   funcFunc: [Function: funcFunc],
    //   funcArrow: [Function: funcArrow],
    //   arrowFunc: [Function: arrowFunc],
    //   arrowArrow: [Function: arrowArrow]
    // }
console.log('arrowFunc вызов', user.arrowFunc()()); // ? undefined или global.
console.log('arrowArrow вызов', user.arrowArrow()()); // ? undefined или global.


