//POST
pm.test("Successful POST request", function () {
	pm.expect(pm.response.code).to.be.oneOf([200, 201]);
});
//GET
pm.test("Status code is 200", function () {
	pm.response.to.have.status(200);
});

//PATCH
pm.test("Successful PUT request", function () {
	pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);
});
//DELETE
pm.test("Successful DELETE request", function () {
	pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);
});
