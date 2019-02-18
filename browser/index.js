let zr = zrender.init(document.getElementById('canvas'))

const lineDash = [12, 11.8]
const points = [
  [82, 247],
  [253, 126],
  [464, 354],
  [744, 154],
  [970, 367],
  [1080, 260]
]


let line1 = new zrender.Polyline({
  style: {
    stroke: '#e9f3fb',
    lineWidth: 5.5,
    lineDash
  },
  shape: {
    smooth: 0.55,
    points
  }
})

let line2 = new zrender.Polyline({
  style: {
    stroke: '#25B0D8',
    lineWidth: 5.5,
    lineDash
  },
  shape: {
    smooth: 0.55,
    points
  }
})



var h = zr.getHeight(),
  w = zr.getWidth(),
  line = new zrender.BezierCurve({
    shape: {
      x1: 0,
      y1: h,
      cpx1: w / 2,
      cpy1: h,
      cpx2: w / 2,
      cpy2: 0,
      x2: w,
      y2: 0
    },
    style: {
      stroke: '#25B0D8',
      lineWidth: 5.5,
      lineDash
    }
  })

let lineAnimator = line.animate('shape', false)
  .when(0, {
    percent: 0
  })
  .when(5000, {
    percent: 1
  })
  .start()

zr.add(line1)
zr.add(line2)
zr.add(line)


document.getElementById('btn1').addEventListener('click', function() {
  lineAnimator.pause()
})
document.getElementById('btn2').addEventListener('click', function() {
  lineAnimator.resume()
})