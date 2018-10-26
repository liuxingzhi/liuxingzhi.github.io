/**
 * TODO 创建一个200 X 200的白色画布,在画布中心绘制一个黑色数字0. 每隔1/60秒,这个数字都会增加1. 每隔3秒,数字的颜色就会随机变化一次
 */
var num = 0

function setup() {
    // put setup code here
    createCanvas(200, 200)
    textSize(64)
    textAlign(CENTER)
    background(255)
}

function draw() {
    // put drawing code here
    background(255)
    if(num === 0){ // 初始化为black
        fill(0)
        text(num,100,100)
        num += 1
        return
    }
    if(num % 180 === 0){// 每隔3秒，数字的颜色就会随机变化一次
        var random_color = color(random(255),random(255),random(255))
        fill(random_color)
    }
    text(num,100,100)
    num += 1
}