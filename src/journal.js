function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function () {
  console.log("I am in count words" + this.body);
  let wordArray = this.body.split(" ");
  let numberOfWords = wordArray.length;
  return numberOfWords;
};

Entry.prototype.countVowelsOrConsonants = function () {
  let letterArray = this.body.split("");
  let vowelCount = 0;
  let consonantCount = 0;
  letterArray.forEach((letter) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())) {
      vowelCount++;
    }
  });
  letterArray.forEach((letter) => {
    if (!['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase()) && letter.match(/[a-z]/i)) {
      consonantCount++;
    }
  });
  return ["The vowel count is: " + vowelCount, " The consonant count is: " + consonantCount];
};

Entry.prototype.getTeaser = function () {
  let sentenceArray = this.body.split(". ");
  let firstSentence = sentenceArray[0];
  let wordArray = firstSentence.split(" ");
  if (wordArray.length <= 8) {
    return firstSentence;
  } else {
    let sentenceSlice = wordArray.slice(0, 8).join(" ");
    return sentenceSlice;
  }
};

export default Entry;
