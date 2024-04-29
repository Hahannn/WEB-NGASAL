var flag = 1;

function f1() {
    alert("aww tysm ily");
}

function f() {
    var Bn = document.getElementById("Bn");

    if (flag == 1) {
        Bn.style.top = calculateResponsiveValue(100, 'top');
        Bn.style.left = calculateResponsiveValue(1200, 'left');
        flag = 2;
    } else if (flag == 2) {
        Bn.style.top = calculateResponsiveValue(400, 'top');
        Bn.style.left = calculateResponsiveValue(900, 'left');
        flag = 3;
    } else if (flag == 3) {
        Bn.style.top = calculateResponsiveValue(370, 'top');
        Bn.style.left = calculateResponsiveValue(600, 'left');
        flag = 1;
    }
}

function calculateResponsiveValue(value, axis) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var maxAxisValue = axis === 'top' ? windowHeight : windowWidth;

    return (value / 1920) * maxAxisValue + 'px';
}
