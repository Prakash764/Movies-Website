import React,{Component} from 'react'
import Search from './components/SearchBar' 
import Movies from './components/Movies'

class App extends 
Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      query: ''
    };
    
    this.onInput = this.onInput.bind(this);
  }
  
  onInput(query) {
    this.setState({
      query
    });
    
    this.searchMovie(query);
  }
  
  getPopularMovies() {
    const url = `https://www.omdbapi.com/?apikey=45f0782a&s=war`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.Search
        })
      });
  }
  
  searchMovie(query) {
    const url = `https://www.omdbapi.com/?query=${query}&apikey=45f0782a&s=war`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.Search
        })
      });
  }
  
  componentDidMount() {
    this.getPopularMovies();
  }
  
  render() {
    const { movies, query } = this.state;
    const isSearched = query => item => !query || item.Title.toLowerCase().includes(query.toLowerCase());
    
    return (
      <div className="app">
        <Search query={query} onInput={this.onInput} placeholder="Search for Movie Title …" />
        <Movies movies={movies.filter(isSearched(query))} />
      </div>
    );
  }
}

export default App;