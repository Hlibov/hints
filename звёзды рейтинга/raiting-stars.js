// raiting stars  init
function initRaitingStars() {
	let raitingBlock = document.querySelector('.rating-block'),
		ratingBlockFullHolder = document.querySelector('.rating-block__full-holder'),
		width = +raitingBlock.dataset.raiting;

	ratingBlockFullHolder.style.width = width * 100 / 5 + "%";
}