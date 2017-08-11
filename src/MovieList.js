import React, {Component} from "react"


export default class MovieList extends Component {
    get movies() {
        if (this.props.movies.length < 1) {
            return <p>Search a movie</p>
        } else {
                    return this.props.movies.map((movie, i) => (
           <li key={i}>
                <table>
                <tr>
                    <th>Title</th>
                    <td>Year</td>
                    <td>Poster</td>
                </tr>
                <tr>
                    <th>{movie.Title}</th>
                    <td>{movie.Year} </td>
                    <td>
                        <img src = {movie.Poster}>
                        </img>
                    </td>
                </tr>

                </table>
        </li> 
        ))

        }
    }
    render() {
        return (
            <ul>
                {this.movies}     
                
            </ul>
        );
    }
} 
