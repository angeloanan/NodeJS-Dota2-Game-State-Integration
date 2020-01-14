/**
 * Represents the current player stats
 * @class
 * @readonly
 */
class Player {
  constructor (playerData, heroData) {
    /**
     * Amount of kills this match
     * @type {Number}
     */
    this.kills = playerData.kills

    /**
     * Amount of deaths this match
     * @type {Number}
     */
    this.deaths = playerData.deaths

    /**
     * Amount of assists this match
     * @type {Number}
     */
    this.assists = playerData.assists

    /**
     * Current player kill streak
     * @type {Number}
     */
    this.killStreak = playerData.kill_streak

    this.gold = {
      /**
       * Current gold owned by the player's hero
       * @type {Number}
       */
      current: playerData.gold,
      /**
       * Current reliable gold
       * @type {Number}
       */
      reliable: playerData.gold_reliable,
      /**
       * Current unreliable gold
       * @type {Number}
       */
      unreliable: playerData.gold_unreliable,
      /**
       * Total Gold that has been acquired from heroes
       * @type {Number}
       */
      fromHero: playerData.gold_from_hero_kills,
      /**
       * Total Gold that has been acquired from creep kills
       * @type {Number}
       */
      fromCreep: playerData.gold_from_creep_kills,
      /**
       * Total Gold that has been acquired from income (Periodic gold)
       * @type {Number}
       */
      income: playerData.gold_from_income,
      /**
       * Total Gold that's shared to other heroes (Kill assists, runes, etc.)
       * @type {Number}
       */
      shared: playerData.gold_from_shared,
      /**
       * Current player's Gold per Minute
       * @type {Number}
       */
      gpm: playerData.gpm
    }

    /**
     * Current player's Gold per Minute
     * @type {Number}
     */
    this.gpm = playerData.gpm

    /**
     * Current player's XP per Minute. This will be 0 if the current player is playing
     * @type {0|Number}
     */
    this.xpm = playerData.xpm

    /**
     * The player's team
     * @type {'radiant'|'dire'}
     */
    this.team = playerData.team_name
  }

  /**
   * Same as `this.gold.current`
   * @returns {Number} Current total gold
   */
  get gold () {
    return this.gold.current
  }
}

module.exports = Player
