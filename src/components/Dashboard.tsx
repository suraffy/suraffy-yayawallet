import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Header from "./common/Header";
import SearchBar from "./common/SearchBar";
import TanstackTable from "./common/TanstackTable";
import { Transaction } from "./common/TransactionType";
import Footer from "./common/Footer";

const columns = [
  { accessorKey: "transactionID", header: "Transaction ID" },
  { accessorKey: "sender", header: "Sender" },
  { accessorKey: "receiver", header: "Receiver" },
  { accessorKey: "amount", header: "Amount" },
  { accessorKey: "currency", header: "Currency" },
  { accessorKey: "cause", header: "Cause" },
  { accessorKey: "createdAt", header: "Created At" },
];

const Dashboard = () => {
  const [page, setPage] = useState(1);

  const apiEndpoint = "https://sura-yaya-api.onrender.com/transactions";
  const { data, isLoading } = useQuery(
    ["transaction", page],
    () => axios.get(`${apiEndpoint}?p=${page}`),
    { keepPreviousData: true }
  );

  const lastPage = data?.data.lastPage;
  console.log(lastPage);

  const transactions = data?.data.data.map((t: Transaction) => ({
    transactionID: t.id,
    sender: t.sender.name,
    receiver: t.receiver.name,
    amount: t.amount,
    currency: t.currency,
    cause: t.cause || "-",
    createdAt: t.created_at_time,
  }));

  return (
    <>
      <Header />
      <SearchBar />
      <div className="containerr px-5 mt-5">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="">
            <TanstackTable data={transactions} columns={columns} />
            <div className="my-10 flxe text-center mr-40">
              <button
                disabled={page === 1}
                className="border py-1 px-4 hover:bg-blue-50 disabled:opacity-50"
                onClick={() => setPage(page - 1)}
              >
                Prev
              </button>

              <button className="border-y border-blue-600 py-1 px-4 bg-blue-600 text-white">
                {page}
              </button>
              <button
                disabled={page >= lastPage}
                className="border py-1 px-4 hover:bg-blue-50"
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
