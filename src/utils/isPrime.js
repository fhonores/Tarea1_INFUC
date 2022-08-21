const { sqrt, floor } = Math;

export const isPrime = (n) =>  {
    for (let i = 2; i <= floor(sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };