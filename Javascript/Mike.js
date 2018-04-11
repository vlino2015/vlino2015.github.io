function counter () {
    var count = 0;
    var actuallyCount = function () {
      count++;
      return count;
    }
    return actuallyCount;
  }


  var myCount = counter();

  console.log(myCount());
  console.log(myCount());
  console.log(myCount());