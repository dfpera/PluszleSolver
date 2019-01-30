document.querySelector('.three').addEventListener('click', function() {
  document.querySelector('.board-three').classList.add('show');
  document.querySelector('.board-four').classList.remove('show');
  document.querySelector('.board-five').classList.remove('show');
  document.querySelector('.board-six').classList.remove('show');
  document.querySelector('.board-seven').classList.remove('show');
  document.querySelector('.board-eight').classList.remove('show');
});
document.querySelector('.four').addEventListener('click', function() {
  document.querySelector('.board-three').classList.remove('show');
  document.querySelector('.board-four').classList.add('show');
  document.querySelector('.board-five').classList.remove('show');
  document.querySelector('.board-six').classList.remove('show');
  document.querySelector('.board-seven').classList.remove('show');
  document.querySelector('.board-eight').classList.remove('show');
});
document.querySelector('.five').addEventListener('click', function() {
  document.querySelector('.board-three').classList.remove('show');
  document.querySelector('.board-four').classList.remove('show');
  document.querySelector('.board-five').classList.add('show');
  document.querySelector('.board-six').classList.remove('show');
  document.querySelector('.board-seven').classList.remove('show');
  document.querySelector('.board-eight').classList.remove('show');
});
document.querySelector('.six').addEventListener('click', function() {
  document.querySelector('.board-three').classList.remove('show');
  document.querySelector('.board-four').classList.remove('show');
  document.querySelector('.board-five').classList.remove('show');
  document.querySelector('.board-six').classList.add('show');
  document.querySelector('.board-seven').classList.remove('show');
  document.querySelector('.board-eight').classList.remove('show');
});
document.querySelector('.seven').addEventListener('click', function() {
  document.querySelector('.board-three').classList.remove('show');
  document.querySelector('.board-four').classList.remove('show');
  document.querySelector('.board-five').classList.remove('show');
  document.querySelector('.board-six').classList.remove('show');
  document.querySelector('.board-seven').classList.add('show');
  document.querySelector('.board-eight').classList.remove('show');
});
document.querySelector('.eight').addEventListener('click', function() {
  document.querySelector('.board-three').classList.remove('show');
  document.querySelector('.board-four').classList.remove('show');
  document.querySelector('.board-five').classList.remove('show');
  document.querySelector('.board-six').classList.remove('show');
  document.querySelector('.board-seven').classList.remove('show');
  document.querySelector('.board-eight').classList.add('show');
});

document.querySelector('.board-three button').addEventListener('click', function() {
  let nums = document.querySelectorAll('.board-three input.num');
  let rows = document.querySelectorAll('.board-three input.row');
  let columns = document.querySelectorAll('.board-three input.column');
  var inputNums = [], inputRows = [], inputColumns = [];
  for (let i = 0; i < nums.length; i++) {
    inputNums.push(parseInt(nums[i].value));
    nums[i].classList.remove('highlight');
  }
  for (let i = 0; i < rows.length; i++) {
    inputRows.push(parseInt(rows[i].value));
  }
  for (let i = 0; i < columns.length; i++) {
    inputColumns.push(parseInt(columns[i].value));
  }

  var grid = new Grid(inputNums, inputRows, inputColumns);
  grid.solveGrid();
  grid.print(grid.result);
  var answers = grid.getResultIndices();

  for (let i = 0; i < answers.length; i++) {
    nums[answers[i]].classList.add('highlight')
  }
});

document.querySelector('.board-four button').addEventListener('click', function() {
  let nums = document.querySelectorAll('.board-four input.num');
  let rows = document.querySelectorAll('.board-four input.row');
  let columns = document.querySelectorAll('.board-four input.column');
  var inputNums = [], inputRows = [], inputColumns = [];
  for (let i = 0; i < nums.length; i++) {
    inputNums.push(parseInt(nums[i].value));
    nums[i].classList.remove('highlight');
  }
  for (let i = 0; i < rows.length; i++) {
    inputRows.push(parseInt(rows[i].value));
  }
  for (let i = 0; i < columns.length; i++) {
    inputColumns.push(parseInt(columns[i].value));
  }

  var grid = new Grid(inputNums, inputRows, inputColumns);
  grid.solveGrid();
  grid.print(grid.result);
  var answers = grid.getResultIndices();

  for (let i = 0; i < answers.length; i++) {
    nums[answers[i]].classList.add('highlight')
  }
});

document.querySelector('.board-five button').addEventListener('click', function() {
  let nums = document.querySelectorAll('.board-five input.num');
  let rows = document.querySelectorAll('.board-five input.row');
  let columns = document.querySelectorAll('.board-five input.column');
  var inputNums = [], inputRows = [], inputColumns = [];
  for (let i = 0; i < nums.length; i++) {
    inputNums.push(parseInt(nums[i].value));
    nums[i].classList.remove('highlight');
  }
  for (let i = 0; i < rows.length; i++) {
    inputRows.push(parseInt(rows[i].value));
  }
  for (let i = 0; i < columns.length; i++) {
    inputColumns.push(parseInt(columns[i].value));
  }

  var grid = new Grid(inputNums, inputRows, inputColumns);
  grid.solveGrid();
  grid.print(grid.result);
  var answers = grid.getResultIndices();

  for (let i = 0; i < answers.length; i++) {
    nums[answers[i]].classList.add('highlight')
  }
});

document.querySelector('.board-six button').addEventListener('click', function() {
  let nums = document.querySelectorAll('.board-six input.num');
  let rows = document.querySelectorAll('.board-six input.row');
  let columns = document.querySelectorAll('.board-six input.column');
  var inputNums = [], inputRows = [], inputColumns = [];
  for (let i = 0; i < nums.length; i++) {
    inputNums.push(parseInt(nums[i].value));
    nums[i].classList.remove('highlight');
  }
  for (let i = 0; i < rows.length; i++) {
    inputRows.push(parseInt(rows[i].value));
  }
  for (let i = 0; i < columns.length; i++) {
    inputColumns.push(parseInt(columns[i].value));
  }

  var grid = new Grid(inputNums, inputRows, inputColumns);
  grid.solveGrid();
  grid.print(grid.result);
  var answers = grid.getResultIndices();

  for (let i = 0; i < answers.length; i++) {
    nums[answers[i]].classList.add('highlight')
  }
});

document.querySelector('.board-seven button').addEventListener('click', function() {
  let nums = document.querySelectorAll('.board-seven input.num');
  let rows = document.querySelectorAll('.board-seven input.row');
  let columns = document.querySelectorAll('.board-seven input.column');
  var inputNums = [], inputRows = [], inputColumns = [];
  for (let i = 0; i < nums.length; i++) {
    inputNums.push(parseInt(nums[i].value));
    nums[i].classList.remove('highlight');
  }
  for (let i = 0; i < rows.length; i++) {
    inputRows.push(parseInt(rows[i].value));
  }
  for (let i = 0; i < columns.length; i++) {
    inputColumns.push(parseInt(columns[i].value));
  }

  var grid = new Grid(inputNums, inputRows, inputColumns);
  grid.solveGrid();
  grid.print(grid.result);
  var answers = grid.getResultIndices();

  for (let i = 0; i < answers.length; i++) {
    nums[answers[i]].classList.add('highlight')
  }
});

document.querySelector('.board-eight button').addEventListener('click', function() {
  let nums = document.querySelectorAll('.board-eight input.num');
  let rows = document.querySelectorAll('.board-eight input.row');
  let columns = document.querySelectorAll('.board-eight input.column');
  var inputNums = [], inputRows = [], inputColumns = [];
  for (let i = 0; i < nums.length; i++) {
    inputNums.push(parseInt(nums[i].value));
    nums[i].classList.remove('highlight');
  }
  for (let i = 0; i < rows.length; i++) {
    inputRows.push(parseInt(rows[i].value));
  }
  for (let i = 0; i < columns.length; i++) {
    inputColumns.push(parseInt(columns[i].value));
  }

  var grid = new Grid(inputNums, inputRows, inputColumns);
  grid.solveGrid();
  grid.print(grid.result);
  var answers = grid.getResultIndices();

  for (let i = 0; i < answers.length; i++) {
    nums[answers[i]].classList.add('highlight')
  }
});