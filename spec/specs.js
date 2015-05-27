describe('primeSifter', function() {

  it("Returns a list of primes from 2 to the given number.", function() {
    expect(primeSifter(10)).to.eql([2, 3, 5, 7]);
  });

  it("Returns a list of primes from 2 to the given number.", function() {
    expect(primeSifter(100)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
  });



});
