import graphic from '../../images/asteroid.png'


class Asteroid {
    constructor(ctx, maxX, maxY) {
        this.ctx = ctx
        
        this.maxX = maxX
        this.maxY = maxY

        this.x = Math.random() * maxX
        this.y = Math.random() * maxY

        this.rotation = 0

        this.deltaX = 1.5 * (Math.random() - 0.5)
        this.deltaY = 1.5 * (Math.random() - 0.5)

        this.deltaRotation = 5 * (Math.random() - 0.5)

        this.scale = 0.1 + Math.random() * 0.25

        this.image = new Image();
        this.image.src = graphic
        this.imageWidth = this.image.width * this.scale
        this.imageHeight = this.image.height * this.scale
    }

    draw() {
        this.ctx.translate(this.x, this.y)
        this.ctx.rotate(this.rotation * Math.PI / 180);

        this.ctx.drawImage(this.image, -this.imageWidth / 2, -this.imageHeight / 2, this.imageWidth, this.imageHeight);

        this.ctx.translate(-this.x, -this.y)
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    tick() {
        this.x += this.deltaX
        this.y += this.deltaY
        this.rotation += this.deltaRotation

        if (this.x >= this.maxX || this.x <= 0) {
            this.deltaX = -this.deltaX
        }

        if (this.y >= this.maxY || this.y <= 0) {
            this.deltaY = -this.deltaY
        }
    }
}

export default Asteroid