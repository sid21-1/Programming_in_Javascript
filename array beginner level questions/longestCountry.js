let country = ["Australia", "Germany", "United States of America"];
function longest(country)
{
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
 console.log(country[ansIdx]);
}
longest(country);
