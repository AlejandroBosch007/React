const pokemonController = require("../controller/pokemon");
const expect = require("chai").expect;
const assert = require("chai").assert;

describe("Testing pokemonController", () => {

  describe("Check add funcion", () => {
    it("Check return value: 10 ", () => {
      let result = pokemonController.add(3,7);
      expect(result).to.equal(10);
    });
    it("Check return value: 77 ", () => {
        let result = pokemonController.add(70,7);
        expect(result).to.equal(77);
      });
  });


  describe("Check substract funcion", () => {
    it("Check return value: 4 ", () => {
      let result = pokemonController.substract(3,7);
      expect(result).to.equal(-4);
    });
    it("Check return value: 63 ", () => {
        let result = pokemonController.substract(70,7);
        expect(result).to.equal(63);
      });
  });

  

  describe("Check list funcion", () => {
    it("Check return type ", async () => {
      let result = await pokemonController.listPokemon();
      expect(result).to.be.a('array');
    });
  });


  describe("Check listSome funcion", () => {
    it("Check return type ", async () => {
      let result = await pokemonController.listSomePokemon(2);
      assert.typeOf(result, 'array');
      expect(result[0][0]).to.be.a('object');
    });
  });


});

