function View(id) {
	var el = this.el = document.getElementById(id || 'sudoku')
	el.addEventListener('keydown', function (e) {
		var key = e.keyCode
		var target = e.target
		if (target.nodeName !== 'INPUT' ||
			key === 8 || key === 46) {
			return
		}
		if (target.value) {
			e.preventDefault()
		}
		if (key < 48|| key > 57) {
			e.preventDefault()
		}
	})
	el.addEventListener('paste', function (e) {
		e.preventDefault()
	})
	el.addEventListener('change', function (e) {
		var target = e.target
		if (target.nodeName === 'INPUT') {
			if (target.value) {
				target.classList.remove('empty')
				target.setAttribute('num', target.value)
			} else {
				target.classList.add('empty')
			}
		}
	})
}

View.prototype.show = function (data) {
	this.el.innerHTML = this.render(data)
}

View.prototype.render = function (data) {
	var html = ''
	var row
	var col
	for (var i = 0; i < 81; i++) {
		row = Math.floor(i / 9)
		col = i % 9
		html += (
			'<span class="cell row-' + row + ' col-' + col + ' num-' + data[i] + '">' +
				(typeof data[i] === 'number' ? data[i] :
					'<input class="val empty" data-index="' + i + '" value="">'
				) +
			'</span>'
		)
	}
	return html
}