/**
 * Represents a HTTP error from a request
 * @extends Error
 */
class HTTPError extends Error {
  constructor (message, name, code, method, path) {
    super(message)

    /**
     * Error name
     * @type {String}
     */
    this.name = name

    /**
     * HTTP error code returned from the request
     * @type {Number}
     */
    this.code = code || 500

    /**
     * The HTTP method used for the request
     * @type {String}
     */
    this.method = method

    /**
     * The path of the request
     * @type {String}
     */
    this.path = path
  }
}

module.exports = HTTPError
