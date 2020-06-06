import { Enemy } from "./Enemy.ts";

export default abstract class EnemyDecorator implements Enemy {

    protected enemy: Enemy;

    constructor(enemy: Enemy) {
        this.enemy = enemy;
    }

    takeDamage(): number {
        return this.enemy.takeDamage();
    }

}