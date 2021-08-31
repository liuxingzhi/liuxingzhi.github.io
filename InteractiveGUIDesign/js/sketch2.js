/**
 * TODO: Exercise2
 * 创建一个长500,宽400的黑色画布. 若用户鼠标点击画布,可在点击位置绘制一个颜色随机,半径为45且无描边的圆.
 * 若用户按住鼠标拖拽,则以半径为30的圆形笔刷擦除掉之前绘画的痕迹.(提示：mouseClicked()；mouseDragged())
 */
function setup() {
    // put setup code here
    createCanvas(500, 400)
    background(0)
}

function draw() {
    // put drawing code here
}

function mouseClicked() {
    let random_color = color(random(255), random(255), random(255))
    noStroke()
    fill(random_color)
    ellipse(mouseX, mouseY, 45, 45)
}

function mouseDragged() {
    let black = color(0, 0, 0)
    fill(black)
    //fill in the same color as background to produce erasing effect
    ellipse(mouseX, mouseY, 30, 30)
}