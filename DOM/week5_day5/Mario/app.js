// var mario = document.querySelector('#mario');
// var runner = document.querySelector('#running');
// var jumper = document.querySelector('#jumping')
// var ground = document.querySelector('.container');
// jumper.style.bottom = '85px';
// var timer;
// var jumpTimer;
// var fallTimer;
// var run = false;
// var up = false;
// var jumpUp;
// var fallDown;
// ground.style.backgroundPositionX = '100px';
// document.addEventListener('keydown', startRunning);
// document.addEventListener('keyup', stopRunning);
// document.addEventListener('keypress', jump);

// function runMarioRun() {
//     if (!up) {
//         mario.style.display = 'none';
//         runner.style.display = 'block';
//     }
// }

// function freeze() {
//     if (!up) {
//         mario.style.display = 'block';
//         runner.style.display = 'none';
//     }
// }

// function jump() {
//     if (!up) {
//         up = true;
//         mario.style.display = 'none';
//         runner.style.display = 'none';
//         jumper.style.display = 'block';
//         jumpUp = 5;
//         jumpTimer = setInterval(moveUp, 50);
//     }
// }

// function moveUp() {
//     if (jumpUp != 0) {
//         jumper.style.bottom = parseInt(jumper.style.bottom) + 10 + 'px';
//         jumpUp--;
//     } else {
//         clearInterval(jumpTimer);
//         fallDown = 5;
//         fallTimer = setInterval(moveDown, 50);
//     }
// }

// function moveDown() {
//     if (fallDown != 0) {
//         jumper.style.bottom = parseInt(jumper.style.bottom) - 10 + 'px';
//         fallDown--;
//     } else {
//         up = false;
//         clearInterval(fallTimer);
//         jumper.style.display = 'none';
//         if (run) {
//             runner.style.display = 'block';
//         } else {
//             mario.style.display = 'block';
//         }
//     }
// }

// function startRunning(e) {
//     if (e.keyCode == 39 && !run) {
//         runMarioRun();
//         timer = setInterval(groundMove, 50);
//         run = true;
//     } else {
//         return;
//     }
// }

// function stopRunning(e) {
//     if (e.keyCode == 39) {
//         freeze();
//         clearInterval(timer);
//         run = false;
//     }
// }

// function jumpUp(e) {
//     if (e.keyCode == 32) {
//         jump();
//         up = true;
//     }
// }
// /* onkeydown = function(e) {
//     if (e.keyCode == 39) {
//         runMarioRun();
//         timer = setInterval(groundMove(), 50);
//     }
// }
// onkeyup = function(e) {
//     if (e.keyCode == 39) {
//         freeze();
//         clearInterval(timer);
//     }
// } */
// function groundMove() {
//     ground.style.backgroundPositionX = (parseInt(ground.style.backgroundPositionX) - 10) + 'px';
// }


var mario = document.querySelector('#mario');
var runnerR = document.querySelector('#runningRight');
var runnerL = document.querySelector('#runningLeft');
var jumper = document.querySelector('#jumping')
var ground = document.querySelector('.container');
ground.style.backgroundPositionX = '100px';

function groundMove(e) {
    if (e.keyCode == 39) {
        ground.style.backgroundPositionX = (parseInt(ground.style.backgroundPositionX) - 10) + 'px';
    }
}


document.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        mario.style.display = 'none';
        runnerR.style.display = 'block';
        jumper.style.display = 'none';
        ground.style.backgroundPositionX = (parseInt(ground.style.backgroundPositionX) - 15) + 'px';
    } else if (e.keyCode == 37) {
        mario.style.display = 'none';
        runnerL.style.display = 'block';
        jumper.style.display = 'none';
        ground.style.backgroundPositionX = (parseInt(ground.style.backgroundPositionX) +15) + 'px';
    } else if (e.keyCode == 38) {
        mario.style.display = 'none';
        jumper.style.display = 'block';
        runnerR.style.display = 'none';
        runnerL.style.display = 'none';
        jumper.style.bottom = 125 + 'px';
      
    }
    console.log(e.keyCode);

});

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 39) {
        mario.style.display = 'block';
        runnerR.style.display = 'none';
        
    }

})


document.addEventListener('keyup', function (e) {
    if (e.keyCode == 37) {
        mario.style.display = 'block';
        runnerL.style.display = 'none';
    }
})

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 38) {
        mario.style.display = 'block';
        jumper.style.display = 'none';
      
    }
})