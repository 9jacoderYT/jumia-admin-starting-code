import React from "react";
import { fetchOrders } from "../../lib/fetchData";
import AllOrders from "../../components/AllOrders";

export default function Orders({ orders }) {
  return (
    <div className="min-h-screen">
      <AllOrders orders={orders} />
    </div>
  );
}

export async function getServerSideProps() {
  const orders = await fetchOrders();

  return {
    props: {
      orders,
    },
  };
}
