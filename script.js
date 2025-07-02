function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n || n % 3n === 0n) return false;
  for (let i = 5n; i * i <= n; i += 6n) {
    if (n % i === 0n || n % (i + 2n) === 0n) return false;
  }
  return true;
}

function decompose() {
  const input = document.getElementById("inputNumber").value.trim();
  const E = BigInt(input);

  if (E % 2n !== 0n || E <= 2n) {
    document.getElementById("result").innerText = "Please enter an even number greater than 2.";
    return;
  }

  const t0 = performance.now();
  for (let p = 3n; p <= E / 2n; p += 2n) {
    let q = E - p;
    if (isPrime(p) && isPrime(q)) {
      const t1 = performance.now();
      document.getElementById("result").innerText =
        `${E} = ${p} + ${q}\nFound in ${(t1 - t0).toFixed(2)} ms.`;
      return;
    }
  }

  document.getElementById("result").innerText = "No decomposition found.";
}
