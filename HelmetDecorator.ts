import EnemyDecorator from './EnemyDecorator.ts';

export class HelmetDecorator extends EnemyDecorator {

    takeDamage(): number {
        return this.enemy.takeDamage() / 2;
    }
}