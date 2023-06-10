import AllProducts from "../components/AllProducts";
import { fetchOrders, fetchProducts } from "../lib/fetchData";

export default function Home({ products, orders }) {
  return (
    <div className="min-h-screen">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Products </div>
            <div className="stat-value">{products.length}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Active Orders </div>
            <div className="stat-value">{orders.length}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>

      <AllProducts products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetchProducts();
  const orders = await fetchOrders();

  return {
    props: {
      products,
      orders,
    },
  };
}
