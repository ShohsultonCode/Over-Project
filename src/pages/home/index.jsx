import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Server from '../../API/';
import { useDispatch } from 'react-redux';
import { setPostData } from "../../stories/postData";
import { NavLink } from "react-router-dom"; // Import NavLink
import LoadingPage from '../../components/Loading'
import SearchPosts from '../../pages/SearchPosts'

const index = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        const getData = async () => {
            try {
                const fromData = await Server.getPosts();
                dispatch(setPostData(fromData));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [dispatch]);

    const postdata = useSelector((e) => e.postData);

    return (
        <div className="container mt-5">
            {isLoading ? (
                <LoadingPage /> // Show loading spinner while data is being fetched
            ) : (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Post content */}
                            {postdata.data && postdata.data.map((post) => (
                                <article key={post._id}>
                                    {/* Post header */}
                                    <header className="mb-4">
                                        {/* Author information */}
                                        <div className="d-flex align-items-center ">
                                            <img
                                                src={`http://localhost:7000/images/${post.blog_user.user_image}`}
                                                alt="Author"
                                                className="img-fluid rounded me-3"
                                                style={{ maxWidth: '30px' }} // Adjust the max width as needed
                                            />
                                            <div>
                                                <h5 className="fw-bolder mb-1">
                                                    Author: {post.blog_user.user_first_name} {post.blog_user.user_last_name}
                                                </h5>
                                                <div className="text-muted fst-italic">
                                                    Posted on {new Date(post.blog_date).toLocaleDateString()}
                                                </div>
                                            </div>
                                            {/* Post title in the right corner */}
                                            <div className="ms-auto">
                                                <h2 className="fw-bolder mb-1">{post.blog_title}</h2>
                                            </div>
                                        </div>
                                    </header>
                                    <figure className="mb-4">
                                        <img
                                            className="img-fluid rounded"
                                            src={`http://localhost:7000/images/${post.blog_image}`}
                                            alt="..."
                                        />
                                    </figure>
                                    {/* Post content */}
                                    <section className="mb-5">
                                        <p className="fs-5 mb-4">{post.blog_content}</p>
                                    </section>
                                </article>
                            ))}
                        </div>
                        {/* Side widgets */}
                        <SearchPosts />
                    </div>
                </div>
            )}
        </div>
    )
}

export default index;
