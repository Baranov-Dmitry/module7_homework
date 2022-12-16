"use strict";

class ElectricalDevice {
  constructor(name) {
    this.name = name;
    this.onOffState = false;
  }

  turnOn() {
    this.onOffState = true;
  }

  turnOff() {
    this.onOffState = false;
  }

  switch() {
    this.onOffState = !this.onOffState;
  }

  getName = function () {
    return this.name;
  };

  error(text) {
    let str = "";
    if (text !== undefined) {
      str = ` или ${text}`;
    }
    console.log(`Устройство ${this.name} не включено${str}`);
  }
}

class DeviceWithWoter extends ElectricalDevice {
  constructor(name, waterAmount) {
    super(name);
    this.waterAmount = waterAmount;
  }

  addWoter(waterAmount) {
    this.waterAmount += waterAmount;
  }
}

class CoffeeMaker extends DeviceWithWoter {
  constructor(name, waterAmount, coffeAmount, milkAmount) {
    super(name, waterAmount);
    this.coffeAmount = coffeAmount;
    this.milkAmount = milkAmount;
  }

  coffeError = function () {
    this.error("Не хватает кофе, воды или молока");
  };

  makeEsspresso() {
    if (this.onOffState && this.coffeAmount >= 20 && this.waterAmount >= 30) {
      this.coffeAmount -= 20;
      this.waterAmount -= 30;
      console.log("3.. 2.. 1.. Эспресо готов");
    } else {
      this.coffeError();
    }
  }

  makeLatte() {
    if (this.onOffState && this.coffeAmount >= 20 && this.milkAmount >= 200) {
      this.coffeAmount -= 20;
      this.waterAmount -= 30;
      console.log("3.. 2.. 1.. Латте готов");
    } else {
      this.coffeError();
    }
  }

  addMilk(milkAmount) {
    this.milkAmount += milkAmount;
  }

  addCoffee(coffeAmount) {
    this.coffeAmount += coffeAmount;
  }
}

class Pot extends DeviceWithWoter {
  constructor(name, waterAmount) {
    super(name, waterAmount);
  }

  boil() {
    if (this.onOffState && this.waterAmount > 0) {
      console.log("Греем воду 3.. 2.. 1.. Чайник вскипел");
    } else {
      this.error("Чайник не включен, или не хватает воды");
    }
  }
}

class Microwave extends ElectricalDevice {
  constructor(name) {
    super(name);
  }

  run(time) {
    if (this.onOffState && time > 0) {
      console.log(`Микроволновка грела еду ${time} секунд`);
    } else {
      this.error();
    }
  }
}

// tests
const coffeeMachine = new CoffeeMaker("Polaris", 50, 0, 0);
coffeeMachine.addCoffee(50);
coffeeMachine.turnOn();
coffeeMachine.makeEsspresso();
coffeeMachine.makeEsspresso();

const kitchenPot = new Pot("Scarlet", 0);
kitchenPot.boil();
kitchenPot.turnOn();
kitchenPot.addWoter(500);
kitchenPot.boil();
kitchenPot.turnOff();

const microwave = new Microwave("some kind microwave");
microwave.run(5);
microwave.turnOn();
microwave.run(50);
