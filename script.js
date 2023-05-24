var flag = 1;

function f1() {
    alert("WHY ARE YOU GEY?");
}

function f() {
    var Bn = document.getElementById("Bn"); // Replace "yourElementId" with the actual ID of your element

    if (flag == 1) {
        Bn.style.top = calculateResponsiveValue(100, 'top');
        Bn.style.left = calculateResponsiveValue(1070, 'left');
        flag = 2;
    } else if (flag == 2) {
        Bn.style.top = calculateResponsiveValue(400, 'top');
        Bn.style.left = calculateResponsiveValue(50, 'left');
        flag = 3;
    } else if (flag == 3) {
        Bn.style.top = calculateResponsiveValue(370, 'top');
        Bn.style.left = calculateResponsiveValue(166, 'left');
        flag = 1;
    }
}

function calculateResponsiveValue(value, axis) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var maxAxisValue = axis === 'top' ? windowHeight : windowWidth;

    return (value / 1920) * maxAxisValue + 'px';
}
