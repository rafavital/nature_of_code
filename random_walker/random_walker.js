class RandomWalker {
    constructor()
    {
        this.x = random(width)
        this.y = random(height)
        
        this.r = random (255)
        this.g = random (255)
        this.b = random (255)
    }

    walk () {
        let r = floor (random(4))

        switch (r) {
            case 0:
            this.x ++;
            break;

            case 1:
            this.x--;
            break;

            case 2:
            this.y++      
            break;
            
            case 3:
            this.y--;
            break;
        }
    }

    draw () {
        let pixel_id = (this.x + this.y * width) * 4

        pixels[pixel_id] += this.r
        pixels[pixel_id + 1] += this.g
        pixels[pixel_id + 2] += this.b
        pixels[pixel_id + 3] = 255

        //stroke (255)
        //point(this.x, this.y)
    }
}