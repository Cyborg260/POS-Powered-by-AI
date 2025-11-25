"use client";

import Image from "next/image";
import styles from "./OrdersPage.module.css";

export default function OrdersPage() {
  const orders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      email: "john@example.com",
      date: "2025-10-27",
      total: "$119.97",
      payment: "Credit Card",
      status: "Completed",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      date: "2025-10-27",
      total: "$129.97",
      payment: "Cash",
      status: "Processing",
    },
    {
      id: "#ORD-003",
      customer: "Bob Johnson",
      email: "bob@example.com",
      date: "2025-10-26",
      total: "$29.99",
      payment: "Mobile Payment",
      status: "Pending",
    },
    {
      id: "#ORD-004",
      customer: "Alice Brown",
      email: "alice@example.com",
      date: "2025-10-26",
      total: "$74.98",
      payment: "Credit Card",
      status: "Completed",
    },
    {
      id: "#ORD-005",
      customer: "Charlie Wilson",
      email: "charlie@example.com",
      date: "2025-10-25",
      total: "$104.98",
      payment: "Credit Card",
      status: "Cancelled",
    },
  ];

  const handleExport = () => {
    alert("Export functionality will be implemented here.");
  };

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.title}>Orders</h2>
          <p className={styles.subtitle}>View and manage all orders</p>
        </div>

      <button className={styles.exportBtn} onClick={handleExport}>
  <Image
    src="/DownArrow.png"
    alt="Down Arrow"
    width={16}
    height={16}
    style={{ marginRight: "8px" }}
  />
  Export Orders
</button>

      </div>

      {/* Summary Cards */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>2,345</h3>
          <span>Total Orders</span>
        </div>

        <div className={styles.card}>
          <h3>1,892</h3>
          <span>Completed</span>
        </div>

        <div className={styles.card}>
          <h3>234</h3>
          <span>Processing</span>
        </div>

        <div className={styles.card}>
          <h3>219</h3>
          <span>Pending</span>
        </div>
      </div>

      {/* Orders Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o, index) => (
              <tr key={index}>
                <td>{o.id}</td>
                <td>
                  <div className={styles.customerCell}>
                    <strong>{o.customer}</strong>
                    <small>{o.email}</small>
                  </div>
                </td>
                <td>{o.date}</td>
                <td>{o.total}</td>
                <td>{o.payment}</td>

                <td>
                  <span className={`${styles.badge} ${styles[o.status.toLowerCase()]}`}>
                    {o.status}
                  </span>
                </td>

                <td>
                  <button className={styles.viewBtn}>👁 View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
