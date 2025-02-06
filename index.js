const canvas = document.getElementById("mandelbrotCanvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Параметры для отрисовки
const maxIterations = 100; // Максимальное количество итераций
const zoom = 200; // Масштаб
const offsetX = -2.5; // Смещение по X
const offsetY = -1.5; // Смещение по Y

// Функция для проверки принадлежности точки к множеству Мандельброта
function mandelbrot(c) {
  let z = { x: 0, y: 0 };
  let n = 0;

  while (n < maxIterations) {
    const xTemp = z.x * z.x - z.y * z.y + c.x;
    z.y = 2 * z.x * z.y + c.y;
    z.x = xTemp;

    if (z.x * z.x + z.y * z.y > 4) {
      return n;
    }

    n++;
  }

  return maxIterations;
}

// Отрисовка множества Мандельброта
function drawMandelbrot() {
  for (let px = 0; px < width; px++) {
    for (let py = 0; py < height; py++) {
      // Преобразование координат пикселя в координаты на комплексной плоскости
      const x0 = px / zoom + offsetX;
      const y0 = py / zoom + offsetY;

      const m = mandelbrot({ x: x0, y: y0 });

      // Цвет в зависимости от количества итераций
      const color =
        m === maxIterations ? 0 : 255 - Math.floor((m / maxIterations) * 255);
      ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
      ctx.fillRect(px, py, 1, 1);
    }
  }
}

drawMandelbrot();
