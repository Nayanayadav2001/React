import React from "react";
class Movie extends React.Component{
    movie_Name='KGF'
    movie_Actor='Yash'
    movie_Actress='Radhika'

    render(){

        return <div>
            <h1>Movie Component</h1>
            <h2>Movie Name:{this.movie_Name}</h2>
            <h2>Actor Name:{this.movie_Actor}</h2>
            <h2>Actress Name:{this.movie_Actress}</h2>
        </div>
    }
}

export default Movie