import styles from './style.module.css';

const Search = props => (
  <form className={styles.search} onInput={event => props.onInput(event.target.value)}>
    <input type="search" value={props.query} placeholder={props.placeholder} />
  </form>
);


export default Search;