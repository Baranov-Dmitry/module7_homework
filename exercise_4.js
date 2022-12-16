"use strict";

// ElectricalDevice start
function ElectricalDevice(name) {
  this.name = name;
  this.onOffState = false;
}

ElectricalDevice.prototype.turnOn = function () {
  this.onOffState = true;
};

ElectricalDevice.prototype.turnOff = function () {
  this.onOffState = false;
};

ElectricalDevice.prototype.switch = function () {
  this.onOffState = !this.onOffState;
};

ElectricalDevice.prototype.getName = function () {
  return this.name;
};

ElectricalDevice.prototype.error = function (text) {
  let str = "";
  if (text !== undefined) {
    str = ` или ${text}`;
  }
  console.log(`Устройство ${this.name} не включено${str}`);
};
// ElectricalDevice end

// DeviceWithWoter start
function DeviceWithWoter(name, waterAmount) {
  ElectricalDevice.call(this, name);
  this.waterAmount = waterAmount;
}

DeviceWithWoter.prototype = new ElectricalDevice();

DeviceWithWoter.prototype.addWoter = function (waterAmount) {
  this.waterAmount += waterAmount;
};

DeviceWithWoter.prototype.removeWater = function (waterAmount) {
  this.waterAmount -= waterAmount;
};
// DeviceWithWoter end

// CoffeeMaker start
function CoffeeMaker(name, waterAmount, coffeAmount, milkAmount) {
  DeviceWithWoter.call(this, name, waterAmount);
  this.coffeAmount = coffeAmount;
  this.milkAmount = milkAmount;
}

CoffeeMaker.prototype = new DeviceWithWoter();

CoffeeMaker.prototype.coffeError = function () {
  this.error("Не хватает кофе, воды или молока");
};

CoffeeMaker.prototype.makeEsspresso = function () {
  if (this.onOffState && this.coffeAmount >= 20 && this.waterAmount >= 30) {
    this.coffeAmount -= 20;
    this.waterAmount -= 30;
    console.log("3.. 2.. 1.. Эспресо готов");
  } else {
    this.coffeError();
  }
};

CoffeeMaker.prototype.makeLatte = function () {
  if (this.onOffState && this.coffeAmount >= 20 && this.milkAmount >= 200) {
    this.coffeAmount -= 20;
    this.waterAmount -= 30;
    console.log("3.. 2.. 1.. Латте готов");
  } else {
    this.coffeError();
  }
};

CoffeeMaker.prototype.addMilk = function (milkAmount) {
  this.milkAmount += milkAmount;
};

CoffeeMaker.prototype.addCoffee = function (coffeAmount) {
  this.coffeAmount += coffeAmount;
};
// CoffeeMaker end

// Pot start
function Pot(name, waterAmount) {
  DeviceWithWoter.call(this, name, waterAmount);
}

Pot.prototype = new DeviceWithWoter();

Pot.prototype.boil = function () {
  if (this.onOffState && this.waterAmount > 0) {
    console.log("Греем воду 3.. 2.. 1.. Чайник вскипел");
  } else {
    this.error("Чайник не включен, или не хватает воды");
  }
};
// Pot end

// Microwave start
function Microwave(name) {
  ElectricalDevice.call(this, name);
}

Microwave.prototype = new ElectricalDevice();

Microwave.prototype.run = function (time) {
  if (this.onOffState && time > 0) {
    console.log(`Микроволновка грела еду ${time} секунд`);
  } else {
    this.error();
  }
};
// Microwave end

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
