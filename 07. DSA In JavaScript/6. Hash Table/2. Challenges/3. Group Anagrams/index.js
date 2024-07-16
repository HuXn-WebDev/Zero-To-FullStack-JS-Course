function groupAnagrams(strs) {
  const anagramMap = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (sortedStr in anagramMap) {
      anagramMap[sortedStr].push(str);
    } else {
      anagramMap[sortedStr] = [str];
    }
  }

  return Object.values(anagramMap);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groups = groupAnagrams(strs);

console.log(groups);
// Output: [["eat", "tea", "ate"], ["bat"], ["nat", "tan"]]
