var SpaceHipster = SpaceHipster || {};
SpaceHipster.Menu  = {
   init: function(){
       this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

       //initiate physics system
       this.game.physics.startSystem(Phaser.Physics.ARCADE);

   },


   preload: function(){
       this.load.image('starfield', '../assets/images/space.png');
       this.load.audio('bgm', ['assets/audio/menusci-fi1.mp3', 'assets/audio/menusci-fi1.ogg']);


   },

   create: function(){


       this.music = this.add.audio('bgm');
       this.music.loop = true;
       this.music.play();

       this.bg = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');

       var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Tap to Start!', {
           font: '42px Arial', fill: '#ffffff', align: 'center'
       });
       text.anchor.set(0.5);

       this.input.onDown.add(this.startGame, this);



   },

   update : function(){


   },

   startGame: function () {
        this.music.stop();
        this.state.start("GameState");
    }

   

};

