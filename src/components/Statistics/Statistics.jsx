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

const Statistics = ({title, stats}) => {
  return (
    <div>
      <section className={css.statistics}>
  {title && <h2 className={css.stat_title}>{title}</h2>}

  <ul className={css.stat_list}>
    {stats.map(({ id, label, percentage }) => (
      <li className={css.item} style={{backgroundColor: getRandomColor()}} key={id}>
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

  export default Statistics;