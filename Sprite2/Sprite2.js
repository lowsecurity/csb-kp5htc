/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arena 1", "./Sprite2/costumes/arena 1.png", {
        x: 284,
        y: 136
      }),
      new Costume(
        "pixil-frame-0 (5)",
        "./Sprite2/costumes/pixil-frame-0 (5).png",
        { x: 0, y: 0 }
      ),
      new Costume(
        "pixil-frame-0 (6)",
        "./Sprite2/costumes/pixil-frame-0 (6).png",
        { x: 282, y: 192 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath2)
    ];
  }

  *whenIReceiveFall() {
    this.goto(-98, 2);
    yield* this.wait(1);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }

  *whenIReceiveDeath2() {
    this.visible = false;
  }
}
