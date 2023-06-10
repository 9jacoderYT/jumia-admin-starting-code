import React from "react";
import { NGnaira } from "../lib/help";

export default function AllOrders({ orders }) {
  return (
    <>
      <div className="overflow-x-auto max-h-6xl">
        {orders?.map((order, index) => (
          <div key={order.id}>
            <table className="table table-xs mt-5">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Delivery Address</th>
                  <th>Cart Sum</th>
                  <th>Delivery Sum</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{index}</th>
                  <td>{order.name}</td>
                  <td>{order.phoneNumber}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>{NGnaira.format(order.cartSum)}</td>
                  <td>{NGnaira.format(order.deliverySum)}</td>
                  <td>{NGnaira.format(order.cartSum + order.deliverySum)}</td>
                </tr>
              </tbody>
            </table>

            {order.cart.map((item) => (
              <table className="table  mt-2 ml-3" key={Math.random()}>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.url}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.title}</div>
                          <div className="text-sm opacity-50">
                            {item.deliveryPrice}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
