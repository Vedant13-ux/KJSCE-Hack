import React from 'react';
import BlogCard from './BlogCard';
import '../index2.css';
import Nav from '../containers/global/Nav';
import Footer from '../containers/global/Footer'
import BlogContent from './BlogContent';


function Blog() {
    return (
        <div>
            <Nav />
            <div className="course_card">
                <div className="blogCard"><BlogCard /></div> 
                <div className="blogCard"><BlogCard /></div>
                <div className="blogCard"><BlogCard /></div>
                <div className="blogCard"><BlogCard /></div>
                <div className="blogCard"><BlogCard /></div>
                <div className="blogCard"><BlogCard /></div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog
