import CategoryList from "../components/CategoryList.tsx";
import ProductList from "../components/ProductList.tsx";
import useFetchData from "../hooks/useFetchProduct.ts";

const HomePage: React.FC = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetchData(`${import.meta.env.VITE_BASE_URL}?limit=4`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ProductList products={products} />
      <CategoryList />
    </>
  );
};

export default HomePage;
