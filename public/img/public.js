javascript: (function () {
	var d = document,
		e = d.getElementsByClassName('x1y1aw1k xn6708d xwib8y2 x1ye3gou');
	var datas = [];
	[...e].forEach((dom) => {
		const target = [dom.children][0];
		const data = {};

		const name = [
			...dom.getElementsByClassName(
				'x193iq5w xeuugli x13faqbe x1vvkbs xlh3980 xvmahel x1n0sxbx x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1nxh6w3 x1sibtaa x1s688f xzsf02u'
			),
		][0]?.innerText;

		const time = [
			...dom.getElementsByClassName(
				'x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g xt0b8zv'
			),
		][1]?.innerText;

		const comment = [...dom.getElementsByClassName('x11i5rnm xat24cr x1mh8g0r x1vvkbs xdj266r')][0]?.children[0]
			?.innerText;

		datas.push({ name, time, comment });
	});

	const output = datas.filter((e) => e.name !== undefined && e.time !== undefined && e.comment !== undefined);

	console.log(JSON.stringify(output));
})();

javascript: (function () {
	[...document.getElementsByClassName('xdj266r xexx8yu x4uap5 x18d9i69 x46jau6')].forEach((e) => {
		e.remove();
	});
})();

javascript: (function () {
	var d = document;
	clearInterval(window.kkk);
	window.kkk = setInterval(() => {
		var dom = d.getElementsByClassName('x1y1aw1k xn6708d xwib8y2 x1ye3gou');
		var len = [...dom].length;
		const t = [
			...document.getElementsByClassName(
				'x1i10hfl xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1a2a7pz x6s0dn4 xi81zsa x1iyjqo2 xs83m0k xsyo7zv xt0b8zv'
			),
		][0];
		if (t) {
			t.click?.();
			[...document.getElementsByClassName('xdj266r xexx8yu x4uap5 x18d9i69 x46jau6')].forEach((e) => {
				e.remove();
			});
			console.log(len);
		}
	}, [10000]);
})();
