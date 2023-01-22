// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class Sprite {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset('./spritesheet.png'), 0, 0, 43, 40, 14, .1);

        this.x = 0;
        this.y = 0;
        this.speed = 100;
        this.switchDirectionX = false;
        this.switchDirectionY = false;
    };


    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2.5)

    };

    update() {
        if(this.x + 80 >= 1024) this.switchDirectionX = false;
        else if(this.x <= 0) this.switchDirectionX = true;

        this.x += (this.switchDirectionX) ? this.speed * this.game.clockTick : (this.speed * this.game.clockTick * -1);


        if(this.y + 80 >= 768) this.switchDirectionY = false;
        else if(this.y <= 0) this.switchDirectionY = true;

        this.y += (this.switchDirectionY) ? this.speed * this.game.clockTick : (this.speed * this.game.clockTick * -1);
    };


};
