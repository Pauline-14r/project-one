const pointer = document.querySelector('.main__pointer')
const item_03 = document.querySelector('.cards__item-03')
const item_04 = document.querySelector('.cards__item-04')
const item_05 = document.querySelector('.cards__item-05')
const item_06 = document.querySelector('.cards__item-06')

pointer.addEventListener ('click', function () {
	pointer.classList.toggle('main__pointer--unfold');
	const isUnfolded = pointer.classList.contains('main__pointer--unfold');
	
	if (window.innerWidth >= 800) {
		if (isUnfolded) {
		item_04.classList.add('cards__item-04--unfold'),
		item_05.classList.add('cards__item-05--unfold'),
		item_06.classList.add('cards__item-06--unfold')
		} else {
			item_04.classList.remove('cards__item-04--unfold'),
			item_05.classList.remove('cards__item-05--unfold'),
			item_06.classList.remove('cards__item-06--unfold')
		}
	}
	
	if (window.innerWidth < 800 && window.innerWidth >= 600) {
		if (isUnfolded) {
			item_03.classList.add('cards__item-03--unfold'),
			item_04.classList.add('cards__item-04--unfold'),
			item_05.classList.add('cards__item-05--unfold'),
			item_06.classList.add('cards__item-06--unfold')
		} else {
			item_03.classList.remove('cards__item-03--unfold'),
			item_04.classList.remove('cards__item-04--unfold'),
			item_05.classList.remove('cards__item-05--unfold'),
			item_06.classList.remove('cards__item-06--unfold')
		}
	}
})