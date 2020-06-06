import { Enemy } from "./Enemy.ts";

export default class DifficultEnemy implements Enemy {
    takeDamage(): number {
        return 2;
    }
}