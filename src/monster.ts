export class Monster {
    name: string;
    level: number;
    strength: number;
    monsterHP: number;
    monsterGP: number;
    monsterExperience: number;

    constructor(name: string, level: number, strength: number, monsterHP: number, monsterGP: number, monsterExperience: number){
        this.name = name;
        this.level = level;
        this.strength = strength;
        this.monsterHP = monsterHP;
        this.monsterGP = monsterGP;
        this.monsterExperience = monsterExperience;
    }

}