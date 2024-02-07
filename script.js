
async function start(){
const response = await fetch("../data/ddo_fullforms_2023-10-11.csv"); 
const rawtext = await response.text();
}


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
