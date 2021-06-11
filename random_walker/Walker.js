class Walker {
    constructor(x, y, vel = createVector(1, 1)) {
        this.pos = createVector(x, y)
        this.velocity = vel
    }

    update() {
        this.pos.x += this.velocity.x
        this.pos.y += this.velocity.y
    }

    draw() {
        stroke(255)
        strokeWeight(2)
        point(this.pos.x, this.pos.y)
    }
}