let canv_F = document.getElementById("canvasLine");
canv_F.width = 1415;
let ctx_F = canv_F.getContext('2d');
canv_F.height = 776;

let x1_F = document.getElementById("xPoint1");
let y1_F = document.getElementById("yPoint1");

let x2_F = document.getElementById("xPoint2");
let y2_F = document.getElementById("yPoint2");

let x3_F = document.getElementById("xPoint3");
let y3_F = document.getElementById("yPoint3");

let x4_F = document.getElementById("xPoint4");
let y4_F = document.getElementById("yPoint4");

let x5_F = document.getElementById("xPoint5");
let y5_F = document.getElementById("yPoint5");

let x6_F = document.getElementById("xPoint6");
let y6_F = document.getElementById("yPoint6");

let x_i;
let y_i;

function draw_line(ctx_F, x1_F, y1_F, x2_F, y2_F, x3_F, y3_F, x4_F, y4_F, x5_F, y5_F, x6_F, y6_F) {

    ctx_F.clearRect(0, 0, canv_F.width, canv_F.height);

    ctx_F.beginPath();
    ctx_F.strokeStyle = "blue";
    if (Number(x1_F.value) >=0 && Number(y1_F.value) >= 0) {
        ctx_F.moveTo(Number(x1_F.value) + 10, 776 - Number(y1_F.value) - 10);
        ctx_F.lineTo(Number(x1_F.value) - 10, 776 - Number(y1_F.value) + 10);
        ctx_F.moveTo(Number(x1_F.value) + 10, 776 - Number(y1_F.value) + 10);
        ctx_F.lineTo(Number(x1_F.value) - 10, 776 - Number(y1_F.value) - 10);
        if (Number(x2_F.value) >= 0 && Number(y2_F.value) >= 0) {
            ctx_F.moveTo(Number(x2_F.value)+10, 776-Number(y2_F.value)-10);
            ctx_F.lineTo(Number(x2_F.value)-10, 776-Number(y2_F.value)+10);
            ctx_F.moveTo(Number(x2_F.value)+10, 776-Number(y2_F.value)+10);
            ctx_F.lineTo(Number(x2_F.value)-10, 776-Number(y2_F.value)-10);
            if (Number(x3_F.value) >= 0 && Number(y3_F.value) >= 0) {
                ctx_F.moveTo(Number(x3_F.value)+10, 776-Number(y3_F.value)-10);
                ctx_F.lineTo(Number(x3_F.value)-10, 776-Number(y3_F.value)+10);
                ctx_F.moveTo(Number(x3_F.value)+10, 776-Number(y3_F.value)+10);
                ctx_F.lineTo(Number(x3_F.value)-10, 776-Number(y3_F.value)-10);
                if (Number(x4_F.value) >= 0 && Number(y4_F.value) >= 0) {
                    ctx_F.moveTo(Number(x4_F.value)+10, 776-Number(y4_F.value)-10);
                    ctx_F.lineTo(Number(x4_F.value)-10, 776-Number(y4_F.value)+10);
                    ctx_F.moveTo(Number(x4_F.value)+10, 776-Number(y4_F.value)+10);
                    ctx_F.lineTo(Number(x4_F.value)-10, 776-Number(y4_F.value)-10);
                    if (Number(x5_F.value) >= 0 && Number(y5_F.value) >= 0) {
                        ctx_F.moveTo(Number(x5_F.value)+10, 776-Number(y5_F.value)-10);
                        ctx_F.lineTo(Number(x5_F.value)-10, 776-Number(y5_F.value)+10);
                        ctx_F.moveTo(Number(x5_F.value)+10, 776-Number(y5_F.value)+10);
                        ctx_F.lineTo(Number(x5_F.value)-10, 776-Number(y5_F.value)-10);
                        if (Number(x6_F.value) >= 0 && Number(y6_F.value) >= 0) {
                            ctx_F.moveTo(Number(x6_F.value)+10, 776-Number(y6_F.value)-10);
                            ctx_F.lineTo(Number(x6_F.value)-10, 776-Number(y6_F.value)+10);
                            ctx_F.moveTo(Number(x6_F.value)+10, 776-Number(y6_F.value)+10);
                            ctx_F.lineTo(Number(x6_F.value)-10, 776-Number(y6_F.value)-10);
                        }
                    }
                }
            }
        }
    }
    ctx_F.stroke();
    ctx_F.closePath();

    ctx_F.beginPath();
    ctx_F.strokeStyle = "black";
    if (Number(x1_F.value) >= 0 && Number(y1_F.value) >= 0) {
        ctx_F.moveTo(Number(x1_F.value), 776 - Number(y1_F.value));
        if (Number(x2_F.value) >= 0 && Number(y2_F.value) >= 0) {
            ctx_F.lineTo(Number(x2_F.value), 776 - Number(y2_F.value));
            if (Number(x3_F.value) >= 0 && Number(y3_F.value) >= 0) {
                ctx_F.lineTo(Number(x3_F.value), 776 - Number(y3_F.value));
                if (Number(x4_F.value) >= 0 && Number(y4_F.value) >= 0) {
                    ctx_F.lineTo(Number(x4_F.value), 776 - Number(y4_F.value));
                    if (Number(x5_F.value) >= 0 && Number(y5_F.value) >= 0) {
                        ctx_F.lineTo(Number(x5_F.value), 776 - Number(y5_F.value));
                        if (Number(x6_F.value) >= 0 && Number(y6_F.value) >= 0) {
                            ctx_F.lineTo(Number(x6_F.value), 776 - Number(y6_F.value));
                        }
                    }
                }
            }
        }
    }
    ctx_F.stroke();
    ctx_F.closePath();


}

function BuildSpline(x, y) {

    const n = x.length;
    for (let i = 0; i<n; i++){
        splines[i].x = x[i];
        splines[i].a = y[i];
    }

    splines[0].c = splines[n-1].c = 0;
    // Решение СЛАУ относительно коэффициентов сплайнов c[i] методом прогонки для трехдиагональных матриц
    // Вычисление прогоночных коэффициентов - прямой ход метода прогонки
    let alpha = new Array(n - 1).fill(0);
    let beta  = new Array(n - 1).fill(0);
    for (let i = 1; i < n - 1; ++i) {
        let hi  = x[i] - x[i - 1];
        let hi1 = x[i + 1] - x[i];
        let A = hi;
        let C = 2.0 * (hi + hi1);
        let B = hi1;
        let F = 3.0 * ((y[i + 1] - y[i]) / hi1 - (y[i] - y[i - 1]) / hi);
        let z = (A * alpha[i - 1] + C);
        alpha[i] = -B / z;
        beta[i] = (F - A * beta[i - 1]) / z;
    }
    // Нахождение решения - обратный ход метода прогонки
    for (let i = n - 2; i > 0; --i) {
        splines[i].c = alpha[i] * splines[i + 1].c + beta[i];
    }
    // По известным коэффициентам c[i] находим значения b[i] и d[i]
    for (let i = n - 1; i > 0; --i){
        let hi = x[i] - x[i - 1];
        splines[i].d = (splines[i].c - splines[i - 1].c) / hi;
        splines[i].b = hi * (2.0 * splines[i].c + splines[i - 1].c) / 6.0 + (y[i] - y[i - 1]) / hi;
    }
}

function Interpolate(x) {
    if (splines == null)
    {
        return NaN; // Если сплайны ещё не построены - возвращаем NaN
    }

    const n = splines.length;
    let s = new Array(X.length).fill({a:null,b:null,c:null,d:null,x:null});

    if (x <= splines[0].x) // Если x меньше точки сетки x[0] - пользуемся первым эл-тов массива
    {
        s = splines[0];
    }
    else if (x >= splines[n - 1].x) // Если x больше точки сетки x[n - 1] - пользуемся последним эл-том массива
    {
        s = splines[n - 1];

    }

    else // Иначе x лежит между граничными точками сетки - производим бинарный поиск нужного эл-та массива
    {
        let i = 0;
        let j = n - 1;
        while (i + 1 < j)
        {
            let k = Math.round(i + (j - i)/ 2);
            if (x <= splines[k].x)
            {
                j = k;
            }
            else
            {
                i = k;
            }
        }
        s = splines[j];
    }

    let dx = x - s.x;
    // Вычисляем значение сплайна в заданной точке по схеме Горнера (в принципе, "умный" компилятор применил бы схему Горнера сам, но ведь не все так умны, как кажутся)
    return s.a + (s.b + (s.c / 2.0 + s.d * dx / 6.0) * dx) * dx;
}
'use strict';
let X = [];
let Y = [];

let splines = [];
document.getElementById('submit').onclick = function() {

    X = [Number(x1_F.value), Number(x2_F.value), Number(x3_F.value), Number(x4_F.value), Number(x5_F.value), Number(x6_F.value)];
    Y = [Number(y1_F.value), Number(y2_F.value), Number(y3_F.value), Number(y4_F.value), Number(y5_F.value), Number(y6_F.value)];
    splines = [];

    for (let i =0; i < X.length; i++){
        splines.push({a:null,b:null,c:null,d:null,x:null});
    }
    BuildSpline(X,Y);

    ctx_F.beginPath();
    ctx_F.strokeStyle = "red";
    ctx_F.moveTo(X[0], 776 - Y[0]);
    for (x_i=X[0]; x_i<=X[5]; x_i+=1) {

        y_i = Interpolate(x_i);
        ctx_F.lineTo(x_i, 776 - y_i);
    }
    ctx_F.stroke();
    ctx_F.closePath();

};
