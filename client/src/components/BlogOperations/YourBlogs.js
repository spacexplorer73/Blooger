import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Blog from "../Dashboard/Blogs/Blog/BlogCard";
import DashboardNavbar from "../Dashboard/Dashboard.Navbar";
import { DashboardAddBtn } from "../Dashboard/Dashboard.Elements";
import { BlogsLoadingContainer as BlogsContainer } from "../Dashboard/Blogs/Blogs";
import { useHistory } from "react-router-dom";

const YourBlogs = () => {
    const blogs = useSelector((state) => state.blogs);
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    return (
            !blogs.length ? (
            <>
                <DashboardNavbar />
                <BlogsContainer>
                    <div className="progress" style={{ 
                        width: '50%'
                    }}>
                        <div className="indeterminate"></div>
                    </div>
                </BlogsContainer>
            </>
            ) : (
                <>
                    <DashboardNavbar />
                    <YourBlogsContainer>
                        <h4>Your Blogs</h4>
                        <br />
                        {blogs.map((blog) => (
                            ((user?.result._id === blog?.creator || user?.result.googleId === blog?.creator) ? 
                            <>
                                <div key={blog._id}>
                                    <Blog blog={blog}/>
                                </div>
                            </>
                            :
                            null
                            )
                        ))}
                    </YourBlogsContainer>
                    <DashboardAddBtn>
                        <a className="btn-floating btn-large waves-effect waves-light #438D80" onClick={() => { history.push('/createblog'); } } ><i className="material-icons">add</i></a>
                    </DashboardAddBtn>
                </>
                )
    )
}

export default YourBlogs;

const YourBlogsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 80px 20px 0;
    max-width: 75%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`