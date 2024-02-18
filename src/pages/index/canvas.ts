import "./canvas.css"
//https://codepen.io/wiz_amit/pen/JjGRZjJ

let canvas: HTMLCanvasElement
let c: CanvasRenderingContext2D
let circleCount = 0
const mouse = { x: 0, y: 0 }
let maxRadius = 0
let didInit = false

export { initCanvas }

const crimson = "#ed143d22"
const purple = "#7552b322"

const Color = {
  vector: [crimson, purple],
  getRandom: () => {
    return Color.vector[Math.floor(Math.random() * Color.vector.length)]
  },
}

class Circle {
  r

  constructor(
    private r_min = randomNumber(maxRadius * 0.9, 10),
    private x = randomNumber(canvas.width, r_min),
    private y = randomNumber(canvas.height, r_min),
    private dx = randomNumber(1, -2, [0]),
    private dy = randomNumber(1, -1, [0]),
    private color = Color.getRandom()
  ) {
    this.draw()
    this.r = r_min
  }

  side() {
    return {
      right: this.x + this.r,
      left: this.x - this.r,
      bottom: this.y + this.r,
      top: this.y - this.r,
    }
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  run() {
    // detect collision
    if (this.side().right > canvas.width || this.side().left < 0) this.dx *= -1
    if (this.side().bottom > canvas.height || this.side().top < 0) this.dy *= -1

    // increase size
    if (
      Number(mouse.x != mouse.y) != 0 &&
      this.side().left - mouse.x < 50 &&
      mouse.x - this.side().right < 50 &&
      this.side().top - mouse.y < 50 &&
      mouse.y - this.side().bottom < 50 &&
      this.r < maxRadius
    )
      this.r += 3
    else if (this.r > this.r_min) this.r -= 1

    // change position
    this.x += this.dx
    this.y += this.dy

    this.draw()
  }
}

let circles: Circle[] = []

function initCanvas(cvs: HTMLCanvasElement) {
  if (didInit) return
  didInit = true
  circleCount = window.innerWidth / 18
  maxRadius = window.innerWidth / 6
  window.addEventListener("resize", resetCanvas)
  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })
  // setting up canvas
  canvas = cvs
  const ctx = canvas.getContext("2d")
  if (!ctx) return console.error("unable to get canvas 2d render context")
  c = ctx
  resetCanvas()
  animation()

  // adding circles
  for (let i = circleCount; i > 0; i--) {
    circles.push(new Circle())
  }
}

function animation() {
  // clear canvas
  c.clearRect(0, 0, canvas.width, canvas.height)

  // animation
  circles.forEach((circle) => circle.run())

  // callback
  requestAnimationFrame(animation)
}

// ## utility functions
function resetCanvas() {
  c.canvas.width = window.innerWidth
  c.canvas.height = window.innerHeight
}

function randomNumber(max = 1, min = 0, forbidden: number[] = []): number {
  let res: number

  do {
    res = Math.floor(min + Math.random() * (max - min))
  } while (forbidden.some((num) => num == res))

  return res
}
