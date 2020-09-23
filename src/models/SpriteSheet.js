export default class SpriteSheet {
	constructor(image, width, hight) {
		this.image = image
		this.width = width
		this.hight = hight
		this.tiles = new Map()
	}

	define(name, x, y, width, hight) {
		const buffer = document.createElement('canvas')
		buffer.width = width
		buffer.hight = hight
		buffer
			.getContext('2d')
			.drawImage(
				this.image,
				x,
				y,
				width,
				hight,
				0,
				0,
				width,
				hight)

		this.tiles.set(name, buffer)
	}

	defineTile(name, x, y) {
		this.define(name, x * this.width, y * this.hight, this.width, this.hight)
	}

	draw(name, context, x, y) {
		const buffer = this.tiles.get(name)
		context.drawImage(buffer, x, y)
	}

	drawTile(name, context, x, y) {
		this.draw(name, context, x * this.width, y * this.hight)
	}
}