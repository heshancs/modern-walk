import CategoryList from "../components/CategoryList.tsx";
import ProductList from "../components/ProductList.tsx";
import useFetchData from "../hooks/useFetchProduct.ts";

const HomePage: React.FC = () => {
  const BASE_URL = `${import.meta.env.VITE_BASE_URL}` || `https://fakestoreapi.com/products`;
  const {
    data: products,
    loading,
    error,
  } = useFetchData(`${BASE_URL}?limit=4`);

  if (loading) return <div>Loading...</div>;
  if (error) throw new Error("API error");

  return (
    <>
      <ProductList products={products} />
      <CategoryList />
    </>
  );
};

export default HomePage;
