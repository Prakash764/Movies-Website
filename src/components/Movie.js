import styles from './style.module.css'


const Movie = props => (
    <div className={styles.movie}>
      <figure>
        <img src={props.Poster} alt="pofavo"/>
        <figcaption>
          <h2 className={styles.movie_title}>{props.Title}</h2>
        </figcaption>
      </figure>
    </div>
  );
  export default Movie