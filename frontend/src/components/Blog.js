import React from 'react';
import BlogCard from './BlogCard';
import '../index2.css';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer'
import FloatingButtons from './FloatingButton';
import { apiCall } from '../services/api'


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }
    componentDidMount() {
        apiCall('get', '/blog/allBlogs', '')
            .then((blogs) => {
                this.setState({ blogs })
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="course" >
                <Nav user={this.props.user} logout={this.props.logout} />
                <div className="course_wrap">
                    <div className="course_title">
                        <h1>----- Blog -----</h1>
                    </div>

                    <div className="course_card">
                        {this.state.blogs.map(blog => {
                            return <div className="blogCard"><BlogCard key={blog._id} blog={blog} /></div>
                        })}
                        <div className="add_icon"><FloatingButtons /></div>


                    </div>

                </div>


                <Footer />
            </div>
        )
    }
}

export default Blog
