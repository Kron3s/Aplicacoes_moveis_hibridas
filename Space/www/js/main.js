var SpaceHipster = SpaceHipster || {};

//initiate the Phaser framework
SpaceHipster.game = new Phaser.Game('100%', '100%', Phaser.AUTO);

SpaceHipster.game.state.add('GameState', SpaceHipster.GameState);
SpaceHipster.game.state.add('Menu',SpaceHipster.Menu);
SpaceHipster.game.state.start('Menu');    