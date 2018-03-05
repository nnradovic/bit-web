
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