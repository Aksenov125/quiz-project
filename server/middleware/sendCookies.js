const cookiesConfig = require('../config/cookiesConfig');
const { generateTokens } = require('../utils/authUtils');

const sendCookies = (user) => (req, res, next) => {
  const { accessToken, refreshToken } = generateTokens(
    { user: { name: user.name, id: user.id } },
  );
  res.cookie(
    cookiesConfig.access,
    accessToken,
    { maxAge: cookiesConfig.maxAgeAccess, httpOnly: true },
  );
  res.cookie(
    cookiesConfig.refresh,
    refreshToken,
    { maxAge: cookiesConfig.maxAgeRefresh, httpOnly: true },
  );
  next();
};

module.exports = { sendCookies };
