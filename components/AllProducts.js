import React from "react";

export default function AllProducts({ products }) {
  return (
    <>
      <div className="overflow-x-auto max-h-6xl">
        <table className="table table-xs table-pin-rows table-pin-cols ">
          <thead>
            <tr>
              <th>{""}</th>
              <td>Image</td>
              <td>Title</td>
              <td>Brand</td>
              <td>Units</td>
              <td>Delivery</td>

              <th>{""}</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product.id}>
                <th>{index}</th>

                <td>
                  <img
                    src={product.url}
                    alt="product image"
                    className="w-[50px] h-[50px]"
                  />
                </td>

                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.units}</td>
                <td>{product.deliveryMethod}</td>

                <th>{index}</th>
              </tr>
            ))}
          </tbody>
         
        </table>
      </div>
    </>
  );
}
