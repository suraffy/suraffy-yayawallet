const HelpCenter = () => {
  return (
    <div className="container my-10">
      <div className="row">
        <div className="card">
          <h2>Search</h2>
          <ul>
            <li>Search transactions by - </li>
            <li>Sender account</li>
            <li>Receiver account</li>
            <li>Transaction Cause</li>
          </ul>
        </div>

        <div className="card">
          <h2>Sort</h2>
          <ul>
            <li>Click on a header to sort</li>
            <li>Click again to sort in descending order</li>
            <li>Click again to disable sorting</li>
          </ul>
        </div>

        <div className="card">
          <h2>Transactions</h2>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
