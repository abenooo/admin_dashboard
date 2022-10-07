import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from "../../componets/hooks/useFetch";
import { IoMdArrowBack } from "react-icons/io";
import { buttonStyles } from "../../componets/ReusableStyles";
import styled from "styled-components";
export default function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/users/' + id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div className="review-card">
      {/* <h2>{data.id}</h2>
      <h2>{data.username}</h2>
      <h2>{data.email}</h2>

      <p>{data.body}</p> */}
      <>
      <Section>
        <div className="grid">
          {/* button */}
          <div className="row__one">
            <div className="add__button">
              <div>
                <IoMdArrowBack />
              </div>
              <div className="content">
                <button >
                  Back
                </button>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="row__two">
            <div>
              <div>
                <div className="w-full lg:w-6/6">
                  <div className="bg-white shadow-md rounded my-6">
                    <table className="min-w-max w-full table-auto">
                      <thead>
                        <tr className="bg-gray-600 text-gray-100 uppercase text-sm leading-normal">
                          <th className="py-3 px-6 text-left">Number</th>
                          <th className="py-3 px-6 text-left">Name</th>
                          <th className="py-3 px-6 text-left">Username</th>
                          <th className="py-3 px-6 text-center">email</th>
                          <th className="py-3 px-6 text-center">
                            address street{" "}
                          </th>
                          <th className="py-3 px-6 text-center">
                            address city{" "}
                          </th>
                          <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                      </thead>
                        <tbody >
                          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">
                              {/* {review.id} */}
                              {data.id}
                            </th>
                            <th className="py-3 px-6 text-left">
                              {/* {review.username} */}
                              {data.username}
                            </th>
                            <th className="py-3 px-6 text-left">
                              {/* {review.email} */}
                              {data.email}
                            </th>
                            <th className="py-3 px-6 text-center">
                            {/* <img src={`${url}${review.file.data.url}`}></img> */}
                            {data.email}
                            </th>
                            <th className="py-3 px-6 text-center">
                            {data.email}
                            </th>
                            <th className="py-3 px-6 text-center">
                              {data.role.name === "Public" ? "user": "Admin"}
                            </th>
                            <th className="py-3 px-6 text-center">
                              <div className="flex item-center justify-center">
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  {/* <Link to={`/userDetails/${data.id}`}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                      />
                                    </svg>
                                  </Link> */}
                                </div>
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </tbody>
                
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="mr-2"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      </>
    </div>
  )
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
      margin-top: -30px;
      grid-template-columns: repeat(7, 1fr);
      /* height: 50%; */
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one {
        grid-template-columns: repeat(2, 1fr);
      }
      .row__two {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  .add__button {
    ${buttonStyles};
    padding: 0.3rem;
    margin-top: 0.3rem;
    margin-right: 0.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
  }
`;
