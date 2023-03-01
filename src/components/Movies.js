import Movie from './Movie';
import styles from './style.module.css'

const Movies = props => (
    <ul className={styles.movies}>
      {props.movies.map(movie => (
        <li key={movie.Title}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
  
export default Movies;
  
  
  