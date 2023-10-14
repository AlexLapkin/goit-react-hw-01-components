import css from './Transactions.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const TransactionsHistory = ({items}) => {
  return (
    <div>
      <table className={css.transaction_history}>
  <thead className={css.transaction_history_head}>
    <tr>
      <th className={css.transaction_history_table_head}>TYPE</th>
      <th className={css.transaction_history_table_head}>AMOUNT</th>
      <th className={css.transaction_history_table_head}>CURRENCY</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
    <tr key={id} style={{backgroundColor: getRandomColor() }}>
      <td className={css.transaction_history_table_row}>{type}</td>
      <td className={css.transaction_history_table_row}>{amount}</td>
      <td className={css.transaction_history_table_row}>{currency}</td>
    </tr>
    ))
    }
  </tbody>
</table>
    </div>
  );
};

TransactionsHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,  
  };