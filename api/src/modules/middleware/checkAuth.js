export default (req, res, next) => {
	try {
		if(req.headers.pass !== process.env.pass){
            return res.status(401).json({result: false, msg: 'Access denied'});
		}else{
            next();
		}
	} catch (e) {
		return res.status(401).json({result: false, msg: 'Access denied'});
	}
};
