import BaseEnemy from "./BaseEnemy.ts";
import { HelmetDecorator } from "./HelmetDecorator.ts";
import { ArmourDecorator } from "./ArmourDecorator.ts";
import DifficultEnemy from "./DifficulEnemy.ts";

let enemy = new DifficultEnemy();
let enemyWithHelmet = new HelmetDecorator(enemy);
let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);

let computedDamaged = enemyWithHelmetAndArmour.takeDamage();
console.log(computedDamaged);