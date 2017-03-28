module.exports = arrReject;
"use strict";

;(function(Array){
  ;(Array.prototype.reject || (Array.prototype.reject = function(fCallback){
    return this.reduce
    (
      function(arrReject, element, index){
      if (false == fCallback(element, index)){
          arrReject.push(element);
      }
        return arrReject;
      },
    []);
  }));
}(Array));
