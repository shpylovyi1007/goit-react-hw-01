import transactions from "../../transaction.json";
import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = () => {
  return (
    <table className={css.table}>
      <thead className={css.tableTitle}>
        <tr className={css.tableInfo}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.data}>
        {transactions.map((transaction) => (
          <tr className={css.line} key={transaction.id}>
            <td className={css.inform}>{transaction.type}</td>
            <td className={css.inform}>{transaction.amount}</td>
            <td className={css.inform}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
