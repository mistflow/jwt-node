class Config {
  constructor(secretKey, issuer, audience, expiresIn) {
    this.secretKey = secretKey
    this.issuer = issuer
    this.audience = audience
    this.expiresIn = expiresIn
  }
}

module.exports = Config
