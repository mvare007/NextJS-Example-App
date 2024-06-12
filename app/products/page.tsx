"use client"
import { getProducts, addProduct } from "../../actions/products";
import { useState } from "react";


export default function ProductsPage() {
	const products = getProducts();
	const [productName, setProductName] = useState<string>("");

	return (
		<div key={products.toString()}> {/* This is a workaround to force a re-render */}
			<h1>Products</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.name}</li>
				))}
			</ul>
			<input
				style={{backgroundColor: "red"}}
				type="text"
				placeholder={productName}
				onChange={(e)=> setProductName(e.target.value)} />
			<button onClick={() => addProduct(productName)}>Add Product</button>
		</div>
	);
}
