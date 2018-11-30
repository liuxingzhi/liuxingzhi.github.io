/**
 * TODO: Exercise3
 * 定义一个Ball构造器函数. 该函数可以生成多个小球实例,
 * 每个小球实例都有位置,速度,色彩和尺寸等属性,以及update,render,触边反弹等行为.
 * 在生成实例时，可以指定小球实例的初始位置、色彩和大小.
 */

let balls = []

function setup() {
    // put setup code here
    createCanvas(500, 400)
    background(0)
    for (let i = 0; i < 10; i++) {
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

function Ball(posX, posY, ballSize, ballColor) {
    this.pos = createVector(posX, posY)
    this.velocity = p5.Vector.random2D()
    this.velocity.setMag((random(2, 8)))
    this.color = ballColor
    this.size = ballSize

    this.update = function () {
        this.pos.add(this.velocity)
        // // collide with top
        if (this.pos.y <= this.size / 2) {
            this.bounceOnEdge(createVector(0, 1))
            this.color = color(random(255), random(255), random(255))
        }

        // collide with bottom
        if (this.pos.y >= height - this.size / 2) {
            this.bounceOnEdge(createVector(0, -1))
            this.color = color(random(255), random(255), random(255))
        }

        //collide with left wall
        if (this.pos.x <= this.size / 2) {
            this.bounceOnEdge(createVector(1, 0))
            this.color = color(random(255), random(255), random(255))
        }
        //
        //collide with right wall
        if (this.pos.x >= width - this.size / 2) {
            this.bounceOnEdge(createVector(-1, 0))
            this.color = color(random(255), random(255), random(255))
        }
    }

    this.render = function () {
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.size)
    }

    this.bounceOnEdge = function (force) {
        let oldVelocity = this.velocity.copy()
        // for correct calculation,
        // we actually need the opposite direction of incoming velocity
        let angle = Math.PI - force.angleBetween(oldVelocity)
        console.log(angle)
        let magnitude = Math.cos(angle) * this.velocity.mag() * 2
        force.setMag(magnitude)
        this.velocity.add(force)
    }
}