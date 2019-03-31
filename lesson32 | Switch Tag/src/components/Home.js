import React, {Component} from 'react';
import axis from 'axios'
import {Link} from 'react-router-dom'

//We converted the const with class because we want to use some funtions and states inside it
class Home extends Component {
    state = {
        posts : []
    }
    //Call this function when buliding the component
    componentDidMount(){
        //http request to get the JSON data
        axis.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                //console.log(res)
                this.setState({
                    //we need to take the first 10 ites
                    posts: res.data.slice(0, 10) 
                })
                console.log(this.state.posts)
            })
    }
    render(){
        // Get posts from the state
        const {posts} = this.state
        const postList = posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={"/"+post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        ) 
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;