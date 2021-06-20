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
      console.log(`before mutation at ${randomBaseIdx + 1}: `, this.dna);
      this.dna[randomBaseIdx] = randomizeBase;
      console.log(`after mutation at ${randomBaseIdx + 1} : `, this.dna);
    },
  };
};

let specimenOne = pAequorFactory(1, mockUpStrand());
specimenOne.mutate();
