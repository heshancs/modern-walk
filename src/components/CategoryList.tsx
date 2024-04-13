import { Link } from "react-router-dom";
import "./CategoryList.css";
import { selectColor, toUpdateCategoryName } from "../utills/helpers";
import useFetchCategory from "../hooks/useFetchCategory";

const CategoryList: React.FC = () => {
  const {
    data: categories,
    loading,
    error,
  } = useFetchCategory(`${import.meta.env.VITE_BASE_URL}/categories`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="category-list">
      <div className="container">
        <div className="row">
          <h2>Categories</h2>
          <div className="category-tiles">
            {categories
              .filter((category) => category.includes("clothing")) // TODO: Remove filtering. For the prototype version only
              .map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${encodeURIComponent(category)}`}
                  className="category-tile"
                  style={{background: selectColor(category)}}
                >
                  <p>{toUpdateCategoryName(category)}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
