import { Link } from "react-router-dom";
import "./CategoryList.css";
import { selectColor, toUpdateCategoryName } from "../utills/helpers";
import useFetchCategory from "../hooks/useFetchCategory";

const CategoryList: React.FC = () => {

  const BASE_URL = `${import.meta.env.VITE_BASE_URL}` || `https://fakestoreapi.com/products`;
  const {
    data: categories,
    loading,
    error,
  } = useFetchCategory(`${BASE_URL}/categories`);

  if (loading) return <div>Loading...</div>;
  if (error) throw new Error("API error");


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
