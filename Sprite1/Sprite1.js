/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 (8)",
        "./Sprite1/costumes/pixil-frame-0 (8).png",
        { x: 73, y: 16 }
      ),
      new Costume(
        "pixil-frame-0 (9)",
        "./Sprite1/costumes/pixil-frame-0 (9).png",
        { x: 22, y: 58 }
      ),
      new Costume(
        "pixil-frame-0 (9)2",
        "./Sprite1/costumes/pixil-frame-0 (9)2.png",
        { x: 51, y: 85 }
      ),
      new Costume(
        "pixil-frame-0 (9)3",
        "./Sprite1/costumes/pixil-frame-0 (9)3.png",
        { x: 51, y: 113 }
      ),
      new Costume(
        "pixil-frame-0 (9)5",
        "./Sprite1/costumes/pixil-frame-0 (9)5.png",
        { x: 51, y: 113 }
      ),
      new Costume(
        "pixil-frame-0 (9)4",
        "./Sprite1/costumes/pixil-frame-0 (9)4.png",
        { x: 51, y: 113 }
      ),
      new Costume(
        "pixil-frame-0 (9)6",
        "./Sprite1/costumes/pixil-frame-0 (9)6.png",
        { x: 51, y: 113 }
      ),
      new Costume(
        "pixil-frame-0 (9)7",
        "./Sprite1/costumes/pixil-frame-0 (9)7.png",
        { x: 39, y: 113 }
      ),
      new Costume(
        "pixil-frame-0 (9)8",
        "./Sprite1/costumes/pixil-frame-0 (9)8.png",
        { x: -2, y: 113 }
      ),
      new Costume(
        "pixil-frame-0 (9)9",
        "./Sprite1/costumes/pixil-frame-0 (9)9.png",
        { x: -2, y: 97 }
      ),
      new Costume(
        "pixil-frame-0 (9)10",
        "./Sprite1/costumes/pixil-frame-0 (9)10.png",
        { x: -2, y: 97 }
      ),
      new Costume(
        "pixil-frame-0 (9)11",
        "./Sprite1/costumes/pixil-frame-0 (9)11.png",
        { x: -219, y: 48 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath)
    ];
  }

  *whenIReceiveFall() {
    this.costume = "pixil-frame-0 (9)2";
    while (true) {
      if (this.keyPressed("d")) {
        this.x += 5;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.x -= 5;
        }
      }
      if (this.keyPressed("a")) {
        this.x -= 5;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.x += 5;
        }
      }
      if (this.keyPressed("w")) {
        this.y += 5;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.y -= 5;
        }
      }
      if (this.keyPressed("s")) {
        this.y -= 5;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.y += 5;
        }
      }
      yield;
    }
  }

  *whenIReceiveStartGame() {
    this.broadcast("new game");
    this.visible = true;
    this.goto(191, -123);
    for (let i = 0; i < 35; i++) {
      this.x -= 6;
      yield;
    }
    this.visible = false;
    for (let i = 0; i < 5; i++) {
      this.x -= 6;
      yield;
    }
    yield* this.wait(1);
    this.broadcast("lights on");
    yield* this.wait(7);
    for (let i = 0; i < 5; i++) {
      this.move(6);
      yield;
    }
    this.visible = true;
    for (let i = 0; i < 7; i++) {
      this.move(6);
      yield;
    }
  }

  *whenIReceiveFall2() {
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.health = 100;
    while (true) {
      if (
        this.touching(Color.rgb(183, 28, 28)) ||
        this.touching(Color.rgb(158, 158, 158)) ||
        this.touching(Color.rgb(121, 85, 72)) ||
          this.touching(Color.rgb(255, 255, 255))
      ) {
        this.stage.vars.health--;
      }
      if (this.toNumber(this.stage.vars.health) === 0) {
        this.broadcast("death");
        yield* this.wait(4);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveDeath() {
    yield* this.wait(1);
    this.costume = "pixil-frame-0 (9)3";
    yield* this.glide(1, -71, -62);
    this.costume = "pixil-frame-0 (9)4";
    yield* this.glide(1, -9, -61);
    this.costume = "pixil-frame-0 (9)6";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (9)7";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (9)8";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (9)9";
    yield* this.wait(0.1);
    this.costume = "pixil-frame-0 (9)10";
    yield* this.wait(0.1);
    this.costume = "pixil-frame-0 (9)11";
    yield* this.wait(0.1);
  }
}
