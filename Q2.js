function createCharCountMap(str) {
    const charCountMap = new Map();
    const formattedStr = str.replace(/\s/g, "").toLowerCase();
  
    for (const char of formattedStr) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
  
    return charCountMap;
  }
  
  function isAnagramInArray(anagram, arr) {
    const anagramCharCountMap = createCharCountMap(anagram);
    const matchingAnagrams = [];
  
    for (const word of arr) {
      const wordCharCountMap = createCharCountMap(word);
  
      if (isEqualCharCountMaps(anagramCharCountMap, wordCharCountMap)) {
        matchingAnagrams.push(word);
      }
    }
  
    return matchingAnagrams;
  }
  
  function isEqualCharCountMaps(map1, map2) {
    if (map1.size !== map2.size) {
      return false;
    }
  
    for (const [key, value] of map1) {
      if (value !== map2.get(key)) {
        return false;
      }
    }
  
    return true;
  }
  
  const anagrams =  ["tater", "tree", "teart", "tetra", "heart", "hamster"];
  
  console.log(isAnagramInArray("treat", anagrams));