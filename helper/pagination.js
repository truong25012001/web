module.exports =  (objectPagination, query, countProducts) => {
	if(query.page) {
		objectPagination.currentPage = parseInt(query.page);
	}


	objectPagination.skip = (objectPagination.currentPage - 1) *objectPagination.limititems;

	
	const totalPages = Math.ceil(countProducts / objectPagination.limititems);
	objectPagination.totalPages = totalPages;

	return objectPagination;
}