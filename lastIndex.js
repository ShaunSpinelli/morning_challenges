/*
Find Last Index
Like _.findIndex but iterates the array in reverse, returning the index closest
to the end where the predicate truth test passes.
Example:
;
=> 3
*/

// Your code here!
const findLastIndex = (arr,item) => {

    for (let i = arr.length-1; i >= 0; i--){
        for( j in arr[i]){
            for(x in j){
                if( arr[i][j] ===  item[j] && arr[i][j][x] == item[j][x]){
                    return i
                }
            }
        } 
    };
}


// const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
//              {'id': 2, 'name': 'Ted', 'last': 'White'},
//              {'id': 3, 'name': 'Frank', 'last': 'James'},
//              {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
// console.log(findLastIndex(users, {name: 'Ted'})




// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Find Last Index', () => {
    it('finds the last index', () => {
        const objects = [
          {a: 0, b: 0},
          {a: 1, b: 1},
          {a: 2, b: 2},
          {a: 0, b: 0}
        ];
        const result = findLastIndex(objects, {a: 1});
        assert.equal(result, 1);
      })
      it('finds the last index for object with two key:value pairs', () => {
        const objects = [
          {a: 0, b: 0},
          {a: 2, b: 1},
          {a: 2, b: 2},
          {a: 0, b: 0}
        ];
        const result = findLastIndex(objects, {a: 2, b:1});
        assert.equal(result, 1);
      })
});