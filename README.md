# Reject for the JS Array
Reject for the JavaScript Array

# Reason
[].filter() is a function I use very often. I have come across many cases where I want to perform the inverse and end up with a transformed array where each element was rejected by the callback rather then approved.

# Use case
[1,2,3,4,5].reject((number) => number < 3) //=> [3,4,5]
