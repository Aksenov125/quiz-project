const {User } = require('../db/models')

const ifAuthRedirect = (url) => (req, res, next) => {
  if (res.locals.user) {
    res.status(302).redirect(url);
  } else {
    next();
  }
};

const toAuthIfNotAuthorized = (req, res, next) => {
  if (res.locals.user) {
    next();
  } else {
    res.status(302).redirect('/auth/login');
  }
};

const checkUser = async (req, res, next) => {
  if (res.locals.user) {
    res.locals.user = await User.findByPk(Number(res.locals.user.id), {
      raw: true,
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
  }
  next();
};

module.exports = { ifAuthRedirect, toAuthIfNotAuthorized, checkUser };
