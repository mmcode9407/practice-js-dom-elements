console.log('DOM');

const linkList = document.querySelectorAll('[data-url]');

linkList.forEach(function (item) {
	const hrefValue = item.dataset.url;
	if (!item.hasAttribute('href')) {
		item.setAttribute('href', hrefValue);
	}
});
