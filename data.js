var _ = null
var numbers = [[
	8,_,_,  7,6,1,  _,3,4,
	1,9,_,  _,_,_,  _,_,_,
	_,_,6,  _,5,_,  _,_,_,

	6,4,_,  2,_,_,  3,8,_,
	7,2,_,  1,_,3,  _,4,5,
	_,8,5,  _,_,6,  _,9,1,

	_,_,_,  _,3,_,  4,_,_,
	_,_,_,  _,_,_,  _,2,3,
	5,3,_,  9,2,7,  _,_,8
], [
	_,8,_,  9,_,_,  _,_,6,
	_,7,_,  2,_,_,  4,_,_,
	4,_,6,  _,3,_,  1,_,2,

	_,2,_,  5,9,6,  _,_,_,
	9,4,_,  3,_,2,  _,5,7,
	_,_,_,  4,7,1,  _,3,_,

	7,_,4,  _,5,_,  3,_,8,
	_,_,8,  _,_,3,  _,6,_,
	6,_,_,  _,_,7,  _,1,_
], [
	7,2,_,  3,5,_,  9,4,_,
	1,_,_,  _,_,_,  6,_,_,
	_,5,_,  1,6,_,  _,2,_,

	_,_,_,  _,1,_,  _,5,_,
	_,8,4,  _,9,_,  3,1,_,
	_,1,_,  _,7,_,  _,_,_,

	_,3,_,  _,4,6,  _,7,_,
	_,_,8,  _,_,_,  _,_,4,
	_,6,5,  _,8,7,  _,3,2
], [
	2,_,_,  3,_,_,  5,_,4,
	_,_,_,  7,9,1,  _,8,3,
	9,_,_,  _,5,4,  _,7,_,

	5,_,9,  _,4,_,  3,_,_,
	_,_,_,  _,7,_,  _,_,_,
	_,_,2,  _,6,_,  4,_,8,

	_,3,_,  8,2,_,  _,_,1,
	1,9,_,  6,3,7,  _,_,_,
	8,_,6,  _,_,9,  _,_,5
],
[4,_,2,9,7,5,1,8,_,_,5,_,_,_,3,_,_,_,_,_,1,_,_,_,_,5,_,_,_,_,8,_,7,6,4,_,_,2,7,5,_,4,9,3,_,_,4,6,3,_,1,_,_,_,_,8,_,_,_,_,5,_,_,_,_,_,6,_,_,_,7,_,_,7,5,4,3,9,2,_,8],
[_,5,_,1,7,8,9,6,_,_,_,9,6,_,_,_,_,3,2,7,_,_,9,4,_,5,_,_,_,_,_,_,_,3,_,_,5,_,8,2,_,3,1,_,6,_,_,4,_,_,_,_,_,_,_,4,_,9,5,_,_,3,8,9,_,_,_,_,2,4,_,_,_,8,2,4,3,7,_,9,_],
[_,_,4,_,9,_,7,2,_,_,_,_,_,3,2,8,_,_,_,2,_,4,_,_,3,1,_,3,_,_,_,1,4,2,_,_,5,8,_,_,_,_,_,9,3,_,_,2,9,5,_,_,_,8,_,4,3,_,_,6,_,8,_,_,_,8,2,4,_,_,_,_,_,7,6,_,8,_,9,_,_],
[5,_,_,_,_,_,_,_,4,_,4,_,5,6,7,2,8,1,_,7,8,_,4,_,_,3,_,2,_,_,_,_,9,8,_,6,_,3,_,_,_,_,_,1,_,7,_,6,4,_,_,_,_,5,_,9,_,_,5,_,4,2,_,3,6,2,1,7,4,_,5,_,8,_,_,_,_,_,_,_,7],
[5,_,_,7,_,8,4,2,_,2,_,_,_,_,_,_,7,6,_,_,_,_,_,4,5,9,3,1,_,_,_,2,9,_,8,_,3,_,_,_,4,_,_,_,9,_,8,_,5,3,_,_,_,7,6,7,1,4,_,_,_,_,_,4,2,_,_,_,_,_,_,5,_,9,5,1,_,3,_,_,2],
[_,5,_,_,4,8,_,3,_,_,_,_,2,_,5,_,6,_,1,_,_,6,_,_,_,_,9,9,7,_,1,6,_,8,_,_,6,4,_,_,9,_,_,2,5,_,_,1,_,8,4,_,7,6,4,_,_,_,_,1,_,_,2,_,9,_,4,_,6,_,_,_,_,1,_,3,7,_,_,8,_],
[3,_,1,_,6,_,_,_,2,_,_,_,2,_,7,5,_,_,2,7,_,_,_,8,_,9,_,7,2,_,_,5,_,_,_,_,6,9,_,_,8,_,_,3,7,_,_,_,_,9,_,_,5,8,_,3,_,8,_,_,_,4,6,_,_,6,3,_,1],
[2,_,7,9,1,_,5,_,_,_,_,6,_,_,_,2,3,1,_,8,_,_,2,_,_,_,6,5,_,_,2,6,8,_,_,_,_,_,8,3,_,1,4,_,_,_,_,_,4,9,5,_,_,8,8,_,_,_,5,_,_,4,_,3,6,5,_,_,_,8,_,_,_,_,1,_,3,2,7,_,5],
[_,3,_,6,1,_,_,7,_,_,_,1,8,5,_,9,_,2,2,_,_,_,_,4,_,5,1,_,_,4,_,_,9,3,8,_,_,_,3,_,_,_,5,_,_,_,2,6,7,_,_,1,_,_,6,1,_,9,_,_,_,_,5,9,_,2,_,4,6,7,_,_,_,4,_,_,7,8,_,6,_],
[_,6,5,_,_,_,3,_,1,4,1,_,_,_,_,_,_,_,9,_,_,3,6,1,_,2,4,_,9,_,_,1,_,_,_,3,7,4,1,_,_,_,6,5,8,5,_,_,_,4,_,_,9,_,3,5,_,9,8,7,_,_,6,_,_,_,_,_,_,_,8,5,8,_,6,_,_,_,9,3,_],
[_,9,3,_,_,_,_,_,_,4,8,6,_,_,3,_,2,_,_,_,_,1,9,_,_,8,_,5,1,_,4,_,_,8,6,_,7,_,_,6,2,9,_,_,5,_,4,9,_,_,5,_,7,3,_,6,_,_,4,8,_,_,_,_,5,_,7,_,_,4,3,8,_,_,_,_,_,_,7,9,_],
[_,2,_,9,_,_,3,_,_,_,_,_,_,1,5,_,2,_,7,_,_,_,_,4,6,1,9,1,5,_,_,_,6,9,7,8,_,_,_,_,5,_,_,_,_,6,8,3,7,_,_,_,5,1,2,9,8,1,_,_,_,_,4,_,6,_,5,4,_,_,_,_,_,_,4,_,_,2,_,8,_],
[6,1,_,_,4,_,_,3,2,2,_,_,9,1,7,_,6,8,7,_,_,_,6,_,4,_,_,_,_,_,_,_,8,_,_,_,9,_,_,4,7,1,_,_,3,_,_,_,5,_,_,_,_,_,_,_,4,_,8,_,_,_,7,1,2,_,6,5,9,_,_,4,8,3,_,_,2,_,_,1,5],
[_,8,7,_,_,1,_,_,_,2,_,1,4,_,_,_,3,8,_,_,_,_,7,8,_,1,4,_,_,_,_,6,_,8,7,5,7,_,_,8,_,2,_,_,1,8,1,3,_,5,_,_,_,_,5,2,_,3,8,_,_,_,_,3,9,_,_,_,4,2,_,7,_,_,_,9,_,_,4,8,_]
]

/*
 * print the current sudoku data at page http://view.websudoku.com/
 */
function printCurrentData() {
	var puzzle_grid = document.querySelector('#puzzle_grid')
	var cells = puzzle_grid.querySelectorAll('input')
	var ret = []
	for (var i = 0, len = cells.length; i < len; i++) {
		ret.push(cells[i].value || '_')
	}
	console.log('[' + ret.join(',') + ']')
}