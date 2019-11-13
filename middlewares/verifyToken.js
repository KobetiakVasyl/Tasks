const tokenVerificator = require('../helpers/tokenVerificator');

async function checkToken(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) throw new Error('No token');

        const verifiedUser = tokenVerificator(token, process.env.SECRET);
        if (!verifiedUser || Object.entries(verifiedUser).length === 0) {
            res.status(300).json({
                success: false,
                message: 'No access'
            });
        } else {
            next();
        }
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
}
module.exports = checkToken;