/**
 * Options for client
 * @typedef {Object} ClientOptions
 * @property {String} [host = 127.0.0.1] The IP of the listening server. Do not change this unless you know what's going on.
 * @property {Number} [port = 3000] The port for the game to connect. Must match with Game State Integration config.
 * @property {String[]} [authToken = []] Array of token that's going to be authenticated.
 */
exports.DefaultOptions = {
  host: '127.0.0.1',
  port: 3000,
  authToken: []
}
