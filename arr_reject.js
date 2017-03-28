module.exports = arrReject;
"use strict";

;(function(Array){
  ;(Array.prototype.reject || (Array.prototype.reject = function(fCallback){

    //Handle the invoke of reject via undefined or null;
    if ((void{} === this) || (null === this)){
      throw new TypeError("Array.prototype.reject called on null or undefined");
    }
  
    //No callback arg provided whatsoever
    else if ("undefined" === typeof fCallback){
      throw new TypeError("undefined is not a function");
    }
  
    //Non-function callback arg provided 
    else if ("function" !== typeof fCallback){
      throw new TypeError(fCallback+" is not a function");
    }
    
    let arr = (((this) && ("length" in this) && ("map" in this) && (this)) || []);

    //Reduce down the array to a new, transformed array
    return arr.reduce(function(arrReject, element, index){
        //To match the [].filter() logic, perform an loose "falsey" check
        if (!(fCallback(element, index))){
          arrReject.push(element);
        }
        return arrReject;
      },
    []);
  }));
}(Array));
