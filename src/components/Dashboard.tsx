import { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import { Transaction } from "./common/TransactionType";
import TanstackTable from "./common/TanstackTable";

import Header from "./common/Header";
import SearchBar from "./common/SearchBar";
import Pagination from "./common/Pagination";
import HelpCenter from "./HelpCenter";
import Footer from "./common/Footer";
import Loading from "./common/Loading";
import NotFound from "./common/NotFound";
import ErrorMessage from "./common/ErrorMessage";

const columns = [
  {
    accessorKey: "transactionID",
    header: "Transaction ID",
    // @ts-expect-error - info
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
    // @ts-expect-error - info
    cell: (info) =>
      `${info
        .getValue()
        .replace("T", " ")
        .replace("Z", "")
        .replace(/\.\d+$/, "")}`,
  },
];

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  const transactionsUrl =
    "https://sura-yaya-api.onrender.com/transactions?p=" + page;
  const searchUrl = "https://sura-yaya-api.onrender.com/search";

  const apiEndpoint = searchKeyword === "" ? transactionsUrl : searchUrl;
  const key = searchKeyword === "" ? ["transaction", page] : searchKeyword;
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

  const transactions = data?.data.data.map((t: Transaction) => ({
    transactionID: t.id,
    sender: t.sender.name,
    receiver: t.receiver.name,
    amount: t.amount.toFixed(2),
    currency: t.currency,
    cause: t.cause || "-",
    createdAt: new Date(t.created_at_time).toISOString(),
  }));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchTransaction = (searchValue: string) => {
    setSearchKeyword(searchValue);
  };

  return (
    <>
      <div className="sticky top-0 w-full bg-white z-10">
        <Header />
      </div>

      <SearchBar onSearch={handleSearchTransaction} />
      <div className="md:px-2 lg:px-5 2xl:px-20 mt-5">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage />
        ) : (
          <div className="" style={{ overflowX: "auto" }}>
            <TanstackTable data={transactions} columns={columns} />
            {transactions.length === 0 ? <NotFound /> : undefined}
            {lastPage >= 2 ? (
              <Pagination
                page={page}
                lastPage={lastPage}
                isFetching={isFetching}
                onPageChange={handlePageChange}
              />
            ) : undefined}
          </div>
        )}
      </div>

      <HelpCenter />
      <Footer />
    </>
  );
};

export default Dashboard;
