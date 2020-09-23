import Compositor from './models/Compositor'
import { loaderMarioSprite, loaderBackgroundSprites } from './libs/sprites'
import { createBackgroundLayer } from './libs/createLayers'
import { loadLevel } from './libs/loaders'

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

function createSpriteLayer(sprite, pos) {
	return function drawSpriteLayer(context) {
		for (let i = 0; i < 20; ++i) {
			sprite.draw('idle', context, pos.x + i * 16, pos.y)
		}

	}
}

Promise.all([
	loaderMarioSprite(),
	loaderBackgroundSprites(),
	loadLevel('1-1'),
]).then(([marioSprite, backgroundSprites, level]) => {
	const comp = new Compositor()
	const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites)
	comp.layers.push(backgroundLayer)

	const pos = {
		x: 0,
		y: 0,
	}

	const spriteLayer = createSpriteLayer(marioSprite, pos)
	comp.layers.push(spriteLayer)

	function update() {
		comp.draw(context)
		pos.x += 2;
		pos.y += 2;
		requestAnimationFrame(update)
	}
	update()
})
