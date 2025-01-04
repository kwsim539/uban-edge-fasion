import ProductCard from "../ProductCard/ProductCard";
import {CategoryPreviewContainer,CategoryPreviewTitle,CategoryPreviewPreview} from './category-preview.styles'

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle>
            </h2>
            <CategoryPreviewPreview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
            </CategoryPreviewPreview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview