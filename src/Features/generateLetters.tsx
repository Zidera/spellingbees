export function generateLetters(): string[] {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let plus = 0
  // generate 2-3 random vowels
  const numVowels = 2 + Math.floor(Math.random() * 1.9);
  if(numVowels === 2){
    plus = 1
  }
  const vowelLetters = [];
  for (let i = 0; i < numVowels; i++) {
    // pick a random vowel and remove it from the array so it's not used again
    const index = Math.floor(Math.random() * vowels.length);
    vowelLetters.push(vowels[index]);
    vowels.splice(index, 1);
    console.log(vowels[index])
  }

  const numConsonants = 4 + plus;
  const consonantLetters = [];
  for (let i = 0; i < numConsonants; i++) {
    const index = Math.floor(Math.random() * consonants.length);
    consonantLetters.push(consonants[index]);
    consonants.splice(index, 1);
    console.log(consonants[index])
  }

  const letters = consonantLetters.concat(vowelLetters);

  return letters;
}


