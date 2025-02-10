const canvas = document.getElementById("mandelbrot");
const ctx = canvas.getContext("2d");

let scale = 3;
let offsetX = -0.5;
let offsetY = 0;
let maxIterations = 100;
let isDragging = false;
let lastX, lastY;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
}

function mapToMandelbrot(x, y) {
  return {
    re: ((x - canvas.width / 2) * scale) / canvas.width + offsetX,
    im: ((y - canvas.height / 2) * scale) / canvas.height + offsetY,
  };
}

function drawMandelbrot() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const data = new Uint32Array(imageData.data.buffer);

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const c = mapToMandelbrot(x, y);
      let zr = 0,
        zi = 0,
        iter = 0;
      let zr2 = 0,
        zi2 = 0;
      while (iter < maxIterations && zr2 + zi2 <= 4) {
        zi = 2 * zr * zi + c.im;
        zr = zr2 - zi2 + c.re;
        zr2 = zr * zr;
        zi2 = zi * zi;
        iter++;
      }
      const color = iter === maxIterations ? 0x000000ff : 0xffffffff;
      data[y * canvas.width + x] = color;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

canvas.addEventListener("mousedown", (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  offsetX -= ((e.clientX - lastX) * scale) / canvas.width;
  offsetY -= ((e.clientY - lastY) * scale) / canvas.height;
  lastX = e.clientX;
  lastY = e.clientY;
  requestAnimationFrame(drawMandelbrot);
});

canvas.addEventListener("mouseup", () => {
  isDragging = false;
});

canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
  scale *= zoomFactor;
  maxIterations = Math.min(
    1000,
    Math.max(50, Math.round(maxIterations * (1 / zoomFactor)))
  );
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const beforeZoom = mapToMandelbrot(mouseX, mouseY);
  scale *= zoomFactor;
  const afterZoom = mapToMandelbrot(mouseX, mouseY);
  offsetX += beforeZoom.re - afterZoom.re;
  offsetY += beforeZoom.im - afterZoom.im;
  requestAnimationFrame(drawMandelbrot);
});

window.addEventListener("resize", () => {
  resizeCanvas();
  requestAnimationFrame(drawMandelbrot);
});

resizeCanvas();
requestAnimationFrame(drawMandelbrot);
