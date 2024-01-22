const Product = require("../../model/product.model");

// [GET] /products
module.exports.index = async(req, res) => {

	const products = await Product.find({
		status: "active",
		deleted: false
	}).sort({position: "desc"}); 
	

	const newProducts = products.map(item => {
		item.priceNew = (item.price * (100 - item.discountPercentage) / 100).toFixed();
		return item;
	})
	
	res.render('client/pages/product/index',{
		pageTitle: "Trang sản phẩm",
		products: newProducts
	});
}


// [GET] /products/detail

module.exports.detail = async (req, res) => {
	const slug = req.params.slug;
	console.log(slug);
	
	let find = {
		slug: slug
	}

	
	const product = await Product.findOne(find);

	res.render("client/pages/product/detail", {
		product: product
	})
}


