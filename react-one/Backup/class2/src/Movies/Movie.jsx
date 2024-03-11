import React,{Component} from "react";
class Movie extends Component{
    movie_Name='KGF'
    movie_Img= 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-chapter-2-et00326506-11-04-2022-11-16-18.jpg'

    render(){
        return <div className='container mt-5'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h3>Movie Details</h3>
                        </div>
                        <div className="card-body">
                            <h4>Movie Name:{this.movie_Name}</h4>
                            <img src={this.movie_Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Movie 