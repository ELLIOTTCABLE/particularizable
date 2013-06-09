return module.exports = (function(){ var particularizable;
  particularizable = new(Object);
  
  // An associative `Object` → `Object` dictionary.
  // 
  // Almost certainly about fifty thousand times slower than the `Object` hash
  // table… but sometimes you just *need to* match one object to another.
  particularizable.ass = (function () { var ass;
    ass = new(Object);
    
    ass.constructor = function (blueprint) { var that;
      that = this;
      (function () { var keys, values;
        keys = new(Array), values = new(Array);
        
        that._values = function () { return values };
        that._keys = function () { return keys };
      })();
      
      return this;
    };
    ass.constructor.prototype = ass;
    
    
    // Gets the value stored at the same index as a given key
    ass.get = function (key) { var value;
      value = this._values()[this._keys().indexOf(key)];
      return value !== -1 ? value : null;
    };
    
    // Sets a key and value at the same index
    ass.set = function (key, value) { var index;
      index = this._keys().indexOf(key);
      index = index !== -1 ? index : this._keys().length;
      
      this._keys()[index] = key;
      this._values()[index] = value;
      return index;
    };
    
    return ass.constructor();
  })();
  
  return particularizable;
})()
