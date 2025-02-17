// полифил для метода bind():



if (!Function.prototype.bind) {
    Function.prototype.bind = function(context) {
      const self = this;
      const args = Array.prototype.slice.call(arguments, 1);
  
      function boundFunction() {
        return self.apply(context, args.concat(Array.prototype.slice.call(arguments)));
      }
  
      boundFunction.__proto__ = self.prototype;
  
      return boundFunction;
    };
  }
  
  