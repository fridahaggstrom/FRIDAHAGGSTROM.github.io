$(document).ready(function() {
​
/*  =========================================================================
    1. make an array of words
    ==========================================================================   */

  var noun1 = [ "lorem", "ipsum", "dolor", "sit", "amet"];
  var noun2 = [ "consectetur", "adipiscing", "elit", "cras", "et"];
  var adj = [ "elementum", "turpis" ];

  // Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

​
  /*  =========================================================================
    2. take each array and pick a word at random
    ==========================================================================   */

  function pickRandomWord(x){
    y = x[Math.floor(Math.random()*x.length)];
    return y;
  }
​
​
  // Math.floor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    // Math.random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // Array.length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
​
​
  /*  =========================================================================
    3. print a random word from the array on the browser
    ==========================================================================   */
​
  function printRandomWord() {

    // call the function from step 2 for each list
    var list_noun1 = pickRandomWord(noun1);
    var list_noun2  = pickRandomWord(noun2);
    var list_adj = pickRandomWord(adj);
​
    // print the selected word from list on the browser
      $('.list1').html(list_noun1);
      $('.list2').html(list_noun2);
      $('.list3').html(list_adj);
    // .html(): http://api.jquery.com/html/
​
  }

  // call the function when the html page is initially loaded
  printRandomWord();
​
  // call the function when a user click a button
  $('button').click(function(){
    printRandomWord();
  });
​
  //.click(): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click
​
});
