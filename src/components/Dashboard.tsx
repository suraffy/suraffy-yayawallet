import { useState } from "react";
import Header from "./common/Header";
import TanstackTable from "./common/TanstackTable";
import { transactions, Transaction } from "../db";

const columns = [
  { accessorKey: "transactionID", header: "Transaction ID" },
  { accessorKey: "sender", header: "Sender" },
  { accessorKey: "receiver", header: "Receiver" },
  { accessorKey: "currency", header: "Currency" },
  { accessorKey: "cause", header: "Cause" },
  { accessorKey: "createdAt", header: "Created At" },
];

const Dashboard = () => {
  const [transactionList] = useState<Transaction[]>(transactions);
  return (
    <>
      <Header />
      <div className="containerr px-5 mt-5">
        <TanstackTable data={transactionList} columns={columns} />
      </div>
    </>
  );
};

export default Dashboard;
