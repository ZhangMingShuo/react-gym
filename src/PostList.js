import React, {Component} from 'react';
import PostItem from "./PostItem";

class PostList extends Component {
  handleVote(id){
    const posts = this.state.posts.map(item =>{
      return item.id===id?{...item,vote:++item.vote}:item;
    })
    this.setState({posts})
  }

  constructor(props) {
    super(props);
    this.state={
      posts:[]
    };
    //bind
    this.handleVote = this.handleVote.bind(this);
  }

  // componentWillMount() {
  //
  // }

  componentDidMount() {
    this.setState(
        {
          posts: [{
            id:1,title:"comment 1",author:"person 1", date:"2021-06-17 10:00",vote:0
          },{
            id:2,title:"comment 2",author:"person 2", date:"2021-06-17 21:00",vote:0
          },{
            id:3,title:"comment 3",author:"person 3", date:"2021-06-17 23:00",vote:0
          }],
        }
    )
  }
  //
  // componentWillReceiveProps(nextProps) {
  //
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //
  // }
  //
  // componentWillUnmount() {
  //
  // }

  render() {
    return (
        <div>
          <ul>
            {
              this.state.posts.map(item=>
                <PostItem
                  post = {item}
                  onVote = {this.handleVote}
                />
              )
            }
          </ul>
        </div>
    );
  }
}

export default PostList;
