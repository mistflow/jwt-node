# jwt-node

```
const JWTAuth = require('@mistflow/jwt-node')
const Config = require('@mistflow/jwt-node/src/config')

const config = new Config(
    'your-secret-key',
    'your-issuer', // optional
    'your-audience', // optional
    '1h', // token expiration time
)

const jwtAuth = new JWTAuth(config)
const token = jwtAuth.createToken(user)

const verify = jwtAuth.verifyToken(token)
console.log(verify.isValid) // verify.payload - for payload
```
