import Nav from '../containers/global/Nav';
import React from 'react';
import Footer from '../containers/global/Footer'
import { apiCall } from '../services/api'
import Avatar from "@material-ui/core/Avatar";


class BlogContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {},
            start: true
        }
    }
    componentDidMount() {
        apiCall('get', '/blog/blogContent/' + this.props.match.params.id)
            .then((blog) => {
                return this.setState({ blog, start: false });
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {
        if (this.state.start) {
            return <h4>Loading</h4>
        }
        return (
            <div>
                <Nav user={this.props.user} logout={this.props.logout} />

                <div class="ui piled segment" className="blog__content" style={{ marginTop: '400px', maxWidth: '1000px', margin: '0 auto' }}>
                    <li className="avatar" style={{ display: 'inline-flex', alignItems: 'center', paddingBottom: '10px' }}>
                        <Avatar
                            style={{ marginRight: '5px' }}
                            aria-label="recipe"
                        >
                            
                            {this.props.user.name.slice(0, 1)}
                        </Avatar>
                        <div>{this.state.blog.author.name}</div> --
                        <div style={{ marginLeft: 'auto' }}>{new Date(this.state.blog.created).toDateString()}</div>

                    </li>
                    <h4 class="ui header">{this.state.blog.title}</h4>
                    <p>{this.state.blog.content}</p>

                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogContent;