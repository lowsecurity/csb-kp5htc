/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 (1)",
        "./Sprite4/costumes/pixil-frame-0 (1).png",
        { x: 109, y: 136 }
      ),
      new Costume(
        "pixil-frame-0 (2)",
        "./Sprite4/costumes/pixil-frame-0 (2).png",
        { x: 108, y: 200 }
      ),
      new Costume(
        "pixil-frame-0 (3)",
        "./Sprite4/costumes/pixil-frame-0 (3).png",
        { x: 131, y: 179 }
      ),
      new Costume(
        "pixil-frame-0 (4)",
        "./Sprite4/costumes/pixil-frame-0 (4).png",
        { x: 205, y: 158 }
      )
    ];

    this.sounds = [
      new Sound("pop", "./Sprite4/sounds/pop.wav"),
      new Sound("Low Whoosh", "./Sprite4/sounds/Low Whoosh.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "new game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Scythe" },
        this.whenIReceiveScythe
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone walls" },
        this.whenIReceiveBoneWalls
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone wall 2" },
        this.whenIReceiveBoneWall2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "new game" },
        this.whenIReceiveNewGame2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Scythe" },
        this.whenIReceiveScythe2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone walls" },
        this.whenIReceiveBoneWalls2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone wall 2" },
        this.whenIReceiveBoneWall3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sign pellet" },
        this.whenIReceiveSignPellet
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sign pellet" },
        this.whenIReceiveSignPellet2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "scythe wheel" },
        this.whenIReceiveScytheWheel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blood rain" },
        this.whenIReceiveBloodRain
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath)
    ];
  }

  *whenIReceiveNewGame() {
    this.costume = "pixil-frame-0 (1)";
    this.visible = false;
    yield* this.wait(14);
    this.visible = true;
    this.stage.watchers.health.visible = true;
    this.broadcast("start games");
    yield* this.wait(1);
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveScythe() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
    yield* this.wait(9.5);
  }

  *whenIReceiveBoneWalls() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.3);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
    yield* this.wait(9.5);
  }

  *whenIReceiveBoneWall2() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
    yield* this.wait(9.5);
  }

  *whenIReceiveNewGame2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveScythe2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveBoneWalls2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveBoneWall3() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveSignPellet() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
    yield* this.wait(9.5);
  }

  *whenIReceiveSignPellet2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenGreenFlagClicked2() {
    this.stage.watchers.health.visible = false;
  }

  *whenIReceiveScytheWheel() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
    yield* this.wait(9.5);
  }

  *whenIReceiveBloodRain() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
    yield* this.wait(9.5);
  }

  *whenIReceiveDeath() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)";
    yield* this.wait(3);
    this.visible = false;
  }
}
