document.addEventListener('DOMContentLoaded', function () {
    let currentFloor = 1;

    function moveElevator(floor) {
        currentFloor = floor;
        document.getElementById('elevator').style.transform = `translateY(${(floor + 2) * -100}px)`;
    }

    document.getElementById('btnUp').addEventListener('click', function () {
        if (currentFloor > -2) {
            moveElevator(currentFloor - 1);
        }
    });

    document.getElementById('btnDown').addEventListener('click', function () {
        if (currentFloor < 6) {
            moveElevator(currentFloor + 1);
        }
    });
});