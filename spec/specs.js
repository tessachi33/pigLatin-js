describe('lowerWord', function() {
  it("will take a take a word and make it all lower case", function() {
    expect(lowerWord("Apple")).to.eql("apple");
  });
});

describe('splitWord', function(){
  it("will take a take a word and split it up into a char array", function() {
    expect(splitWord("apple")).to.eql(["a","p","p","l","e"]);
  });
});


describe("startWithVowel", function() {
  it("will return true if array starts with a vowel", function() {
    expect(startWithVowel("apple")).to.equal(true);
  });
});


describe('startWithConsonant', function(){
  it("will take first letter off and place at end of word", function() {
    expect(startWithConsonant(["b", "a", "n", "a", "n", "a"])).to.eql(["a", "n", "a", "n", "a", "b"]);
  });
});


describe('startWithTwoOrMoreCons', function(){
  it("will loop through letters until finds a vowel and put consonants at the end", function() {
    expect(startWithTwoOrMoreCons(["s", "p", "l", "i", "t"])).to.eql(["i", "t", "s", "p", "l"]);
  });

  it("will move qu to end of word", function() {
    expect(startWithTwoOrMoreCons(["q", "u", "a", "i", "n", "t"])).to.eql([ "a", "i", "n", "t", "q", "u"]);
  })
});


describe('addAy', function(){
  it("will put ay at the end of the char array", function() {
    expect(addAy("abc")).to.eql("abcay

    ");
  });
});

describe('backToWord', function(){
  it("will convert back to a string", function() {
    expect(backToWord(["a", "b", "c"])).to.equal("abc");
  });
});
