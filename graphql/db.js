let movies = [
    {
        id: 0,
        name: "Star Wars",
        score: 8
    }, {
        id: 1,
        name: "Avengers4 ",
        score: 9
    }, {
        id: 2,
        name: "Load of the Rings",
        score: 8
    }, {
        id: 3,
        name: "X-Man",
        score: 8
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === (id));
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== (id));
    if (movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};