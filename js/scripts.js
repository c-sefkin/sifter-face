var primeSifter = function(number) {
  var all = []
  for(var i = 0; i < number - 1; i++) {
    all.push(i + 2);
  }

  for(var prime = 2; prime < number; prime++) {
    for(var i = prime; i < all.length; i++) {
      if (all[i] % prime === 0)
        all.splice(i, 1)
    }
  }

  return all;
}
