import Header from './layout/Header';
import Footer from './layout/Footer';
import Preloader from './layout/Preloader';
import React from 'react';
import { Movies } from './components/Movies';
import { Search } from './layout/Search';
import { SearchType } from './layout/SearchType';

const API_KEY = 'aed6d25f';
class App extends React.Component {
    state = {
        searchText: 'force',
        movies: [],
        loading: true,
        error: null,
        searchType: ''
    }

    searchTimeout = null;

    handleSearchChange = (searchText) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    
    this.setState({ searchText });

    this.searchTimeout = setTimeout(() => {
      this.searchMovies(this.state.searchText, this.state.searchType);
        }, 500);
    };

    handleSearchSubmit = (searchText) => {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchMovies(this.state.searchText, this.state.searchType);
        };

    handleSearchTypeChange = (searchType) => {
        this.setState({ searchType }, () => {
            this.searchMovies(this.state.searchText, this.state.searchType);
        });
    }

    searchMovies = (searchText, searchType) => {
        this.setState({ loading: true, error: null });

        if (!searchText) {
            this.setState({ movies: [], loading: false });
            return;
        }

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&type=${searchType}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('fetch error' + response.status)
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.Search || [],
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loading: false
                });
            });
    }

    componentDidMount() {
        this.searchMovies(this.state.searchText, this.state.searchType);
    }

    render() {
        const { movies, loading, error } = this.state;

        return (
            <div>
                <Header />
                <main className="container content">
                    <Search 
                        searchText={this.state.searchText} 
                        onSearchChange={this.handleSearchChange} 
                        onSearchSubmit={this.handleSearchSubmit}
                    />
                    <SearchType 
                        searchType={this.state.searchType} 
                        onSearchTypeChange={this.handleSearchTypeChange}
                    />
                    {loading && <Preloader />}
                    {error && <div>Ошибка: {error}</div>}
                    {!loading && !error && <Movies movies={movies} />}
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;