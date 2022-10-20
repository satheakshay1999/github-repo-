import Post from "./Post";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc`
      );
      setposts(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  const fetchData = async (currentPage) => {
    let res = await axios.get(
      `https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=${currentPage}`
    );
    return res.data;
  };
  const handleChangeClick = async (data) => {
    // console.log(data);
    setLoading(true);
    let currentPage = data.selected + 1;
    const formServer = await fetchData(currentPage);
    setposts(formServer);
    setLoading(false);
  };
  return (
    <>
      <Post loading={loading} posts={posts} />
      <ReactPaginate
        previousLabel={`prev`}
        nextAriaLabel={`next`}
        breakLabel={`...`}
        pageCount={100}
        marginPagesDisplayed={5}
        pageRangeDisplayed={10}
        onPageChange={handleChangeClick}
        containerClassName={`pagination justify-content-center container`}
        pageClassName={`page-item`}
        pageLinkClassName={`page-link`}
        previousClassName={`page-item`}
        previousLinkClassName={`page-link`}
        nextClassName={`page-item`}
        nextLinkClassName={`page-link`}
        breakClassName={`page-item`}
        breakLinkClassName={`page-link`}
        activeClassName={`active`}
      ></ReactPaginate>
    </>
  );
};

export default Home;
