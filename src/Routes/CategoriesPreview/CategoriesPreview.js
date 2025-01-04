import {useContext} from "react";
import {CategoriesContext} from '../../Context/CategoriesContext';
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <section className="category-preview-container">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>;
            })}
        </section>
    );
};

export default CategoriesPreview;