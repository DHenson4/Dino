const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let score;
let scoreTextl
let highscore;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};

document.addEventListener('keydown', function (evt) {
    keys[evt.code] = true;
});

document.addEventListener('keyup', function (evt) {
    keys[evt.code] = false;
});

class Player {
    constructor (x, y, w, h, c) {
        this.x = x;
        this.y =y;
        this.w =w;
        this.h = h;
        this.c = c;

        this.dy = 0;
        this.jumpForce = 15;
        this.originalHeight = h;
        this.grounded = false;
        this.jumpTimer = 0;
        }

        Animation () {
            if (keys['Space'] || keys['KeyW']) {
                this.Jump();
            } else {
                this.jumpTimer = 0;
            }

            if (keys['ShiftLeft'] || keys['Keys']) {
                this.h = this.originalHeight / 2;
            } else {
                this.h = this.originalHeight;
            }

            this.y += this.dy;

            if (this.y + this.h < canvas.height) {
                this.dy += gravity;
                this.grounded = false;
            } else {
                this.dy = 0;
                this.grounded = false;
                this.y = canvas.height - this.h;
            }

            this.Draw();
        }





















}
