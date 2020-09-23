import SpriteSheet from '../models/SpriteSheet'
import { loadImage } from './loaders'

export function loaderMarioSprite() {
	return loadImage('./src/assets/images/charecter.gif')
		.then(image => {
			const sprites = new SpriteSheet(image, 16, 16)
			sprites.define('idle', 276, 44, 16, 16)
			return sprites
		})
}

export function loaderBackgroundSprites() {
	return loadImage('./src/assets/images/tileset.png')
		.then(image => {
			const sprites = new SpriteSheet(image, 16, 16)
			sprites.defineTile('ground', 0, 0)
			sprites.defineTile('sky', 3, 23)
			return sprites
		})
}