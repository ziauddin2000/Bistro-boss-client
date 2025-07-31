import React, { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

export default function PaymentHistory() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
        Payment History {paymentHistory.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Price</th>
              <th>Txn Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
