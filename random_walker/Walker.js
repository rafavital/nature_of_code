class Walker {
    constructor(pos = createVector(0, 0), vel = createVector(1, 1)) {
        this.pos = pos
        this.velocity = vel
        this.prev = createVector()
    }

    update() {
        this.prev.set(this.pos)
        this.pos.add(this.velocity)
    }

    draw() {
        stroke(255)
        strokeWeight(2)
        //point(this.pos.x, this.pos.y)
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
    }
}