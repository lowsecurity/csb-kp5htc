/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite15 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite15/costumes/costume1.png", {
        x: 0,
        y: 0
      }),
      new Costume(
        "pixil-frame-0 (17)",
        "./Sprite15/costumes/pixil-frame-0 (17).png",
        { x: 24, y: 34 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite15/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "explode" },
        this.whenIReceiveExplode
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath)
    ];
  }

  *whenIReceiveExplode() {
    this.visible = true;
    this.goto(this.sprites["Sprite6"].x, this.sprites["Sprite6"].y);
    this.direction = 90;
    this.direction += 90;
    while (!this.touching("edge")) {
      this.move(8);
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }
}
