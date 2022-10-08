import React from "react";
import styled from "styled-components";
import Card from "./Card";
import FAQ from "./FAQ";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
// import { data } from "autoprefixer";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import { data } from "autoprefixer";
// import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
// const ARCHIVES = gql`
//   query GetArchive{
//     archives{
//       data{
//         id
//         attributes{
//           title
//           description
//           updatedAt
//           publishedAt
//         }
//       }
//     }
//   }
// `;
// console.log(ARCHIVES)
export default function Dashboard() {
  // const [error, setError] = useState(null);
  // const [archives, setArchives] = useState([]);
  // const [posts, setPost] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/archives")
  //     .then(({data}) =>  setArchives(data))
  //      .catch((error) => setError(error));
  // }, []);
  // useEffect(() => {
  // 	axios
  // 		.get("https://jsonplaceholder.typicode.com/posts")
  // 		.then(res => {
  //       // console.log(res.data)
  //       setPost(res.data)
  // 		})
  // 		.catch(err => {
  // 			console.log(err)
  // 		})
  // }, [])

  // if (error) {
  //   return <div>An eror occured {error.message}</div>;
  // }

  // use stat
  // const { loading, data, error } = useFetch(
  //   "https://jsonplaceholder.typicode.com/users"
  // );
  // // const {loading,data,error} = useQuery(ARCHIVES)
  // if (loading) return <p className="">loading</p>;
  // if (error) return <p>error</p>;
  // console.log(data);
  return (
    <Section>
      <div>
    
        {/* {data.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.id}</div>
            <h2>{review.name}</h2>
            <h2>{review.username}</h2>
            <h2>{review.email}</h2>
            <h2>{review.address.street}</h2>
            <h2>{review.suit}</h2>

            <small>console list</small>

            <p>{review.address.zipcode.substring(0, 200)}...</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        ))} */}
        {/* <div className="overflow-x-auto">
          <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
              <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Project</th>
                                <th className="py-3 px-6 text-left">Client</th>
                                <th className="py-3 px-6 text-center">Users</th>
                                <th className="py-3 px-6 text-center">Status</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                {data.map((review) => (
                  <tbody key={review.id}>

                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">{review.name}</th>
                      <th className="py-3 px-6 text-left">{review.username}</th>
                      <th className="py-3 px-6 text-center">{review.email}</th>
                      <th className="py-3 px-6 text-center">{review.address.street}</th>
                      <th className="py-3 px-6 text-center">{review.suit}</th>
                         <th className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                          <Link to={`/details/${review.id}`}>
                                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            </Link>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </th>
                    </tr>
                  </tbody>
                        ))}
                  <tbody className="text-gray-600 text-sm font-light">
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <Navbar />
      <Card />
      <FAQ /> */}
      {/* {data.map(archive => (
        <div key={archive.id} className="archive-id">
          <div>
           <h3>{archive.id}</h3>  */}
      {/* <h3>{archive.attributes.description}</h3>  */}
      {/* </div>
        </div>
      ))} */}
      {/* <ul>
        {data.archives.map((post) => (
          <div key={post.id} className="review-card">
            <div className="rating">{post.title}</div>
            <h2>{post.description}</h2>

            {/* <small>console list</small> */}

      {/* <p>dfdf</p> */}
      {/* <Link to={`/details/${post.id}`}>Read more</Link> */}
      {/* </div>
         ))} 
      </ul> */}
      {/* <Navbar />

      <div className="grid">
        <div className="row__one">
       
           <div className="faqs" style={{backgroundColor:"red"}}>
        {data && data.map && data((faq) => {
          return (
            <div className="faq" key={data.id}>
              <div className="info">
                {faq.id}
                <h4>{faq.title}</h4>
              </div>
            </div>
          );
        })}
      </div> 
      {/* </div> */}  
       <Navbar />
       <div className="grid">
      <div className="row__two">
 
      <Card />
      <FAQ />
      </div>
        </div>
      {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
      {/* </div> */}
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
