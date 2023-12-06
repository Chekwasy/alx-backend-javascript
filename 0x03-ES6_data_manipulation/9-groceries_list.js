export default function groceriesList() {
  const dct = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const dmap = new Map();
  for (const itm of Object.keys(dct)) {
    dmap.set(itm, dct[itm]);
  }
  return dmap;
}
