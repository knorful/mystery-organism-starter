// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let randomBaseIdx = Math.floor(Math.random() * this.dna.length);
      let randomBase = this.dna[randomBaseIdx];
      let randomizeBase = returnRandBase();
      while (randomBase === randomizeBase) {
        randomizeBase = returnRandBase();
      }
      this.dna[randomBaseIdx] = randomizeBase;
    },
    compareDNA(pAequorObj) {
      let likeBases = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) {
          likeBases++;
        }
      }
      console.log(
        `specimen #${specimenNum} and specimen #${
          pAequorObj.specimenNum
        } have ${Math.round(
          (likeBases / this.dna.length) * 100
        )}% DNA in common`
      );
    },
    willLikelySurvive() {
      let numOfGoodBases = 0;
      let willSurvive;
      this.dna.forEach((base) =>
        base === "C" || base === "G" ? numOfGoodBases++ : false
      );
      willSurvive = Math.round((numOfGoodBases / this.dna.length) * 100) > 60;
      console.log("Will this specimen most likely survive? ", willSurvive);
      return willSurvive;
    },
  };
};

let specimenOne = pAequorFactory(1, mockUpStrand());
let specimenTwo = pAequorFactory(2, mockUpStrand());
specimenOne.mutate();
specimenOne.compareDNA(specimenTwo);
specimenOne.willLikelySurvive();
