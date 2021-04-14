/**
 * Collection of input strings
 * Collection of query strings
 * 
 * For each query string calculate how many times instances of strings there are occurs.
 * 
 * return an array of the results. In order for each query count the instances.
 * 
 * 
 */

 //Brute force
 const matchingStrings = (strings, queries) => {
    const queryResults = [];
    queries.forEach(q => {
        queryResults.push(strings.filter(s => s === q).length);
    });

    return queryResults;
 }

 //O(n) = O(qs), Fails solution.
 const matchingStrings2 = (strings, queries) => {
     let map = new Map();
     let results = [];

     queries.forEach(q => map.set(q, []));
     
     strings.forEach(s => {
         if(map.has(s)) {
             map.get(s).push(s);
         }
     })

     for(let [_, value] of map.entries()) {
         results.push(value.length);
     }

     return results;
}
/**
 * 
 * ['ab', 'ab', 'abc']
 */
 const strings = ['def', 'de', 'de', 'de', 'fgh'];
 const queries = ['de', 'lmn', 'fgh'];

 const answer = [3, 0, 1];
//  console.log(matchingStrings(strings, queries));
 console.log(matchingStrings2(strings, queries));