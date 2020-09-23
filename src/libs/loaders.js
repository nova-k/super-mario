export function loadImage(url) {
	return new Promise(result => {
		const image = new Image()
		image.addEventListener('load', () => {
			result(image)
		});
		image.src = url
	});
}

export async function loadLevel(name) {
	return await fetch(`./src/config/json/${name}.json`)
		.then(r => r.json())
}

