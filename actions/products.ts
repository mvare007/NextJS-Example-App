let products = [
	{
		id: 1,
		name: "Product 1",
	}
];


export function getProducts() {
	return products;
}

export function addProduct(productName: string): void {
	products.push({
		id: products.length + 1,
		name: productName,
	});
}
