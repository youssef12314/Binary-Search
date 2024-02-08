
let globalArrayOfWords=[];

async function start(){
const response = await fetch("../data/ddo_fullforms_2023-10-11.csv"); 
const rawtext = await response.text();



globalArrayOfWords = rawtext.split("\n").map(line => {
    const parts = line.split("\t");
    return {
      variant: parts[0],
      headword: parts[1],
      homograph: parts[2],
      partofspeech: parts[3],
      id: parts[4]
    }
    
    
  });

  console.log("Array length:", globalArrayOfWords.length);
  console.log("Array content:", globalArrayOfWords);

}

function compare(word, dictionaryEntry){
  if (word < dictionaryEntry.variant){
    return -1
  } else if (word > dictionaryEntry.variant){
    return 1
  } else{
    return 0;
  }

}

const word = "hestevogn";
const dictionaryEntry = {
  variant: "hestetyvs",
  headword: "hestetyv",
  homograph: undefined,
  partofspeech: "sb.",
  id: 53001170
};

function binarySearch(arr, word, compareFn) {
  let start = 0;
  let end = arr.length - 1;
  let iterations = 0;

  while (start <= end) {
    iterations++;
    let mid = Math.floor((start + end) / 2);
    let comparison = compareFn(word, arr[mid]);

    if (comparison === 0) {
      return { index: mid, iterations };
    } else if (comparison < 0) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return { index: -1, iterations };
}

const wordToSearch = "hestevogn";
const result = binarySearch(globalArrayOfWords, wordToSearch, compare);
console.log("Resultat af binarySearch:");
console.log("Index:", result.index);
console.log("Antal iterationer:", result.iterations);
console.log(result);

 // Test af findIndex
 //const findIndexResult = globalArrayOfWords.findIndex(wordObject => wordObject.variant === wordToSearch);
 //console.log("Resultat af findIndex:");
 //console.log("Index:", findIndexResult);
//}



start();