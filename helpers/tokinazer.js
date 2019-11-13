const jwt = require('jsonwebtoken');

module.exports = (id, name) => {
    const accessToken = jwt.sign({id, name}, process.env.SECRET, {expiresIn: 999999});

    if (!accessToken) {
        throw new Error('Token was no created');
    }
    return accessToken;
};