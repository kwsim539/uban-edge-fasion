import {useNavigate} from "react-router-dom";
import {
    CategoryItemContainer,
    CategoryItemBody,
    CategoryItemTitle,
    CategoryItemSubtitle,
    CategoryItemBackgroundImage
} from './category-item.styles';

const CategoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <CategoryItemContainer onClick={onNavigateHandler}>
            <CategoryItemBody>
                <CategoryItemTitle>{title}</CategoryItemTitle>
                <CategoryItemSubtitle>Shop Now</CategoryItemSubtitle>
            </CategoryItemBody>
            <CategoryItemBackgroundImage imageUrl={imageUrl} />
        </CategoryItemContainer>
    );
};

export default CategoryItem;
