const EventEmitter = require('events')
const http = require('http')
const { DefaultOptions } = require('../util/constants')

/**
 * The base class and the main hub for interacting with Dota 2 Game State Integration
 * @extends {EventEmitter}
 */
class Client extends EventEmitter {
  /**
   * @param {ClientOptions} [this.options] Options for the client
   */
  constructor (options = {}) {
    super()

    this.options = Object.assign(DefaultOptions, options)

    /**
     * creates server and emits ready
     * @fires Client#READY
     */
    http.createServer((req, res) => {
      let body = ''
      req.on('data', data => { body += data })
      req.on('end', () => { res.writeHead(200); this._process(JSON.parse(body)) })
    }).listen(this.options, () => this.emit('READY'))
  }

  /**
   * Processes data
   * @param {Object} data JSON data sent from Dota 2
   * @fires Client#DATA
   * @private
   */
  _process (data) {
    /**
     * Whenever Dota 2 client sents a new data
     * @type {Object} Game data
     * @event Client#DATA
     */
    this.emit('DATA', data)
  }
}

module.exports = Client

/**
 * Whenever the client is ready to listen
 * @event Client#READY
 */
