import { Enemy } from "./Enemy.ts";

export default class BaseEnemy implements Enemy {
    takeDamage(): number {
        return 10;
    }
}