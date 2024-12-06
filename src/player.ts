export class Player {
    name: string;
    level: number;
    experience: number;
    forestFights: number;
    playerFights: number;
    goldInHand: number;
    goldInBank: number;
    playerWeapon: string;
    playerArmor: string;
    playerMaxHP: number;
    playerCurrentHP: number;
    playerStrength: number;
    playerDefense: number;
    playerCharm: number;
    playerGems: number;
    playerMaxSkillUses: number;
    playerRemainingSkillUses: number;

    constructor (name: string, level: number, experience: number, forestFights: number, playerFights: number, goldInHand: number, goldInBank: number, playerWeapon: string, playerArmor: string, playerMaxHP: number, playerCurrentHP: number, playerStrength: number, playerDefense: number, playerCharm: number, playerGems: number, playerMaxSkillUses: number, playerRemainingSkillUses: number) {
        this.name = name;
        this.level = level;
        this.experience = experience;
        this.forestFights = forestFights;
        this.playerFights = playerFights;
        this.goldInHand = goldInHand;
        this.goldInBank = goldInBank;
        this.playerWeapon = playerWeapon;
        this.playerArmor = playerArmor;
        this.playerMaxHP = playerMaxHP;
        this.playerCurrentHP = playerCurrentHP;
        this.playerStrength = playerStrength;
        this.playerDefense = playerDefense;
        this.playerCharm = playerCharm;
        this.playerGems = playerGems;
        this.playerMaxSkillUses = playerMaxSkillUses;
        this.playerRemainingSkillUses = playerRemainingSkillUses
    }
}