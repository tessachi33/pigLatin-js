var lowerWord = function(string) {
  var stringLower = string.toLowerCase();
  return stringLower;
};

var splitWord = function(lowerWord) {
  var stringArray = lowerWord.split("");
  return stringArray;
};

var startWithVowel = function(splitWord) {
  var vowels = ["a", "e", "i", "o", "u"]
  return vowels.indexOf(splitWord[0]) !== -1;
};

var startWithConsonant = function(splitWord) {
  var consonant = splitWord.shift();
  splitWord.push(consonant);

  return splitWord;
};

var startWithTwoOrMoreCons = function(splitWord) {

  while(!startWithVowel(splitWord)) {
    if(splitWord[0] === ("q")) {
      var qStart = splitWord.shift();
      splitWord.push(qStart);
      var uStart = splitWord.shift();
      splitWord.push(uStart);
      return splitWord;
    }
    else {
      startWithConsonant(splitWord);
    }
  } return splitWord;
};

var backToWord = function(splitWord) {
  return splitWord.toString().replace(/[^\w]/g, "");
}

var addAy = function(backToWord) {
  return backToWord + "ay";
};

var pigLatin = function(word) {
  var word = lowerWord(word);
  var splitting = splitWord(word);
  if (splitting(startWithVowel) = true) {
    return splitting + "ay"}
    else {
      startWithTwoOrMoreCons(splitting);
      return splitting + "ay";
    }
  // if it starts with a vowel
    // return word + ay
  //  else if its a consonant
    // return pig latinized version
};


$(document).ready(function() {
  $("form#latin").submit(function(event) {
    var word= ($("input#word").val());
  //  var result = pigLatin(word);
      //
      $(".pig").text(word)
      // $(".final").text(result)
       $("#result").show()


    event.preventDefault();
  });
});
