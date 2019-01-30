const getAllSubsets = 
  theArray => theArray.reduce(
    (subsets, value) => subsets.concat(
      subsets.map(set => [value,...set])
    ),
    [[]]
  );

class Grid {
  constructor(grid, rowGoal, columnGoal) {
    this.grid = grid;
    this.rowGoal = rowGoal;
    this.columnGoal = columnGoal;

    this.curRowGoal = rowGoal.slice();
    this.curColumnGoal = columnGoal.slice();
    this.xLength = columnGoal.length;
    this.yLength = rowGoal.length;
    this.result = Array(this.xLength*this.yLength).fill(null);
  }

  getCoords(index) {
    return {
      x: index%this.xLength,
      y: Math.floor(index/this.yLength)
    };
  }

  getIndex(coords) {
    return coords.y*this.xLength + coords.x;
  }

  reduceGoal(index) {
    var coords = this.getCoords(index);
    this.curColumnGoal[coords.x] -= this.grid[index];
    this.curRowGoal[coords.y] -= this.grid[index];
  }

  remove(indexArr) {
    indexArr.forEach(index => {
      this.grid[index] = null;
    });
  }

  add(indexArr) {
    indexArr.forEach(index => {
      this.result[index] = this.grid[index];

      // Reduce the goal before removing value from input grid
      this.reduceGoal(index);

      this.grid[index] = null;
    });
  }

  isSolved() {
    var rowSums = Array(this.yLength).fill(0);
    var columnSums = Array(this.xLength).fill(0);
    for (let y = 0; y < this.yLength; y++) {
      for (let x = 0; x < this.xLength; x++) {
        var curNum = this.result[this.getIndex({x: x, y: y})]

        if (curNum) {
          rowSums[y] += curNum;
          columnSums[x] += curNum;
        }
      }
    }

    // Compare results
    if (rowSums.join() === this.rowGoal.join() && columnSums.join() === this.columnGoal.join()) {
      return true;
    } else {
      return false;
    }
  }

  sumRow(y) {
    var startIndex = y*this.xLength;
    var sum = 0;
    for (let x = 0; x < this.xLength; x++) {
      sum += this.grid[startIndex+x];
    }
    return sum;
  }

  sumColumn(x) {
    var sum = 0;
    for (let y = 0; y < this.yLength; y++) {
      sum += this.grid[this.xLength*y+x];
    }
    return sum;
  }

  getCurRowGoal(y) {
    return this.curRowGoal[y];
  }

  getCurColumnGoal(x) {
    return this.curColumnGoal[x];
  }

  getRowDifference(y) {
    return this.sumRow(y) - this.getCurRowGoal(y);
  }

  getColumnDifference(x) {
    return this.sumColumn(x) - this.getCurColumnGoal(x);
  }

  getRowIndices(y) {
    var indexArr = [];
    for (let x = 0; x < this.xLength; x++) {
      var curNumIndex = this.getIndex({x: x, y: y});
      if (this.grid[curNumIndex]) {
        indexArr.push(curNumIndex);
      }
    }
    return indexArr;
  }

  getColumnIndices(x) {
    var indexArr = [];
    for (let y = 0; y < this.yLength; y++) {
      var curNumIndex = this.getIndex({x: x, y: y});
      if (this.grid[curNumIndex]) {
        indexArr.push(curNumIndex);
      }
    }
    return indexArr;
  }

  getOddRowIndices(y) {
    var indexArr = [];
    for (let x = 0; x < this.xLength; x++) {
      var curNumIndex = this.getIndex({x: x, y: y});
      if (this.grid[curNumIndex] && this.grid[curNumIndex]%2 == 1) {
        indexArr.push(curNumIndex);
      }
    }
    return indexArr;
  }

  getOddColumnIndices(x) {
    var indexArr = [];
    for (let y = 0; y < this.yLength; y++) {
      var curNumIndex = this.getIndex({x: x, y: y});
      if (this.grid[curNumIndex] && this.grid[curNumIndex]%2 == 1) {
        indexArr.push(curNumIndex);
      }
    }
    return indexArr;
  }

  sumArray(arr) {
    var result = 0;
    for (let k = 0; k < arr.length; k++) {
      result += this.grid[arr[k]];
    }
    return result;
  }

  sumRowCombos(y, goal) {
    var indexArr = this.getRowIndices(y);
    var possibleSums = getAllSubsets(indexArr);
    var result = [];
    for (let i = 0; i < possibleSums.length; i++) {
      if (this.sumArray(possibleSums[i]) == goal) {
        result.push(possibleSums[i]);
      }
    }
    return result;
  }

  sumColumnCombos(x, goal) {
    var indexArr = this.getColumnIndices(x);
    var possibleSums = getAllSubsets(indexArr);
    var result = [];
    for (let i = 0; i < possibleSums.length; i++) {
      if (this.sumArray(possibleSums[i]) == goal) {
        result.push(possibleSums[i]);
      }
    }
    return result;
  }

  getCommonValues(values, solutions) {
    var posValues = values.slice();
    for (let i = 0; i < values.length; i++) {
      for (let k = 0; k < solutions.length; k++) {
        if (solutions[k].indexOf(values[i]) === -1) {
          posValues.splice(posValues.indexOf(values[i]), 1);
          break;
        }
      }
    }
    return posValues;
  }

  getUncommonValues(values, solutions) {
    var posValues = values.slice();
    for (let i = 0; i < solutions.length; i++) {
      for (let k = 0; k < solutions[i].length; k++) {
        var position = posValues.indexOf(solutions[i][k]);
        if (position > -1) {
          posValues.splice(position, 1);
        }
      }
    }
    return posValues;
  }

  solveGrid() {
    while(!this.isSolved()) {
      // Solve Rows
      for (let y = 0; y < this.yLength; y++) {
        if (this.getCurRowGoal(y) < 9) {
          for (let x = 0; x < this.xLength; x++) {
            var curNumIndex = this.getIndex({x: x, y: y});

            // Check Goal
            if (this.grid[curNumIndex] > this.getCurRowGoal(y)) {
              this.remove([curNumIndex]);
            }

            // Check Difference
            if (this.grid[curNumIndex] > this.getRowDifference(y)) {
              this.add([curNumIndex]);
            }
          }
        }

        // Removed unused numbers when meeting goal
        if (this.getCurRowGoal(y) == 0) {
          var removeArr = [];
          for (let x = 0; x < this.xLength; x++) {
            var curNumIndex = this.getIndex({x: x, y: y});

            if (this.grid[curNumIndex]) {
              removeArr.push(curNumIndex);
            }
          }
          this.remove(removeArr);
        }

        // Add unused numbers when all unused numbers already removed
        if (this.getRowDifference(y) == 0) {
          var addArr = [];
          for (let x = 0; x < this.xLength; x++) {
            var curNumIndex = this.getIndex({x: x, y: y});

            if (this.grid[curNumIndex]) {
              addArr.push(curNumIndex);
            }
          }
          this.add(addArr);
        }

        // Count odds
        var oddArr = this.getOddRowIndices(y);

        // Remove odd number if goal even
        if (this.getCurRowGoal(y)%2 == 0 && oddArr.length == 1) {
          this.remove(oddArr);
        // Add odd number if goal odd
        } else if (this.getCurRowGoal(y)%2 == 1 && oddArr.length == 1) {
          this.add(oddArr);
        }

        // Check sum combinations
        var sumArr = this.sumRowCombos(y, this.getCurRowGoal(y));

        if (sumArr.length == 1) {
          this.add(sumArr[0]);
        } else if (sumArr.length == 0 && this.getRowIndices(y).length > 0) {
          console.log("Error: no possible solution.");
          return null;
        } else {
          var indexArr = this.getRowIndices(y);
          // Remove commonly missing from possible solutions
          this.remove(this.getUncommonValues(indexArr, sumArr));
          // Add common number from possible solutions
          this.add(this.getCommonValues(indexArr, sumArr));
        }
      }

      // Solve columns
      for (let x = 0; x < this.xLength; x++) {
        if (this.getCurColumnGoal(x) < 9) {
          for (let y = 0; y < this.yLength; y++) {
            var curNumIndex = this.getIndex({x: x, y: y});

            // Check Goal
            if (this.grid[curNumIndex] > this.getCurColumnGoal(x)) {
              this.remove([curNumIndex]);
            }

            // Check Difference
            if (this.grid[curNumIndex] > this.getColumnDifference(x)) {
              this.add([curNumIndex]);
            }
          }
        }

        // Removed unused numbers when meeting goal
        if (this.getCurColumnGoal(x) == 0) {
          var removeArr = [];
          for (let y = 0; y < this.yLength; y++) {
            var curNumIndex = this.getIndex({x: x, y: y});

            if (this.grid[curNumIndex]) {
              removeArr.push(curNumIndex);
            }
          }
          this.remove(removeArr);
        }

        // Add unused numbers when all unused numbers already removed
        if (this.getColumnDifference(x) == 0) {
          var addArr = [];
          for (let y = 0; y < this.yLength; y++) {
            var curNumIndex = this.getIndex({x: x, y: y});

            if (this.grid[curNumIndex]) {
              addArr.push(curNumIndex);
            }
          }
          this.add(addArr);
        }

        // Count odds
        var oddArr = this.getOddColumnIndices(x);

        // Remove odd number if goal even
        if (this.getCurColumnGoal(x)%2 == 0 && oddArr.length == 1) {
          this.remove(oddArr);
        // Add odd number if goal odd
        } else if (this.getCurColumnGoal(x)%2 == 1 && oddArr.length == 1) {
          this.add(oddArr);
        }

        // Check sum combinations
        var sumArr = this.sumColumnCombos(x, this.getCurColumnGoal(x));

        if (sumArr.length == 1) {
          this.add(sumArr[0]);
        } else if (sumArr.length == 0 && this.getColumnIndices(x).length > 0) {
          console.log("Error: no possible solution.");
          return null;
        } else {
          var indexArr = this.getColumnIndices(x);
          // Remove commonly missing from possible solutions
          this.remove(this.getUncommonValues(indexArr, sumArr));
          // Add common number from possible solutions
          this.add(this.getCommonValues(indexArr, sumArr));
        }
      }
    }
    return this.result;
  }

  print(grid) {
    for (let y = 0; y < this.yLength; y++) {
      var row = "";
      for (let x = 0; x < this.xLength; x++) {
        var curIndex = this.getIndex({x: x, y: y})
        if (grid[curIndex]) {
          row += grid[curIndex] + ", ";
        } else {
          row += "X, ";
        }
      }
      console.log(row);
    }
  }

  getResultIndices() {
    var indices = [];
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i]) {
        indices.push(i);
      }
    }
    return indices;
  }
}