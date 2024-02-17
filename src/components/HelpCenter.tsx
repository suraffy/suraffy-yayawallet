import Card from "./common/Card";

const HelpCenter = () => {
  return (
    <div className="my-40 bg-blue-50 py-20" id="help-center">
      <div className="container">
        <div className="flex gap-y-8 justify-center items-center sm:gap-y-0 sm:gap-x-8 sm:items-stretch flex-col sm:flex-row">
          <Card
            header="Digital wallet payment"
            body="An advanced digital wallet payment system in which we are integrating various functionalities of digital transactions."
          />
          <Card
            header="Search transaction"
            body="Search transaction by sender account, receiver account, cause, or transaction Id."
          />

          <Card
            header="Sort transactions"
            body="Sort transaction by clicking the one of the table header. Click again to sort in descending order. And click again for the third time to remove sorting."
          />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
