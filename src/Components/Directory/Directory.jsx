import CategoryItem from "../CategoryItem/CategoryItem";
import './directory.styles.scss';
const Directory = ({categories}) => {
    return (
        <div className="directory-wrapper">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Directory;
