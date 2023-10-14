import css from  './Statistics.module.css';
import PropTypes from 'prop-types';


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Statistics = ({stats}) => {
  return (
    <div>
      <section className={css.statistics}>
  <h2 className={css.stat_title}>UPLOAD STATS</h2>

  <ul className={css.statList}>
    {stats.map(({ id, label, percentage }) => (
      <li className={css.item} style={{backgroundColor: getRandomColor()}}>
      <span className={css.stat_text}>{label}</span>
      <span className={css.stat_text_percent}>{percentage}</span>
    </li>
    ))
}
    </ul>
</section>
    </div>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  };