import { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import { Transaction } from "./common/TransactionType";
import TanstackTable from "./common/TanstackTable";

import Header from "./common/Header";
import SearchBar from "./common/SearchBar";
import Pagination from "./common/Pagination";
import HelpCenter from "./HelpCenter";
import Footer from "./common/Footer";

const columns = [
  {
    accessorKey: "transactionID",
    header: "Transaction ID",
    cell: (info) =>
      `${info.getValue().slice(0, 4)}...${info.getValue().slice(-2)}`,
  },
  { accessorKey: "sender", header: "Sender" },
  { accessorKey: "receiver", header: "Receiver" },
  { accessorKey: "amount", header: "Amount" },
  { accessorKey: "currency", header: "Currency" },
  { accessorKey: "cause", header: "Cause" },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (info) => `${info.getValue().replace("T", " ").replace("Z", "")}`,
  },
];

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  const transactionsUrl =
    "https://sura-yaya-api.onrender.com/transactions?p=" + page;
  const searchUrl = "https://sura-yaya-api.onrender.com/search";

  const apiEndpoint = searchKeyword === "" ? transactionsUrl : searchUrl;
  const key = searchKeyword === "" ? ["transaction", page] : "search";
  const method = searchKeyword === "" ? "GET" : "POST";

  const { data, isLoading, isError, isFetching } = useFetchData(
    key,
    method,
    apiEndpoint,
    {
      query: searchKeyword,
    }
  );

  const lastPage = data?.data.lastPage;
  console.log({ lastPage });

  const transactions = data?.data.data.map((t: Transaction) => ({
    transactionID: t.id,
    sender: t.sender.name,
    receiver: t.receiver.name,
    amount: t.amount.toFixed(2),
    currency: t.currency,
    cause: t.cause || "-",
    createdAt: new Date(t.created_at_time).toISOString(),
  }));

  console.log({ isFetching });
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchTransaction = (searchValue: string) => {
    setSearchKeyword(searchValue);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearchTransaction} />
      <div className="containerr px-5 mt-5">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Not Found - 404</p>
        ) : (
          <div className="">
            <TanstackTable data={transactions} columns={columns} />
            <Pagination
              page={page}
              lastPage={lastPage}
              isFetching={isFetching}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>

      <HelpCenter />
      <Footer />
    </>
  );
};

export default Dashboard;
