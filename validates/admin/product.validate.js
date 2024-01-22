module.exports.createPost = (req, res, next) => {
	if(!req.body.title) {
		req.flash("error", "Nhập tiêu đề vào con lợn này!!");
		res.redirect("back");
		return;
	}
	next();

}