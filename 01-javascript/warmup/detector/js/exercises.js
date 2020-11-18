// # Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
//
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".

// I did not working
const anagramDetector = function (word, lists) {
      let letters = [];

      for (var i = 0; i < lists.length; i++) {
          for (var j = 0; j < word.length; j++) {
                   if (lists[i].includes(word[j])){
                       letters.push(lists[i]);
                   }
              }
      }
      return letters;
}
const lists = ["enlists", "google", "inlets", "banana"];

const result = anagramDetector('listen',lists);
console.log(result);

// teacher did
const anagram = function (potentialAnagram, words) {
	const matches = [];
	const sortedAnagram = potentialAnagram.split(' ').sort().join('').trim();

	for (let i = 0; i < words.length; i++) {
		const sortedWord = words[i].split('').sort().join('').trim();
        console.log(sortedWord)

        if (sortedAnagram === sortedWord) {
			matches.push(words[i])
		}
	}

	return matches;
}

console.log(anagram("listen", ["enlists", "silent", "inlets", "banana"]))

console.log(anagram("debit card", ["money", "bad credit", "consumerism"]))

console.log(anagram("define anagram", ["google", "joke", "nerd fame again"]))
