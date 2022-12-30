import React from 'react';

import Posts from '../post/Posts';

const Home = () => (
    <>
        <div className="container">
            <Posts />
        </div>
        <footer className="page-footer font-small" style={{ background: "#007991" }}>
            <div className="container">
                <p className="text-center" style={{ color: "#fff", fontSize: "large", margin: "0", padding: "15px" }}>
                    Made by
                        <a href="" style={{ color: "white" }} > Sundar Kishore Affiq</a>
                </p>
            </div>
        </footer>
    </>
);

export default Home;