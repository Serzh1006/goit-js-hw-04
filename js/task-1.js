'use strict';

function slugify(title) {
  const wordList = title.toLowerCase().split(' ');
  const slugText = wordList.join('-');
  return slugText;
}

console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
