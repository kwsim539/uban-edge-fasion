import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
    return (
        <div className="category-wrapper">
            <div className="category-wrapper__body">
                <h2 className="">{title}</h2>
                <p className="">Shop Now</p>
            </div>
            <div className="categories-wrapper__img" style={{backgroundImage: `url(${imageUrl})`}}></div>
        </div>
    );
};

export default CategoryItem;
