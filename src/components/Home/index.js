import React, { Component } from "react";
import "./Home.css";
import SearchBar from "../elements/SearchBar";
import Spinner from "../elements/Spinner";
import HeroImage from "../elements/HeroImage";
import FourColGrid from "../elements/FourColGrid";
import LoadMoreBtn from "../elements/LoadMoreBtn";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../config";

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  };

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      })
      .catch(error => console.error("Erorr:", error));
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  searchItems = searchTerm => {
    console.log(searchTerm);
    
    let endpoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    });

    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&pages=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&pages=1`;
    }
    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = "";
    this.setState({ loading: true });

    if (this.state.searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&pages=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchTerm
      }&pages=${this.state.currentPage + 1}`;
    }
  };

  render() {
    return (
      <div className="rmdb-home">
        {this.state.heroImage ? (
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.poster_path}`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
            />
            <SearchBar callback={this.searchItems}  />
          </div>
        ) : null}
        <FourColGrid />
        <Spinner />
        <LoadMoreBtn />
      </div>
    );
  }
}

export default Home;
