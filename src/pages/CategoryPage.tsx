import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import useFetchData from "../hooks/useFetchProduct";
import { toUpdateCategoryName } from "../utills/helpers";

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const updatedCategoryName = toUpdateCategoryName(categoryName);
  const BASE_URL = `${import.meta.env.VITE_BASE_URL}` || `https://fakestoreapi.com/products`;

  const {
    data: products,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/category/${categoryName}`);

  if (loading) return <div>Loading...</div>;
  if (error) throw new Error("API error");

  return (
      <ProductList products={products} categoryName={updatedCategoryName} />
  );
};

export default CategoryPage;

