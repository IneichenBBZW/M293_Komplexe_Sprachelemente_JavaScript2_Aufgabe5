async function gerade() {
  let summe = 0;

  for (let i = 0; i < 900000000; i++) {
    if (i % 2 === 0) {
      summe += i;
    }
  }

  return summe;
}

async function ungerade() {
  let summe = 0;

  for (let i = 0; i < 900000000; i++) {
    if (i % 2 !== 0) {
      summe += i;
    }
  }

  return summe;
}

async function berechne() {
  const promiseGerade = gerade();
  const promiseUngerade = ungerade();

  const ergebnisGerade = await promiseGerade;
  const ergebnisUngerade = await promiseUngerade;

  console.log(ergebnisGerade);
  console.log(ergebnisUngerade);

  // console.log(await gerade());
  // console.log(await ungerade());
}

berechne();
