export default class ZoomFunction {

	static ZOOM_SALT = .2;

	constructor(player, options) {
		this.state = {
			zoom: 1,
			rotate: 0,
			moveX: 0,
			moveY: 0,
			moveCount: 0,
			saltMoveX: 70,
			saltMoveY: 70
		}
		this.player = player.el();
		this.options = options;
		player.on('playing', () => {
			this.#updateSalt();
		});
	}

	#updateSalt() {
		this.state.saltMoveX = (this.player.offsetWidth * ZoomFunction.ZOOM_SALT) / 2;
		this.state.saltMoveY = (this.player.offsetHeight * ZoomFunction.ZOOM_SALT) / 2;
	}

	zoomIn() {
		if (this.state.zoom >= 9.8) return;
		this.state.moveCount++;
		this.state.zoom += ZoomFunction.ZOOM_SALT;
		this.options.plugin.zoom(this.state.zoom);
		this.options.plugin.callback(this.state);
	}

	zoomOut() {
		if (this.state.zoom <= 1) return;
		this.state.moveCount--;
		this.state.zoom -= ZoomFunction.ZOOM_SALT;
		this.options.plugin.zoom(this.state.zoom);
		this.options.plugin.move(0, 0);
	}

	moveUp() {
		const next = this.state.moveY + this.state.saltMoveY;
		const available = this.state.moveCount * this.state.saltMoveY;
		if (available < next) return;
		this.state.moveY += this.state.saltMoveY;
		this.options.plugin.move(this.state.moveX, this.state.moveY);
	}

	moveDown() {
		const next = this.state.moveY - this.state.saltMoveY;
		const available = this.state.moveCount * this.state.saltMoveY;
		if (-available > next) return;
		this.state.moveY -= this.state.saltMoveY;
		this.options.plugin.move(this.state.moveX, this.state.moveY);
	}

	reset() {
		this.state.zoom = 1;
		this.state.moveX = 0;
		this.state.moveY = 0;
		this.state.rotate = 0;
		this.state.moveCount = 0;
		this.options.plugin.zoom(1);
		this.options.plugin.rotate(0);
		this.options.plugin.move(0, 0);
	}

	moveLeft() {
		const next = this.state.moveX + this.state.saltMoveX;
		const available = this.state.moveCount * this.state.saltMoveX;
		if (available < next) return;
		this.state.moveX += this.state.saltMoveX;
		this.options.plugin.move(this.state.moveX, this.state.moveY);
	}

	moveRight() {
		const next = this.state.moveX - this.state.saltMoveX;
		const available = this.state.moveCount * this.state.saltMoveX;
		if (-available > next) return;
		this.state.moveX -= this.state.saltMoveX;
		this.options.plugin.move(this.state.moveX, this.state.moveY);
	}

	rotateLeft() {
		this.state.rotate -= 180;
		this.options.plugin.rotate(this.state.rotate);
	}

	rotateRight() {
		this.state.rotate += 180;
		this.options.plugin.rotate(this.state.rotate);
	}
}
