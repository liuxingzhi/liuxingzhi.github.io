/**
 * TODO: Elastic ball
 * 实现一个固定在中心，会弹的小球
 */

let balls = []

function setup() {
    // put setup code here
    createCanvas(500, 500)
    background(0)
    for (let i = 0; i < 1; i++) {
        ballColor = color(random(255), random(255), random(255))
        balls.push(new Ball(width / 2, height / 2, 30, ballColor))
    }
    noStroke()
}

function draw() {
    // put drawing code here
    // 第二个参数,120,用来产生彗星效果
    background(0, 120)
    for (let i = 0; i < balls.length; i++) {
        balls[i].update()
        balls[i].render()
    }
}

function mousePressed() {
    for (let i = 0; i < balls.length; i++) {
        let d = dist(mouseX, mouseY, balls[i].pos.x, balls[i].pos.y)
        if (d < balls[i].size / 2) {
            balls[i].dragState = true
        }
    }
}

function mouseReleased() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].dragState = false
    }
}

function Ball(posX, posY, ballSize, ballColor) {
    this.pos = createVector(posX, posY)
    this.velocity = createVector(0, 0)
    this.color = ballColor
    this.size = ballSize
    this.dragState = false
    this.update = function () {
        // // collide with top
        if (this.pos.y <= this.size / 2) {
            this.color = color(random(255), random(255), random(255))
        }

        // collide with bottom
        if (this.pos.y >= height - this.size / 2) {
            this.color = color(random(255), random(255), random(255))
        }

        //collide with left wall
        if (this.pos.x <= this.size / 2) {
            this.color = color(random(255), random(255), random(255))
        }
        //
        //collide with right wall
        if (this.pos.x >= width - this.size / 2) {
            this.color = color(random(255), random(255), random(255))
        }

        if (this.dragState === true) {
            this.dragTo(mouseX, mouseY)
        } else {
            this.elasticTo(width / 2, height / 2)
        }

        this.pos.add(this.velocity)
    }

    this.render = function () {
        stroke(255)
        line(this.pos.x, this.pos.y, width / 2, height / 2)
        noStroke()
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.size)
    }


    this.dragTo = function (targetX, targetY) {
        let target = createVector(targetX, targetY)
        let force = p5.Vector.sub(target, this.pos)
        this.velocity = force.copy().mult(0.4)
        // this.pos = createVector(targetX,targetY)
    }

    this.elasticTo = function (targetX, targetY) {
        let target = createVector(targetX, targetY)
        let force = p5.Vector.sub(target,this.pos)
        force.mult(0.3)
        this.velocity.add(force)
        this.velocity.mult(0.95)
    }
}