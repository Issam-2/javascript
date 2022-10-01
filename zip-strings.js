function zipStrings(strA, strB) {
  // Add you solution here
  let length = Math.min(strA.length , strB.length);
  let ergebnis = "";
  let i = 0;
  for(i = 0; i < length; i++){
    ergebnis += strA[i] + strB[i];
  }
  return ergebnis + strA.slice(i) + strB.slice(i);
}
