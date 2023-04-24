const JwtAuth = require('../src/jwt');
const Config = require('../src/config');

describe('JwtAuth', () => {
  const config = new Config('your-secret-key', 'your-issuer', 'your-audience', '1h');
  const jwtAuth = new JwtAuth(config);

  test('should create and verify a JWT token', () => {
    const claims = {
      userId: 1,
      role: 'admin',
    };

    const token = jwtAuth.createToken(claims);
    expect(typeof token).toBe('string');

    const result = jwtAuth.verifyToken(token);
    expect(result.isValid).toBe(true);
    expect(result.payload.userId).toEqual(claims.userId);
    expect(result.payload.role).toEqual(claims.role);
  });

  test('should fail verification for an invalid token', () => {
    const invalidToken = 'invalid.token.signature';
    const result = jwtAuth.verifyToken(invalidToken);
    expect(result.isValid).toBe(false);
  });
});
