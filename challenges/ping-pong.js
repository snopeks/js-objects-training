/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];


  array.length = 4

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE
//step 1: how do I access where pingpong is hardcoded?
//step 2: how do I find where pingpong is in the array?
//step 3: how do I increase the steps for pingpong?
//step 4: how do I move the pingpong?
//step 5: how do I establish pingpong direction?
//step 6: how do I return the result?

var table = [{steps: 0}, 3, 4, 5];
// var table = [3, {steps: 1}, 4, 3, 3];
// var table = [3, 4, 3, 3, {steps: 4}];
// var table = [{steps: 8}, 3, 4, 5, 6]

function pingPong(table){
  var pingpongIndex = null;
  //find pingpong and increase steps
  table.forEach(function findPingPong(value, i){
//     console.log(typeof value)
//     console.log(value)
    if(value && value["steps"]!= undefined){
      pingpongIndex = i;
    }
  });
  var normalizeSteps = table[pingpongIndex].steps %((table.length-1)*2);
  table[pingpongIndex].steps +=1;
  //move the pingpong
  var pingpong = table[pingpongIndex];
  console.log("this is normalizeSteps", normalizeSteps, "this is pingpongIndex", pingpongIndex)

  if(normalizeSteps < 3){
    table.splice(pingpongIndex, 1);
    table.splice(pingpongIndex+1, 0, pingpong);
  } else {
    //splice left
    table.splice(pingpongIndex,1)
    table.splice(pingpongIndex-1, 0, pingpong)
  }
  console.log("did pingpong move?", table);
}

pingPong(table)



