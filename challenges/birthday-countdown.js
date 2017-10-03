/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysUntilDate(bday){
  //get current time
  var currentDate = new Date();
  var currentTime = currentDate.getTime();
  var birthDate = new Date(bday);

  console.log(currentDate)
  console.log(birthDate)
  console.log(currentTime)

  var birthDay = birthDate.getDate();
  var birthMonth = birthDate.getMonth();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

  // calculate how to get the year properly:
  // check birth month and current month: if current month - birth month > 0,
  if(currentMonth - birthMonth > 0){
    // then future birthday year is current year + 1
    currentYear +=1;
  } else if(currentMonth - birthMonth === 0){
    // if birth month = current month, check days
    // if current day - birth day > 0
    if(currentDay - birthDay > 0){
      // then future birthday year is current year +1
      currentYear+=1;
    }
  }
  // else use current year




  var futureBirthday = new Date(currentYear, birthMonth, birthDay)
  console.log("get current year", currentDate.getFullYear());
  console.log("get the birth month", birthDate.getMonth());
  console.log("get birth day", birthDate.getDate());
  console.log(futureBirthday)

  var futureBirthdayTime = futureBirthday.getTime();

  var timeDiff = futureBirthdayTime - currentTime
  console.log(timeDiff)

  //get days until birthday
  var days = Math.floor(timeDiff / (1000*60*60*24))
  console.log("There are " + days + " days until your birthday ")
};

var importantBirthdays = [
  {
    name: "Jack",
    dob: "10/31/2013"
  },
  {
    name: "Jill",
    dob: "4/01/1975"
  }
];
// console.log(importantBirthdays[0]['name'])
// console.log(importantBirthdays[0]['dob'])
function birthdayReminder(birthdayArray){
  var reminderArray = [];
  birthdayArray.forEach(function(value, index){
    reminderArray.push(value['name'] +"'s birthday is in " + daysUntilDate(value['dob'])+ " days")
    console.log(reminderArray)

  })
}

birthdayReminder(importantBirthdays);
daysUntilDate('01/15/1989')