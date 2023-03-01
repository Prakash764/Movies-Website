import styles from './style.module.css'
import React from "https://cdn.skypack.dev/react";
import PropTypes from "https://cdn.skypack.dev/prop-types";

const Movie = props => (
  <div className={styles.movie}>
    <figure>
      <img src={props.Poster} alt="Post" />
      <figcaption>
        <h2 className={styles.movie_title}>{props.Title}</h2>
      </figcaption>
    </figure>
  </div>
);

Movie.propTypes = {
  id         : PropTypes.number.isRequired,
  Title      : PropTypes.string.isRequired,
  Poster     : PropTypes.string
};
export default Movie