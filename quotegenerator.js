const quote1 = "The Dao that can be trodden is not the enduring and unchanging Dao.";
const quote2 = "The Dao is (like) the emptiness of a vessel; and in our employment of it we must be on our guard against all fulness.";
const quote3 = "The skilful masters of the Dao in old times, with a subtle and exquisite penetration, comprehended its mysteries, and were deep (also) so as to elude men's knowledge.";
const word1 = "Carrot";
const word2 = "Violin";
const word3 = "Ear";
const person1 = "Albert Einstein";
const person2 = "Beyonce";
const person3 = "Barrack Obama";
const quoteArray = [quote1, quote2, quote3];
const wordArray = [word1, word2, word3];
const personArray = [person1, person2, person3];
const chosenQuote = quoteArray[randomize(quoteArray.length)];
const chosenWord = wordArray[randomize(wordArray.length)];
const chosenPerson = personArray[randomize(personArray.length)];

function randomize(num) {
    return Math.floor(Math.random() * num);
}

function randomQuote (quote, word, person) {
    let newQuote = quote.replaceAll('Dao', word)
    return newQuote + ' - ' + person;
}

console.log(randomQuote(chosenQuote, chosenWord, chosenPerson));