describe('primeSifter', function() {

  it("Returns a list of primes from 2 to the given number.", function() {
    expect(primeSifter(10)).to.eql([2, 3, 5, 7]);
  });

});
