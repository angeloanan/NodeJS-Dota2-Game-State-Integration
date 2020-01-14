/**
 * Represents an In-Game Building
 * @class
 */
class Building {
  constructor (name, health, maxHealth) {
    /**
     * @type {String} Building name (internal name)
     */
    this.name = name
    /**
     * @type {Number} Building's current health
     */
    this.health = health

    /**
     * @type {Number} Building's max health
     */
    this.maxHealth = maxHealth
  }
}

module.exports = Building
