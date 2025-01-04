import {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import ProductCard from "../../Components/ProductCard/ProductCard";

import {CategoriesContext} from "../../Context/CategoriesContext";

import {CategoryContainer, CategoryTitle} from './category.styles';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
        <section className="category-container">
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products &&
                    products.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </CategoryContainer>

        </section>
    );
};

export default Category;