const jwt = require('jsonwebtoken')
const Config = require('./config')

class JwtAuth {
  constructor(config) {
    if (!(config instanceof Config)) {
      throw new Error('Invalid configuration object')
    }
    this.config = config
  }

  createToken(claims) {
    return jwt.sign(claims, this.config.secretKey, {
      issuer: this.config.issuer,
      audience: this.config.audience,
      expiresIn: this.config.expiresIn,
    })
  }

  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.config.secretKey, {
        issuer: this.config.issuer,
        audience: this.config.audience,
      })
      return { isValid: true, payload: decoded }
    } catch (error) {
      return { isValid: false, payload: null }
    }
  }
}

module.exports = JwtAuth
