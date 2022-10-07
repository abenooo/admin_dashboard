import React, { useState } from "react";
import styled from "styled-components";
import { buttonStyles } from "../../componets/ReusableStyles";
import { AiOutlinePlus } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import useFetch from "../../componets/hooks/useFetch";
export default function ListArchive() {
  const url = "http://localhost:1337"
  const [archiveModal, setArchiveModal] = useState(false);
  const { loading, data, error } = useFetch(
    "http://localhost:1337/archives"
  );
  // const {loading,data,error} = useQuery(ARCHIVES)
  if (loading) return <p className="">loading</p>;
  if (error) return <p>error</p>;
  // console.log(data.parse());
  return (
    <>
      <Section>
        <div className="grid">
          {/* button */}
          <div className="row__one">
            <div className="add__button">
              <div>
                <AiOutlinePlus />
              </div>
              <div className="content">
                <button onClick={() => setArchiveModal(true)}>
                  Add Archive
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
                      {data.map((review) => (
                        <tbody key={review.id}>
                          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">
                              {review.id}
                            </th>
                            <th className="py-3 px-6 text-left">
                              {review.title}
                            </th>
                            <th className="py-3 px-6 text-left">
                              {review.categories.id}
                            </th>
                            <th className="py-3 px-6 text-center">
                            {/* <img src={`${url}${review.file.data.url}`}></img> */}
                            {review.file.name}
                            </th>
                            <th className="py-3 px-6 text-center">
                            {review.file.id}
                            </th>
                            <th className="py-3 px-6 text-center">
                              {review.title}
                            </th>
                            <th className="py-3 px-6 text-center">
                              <div className="flex item-center justify-center">
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                  <Link to={`/archiveDetails/${review.id}`}>
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
                                  </Link>
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
                      ))}
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
      {archiveModal ? (
        <Section>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-9/12 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add New Archive</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setArchiveModal(false)}
                  >
                    {/* <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                  x
                </span> */}
                    <GiCancel className="h-6 w-6" />
                  </button>
                </div>
                <div className="py-6 px-6 lg:px-8">
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Archive title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter archive title"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Archive File
                      </label>
                      <input
                        type="file"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter archive title"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Archive Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      ></textarea>
                      {/* <input type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="enter archive title" required/> */}
                    </div>
                    <div className="flex justify-between"></div>
                  </form>
                </div>
                <div className="flex items-center justify-center mx-6 p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <div className="flex flex-row flex-wrap justify-around">
                    <button
                      onClick={() => setArchiveModal(false)}
                      type="submit"
                      className=" mx-6 w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className=" mx-6 w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add New Archive
                    </button>
                  </div>
                  {/* <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setArchiveModal(false)}
              >
                Close
              </button> */}
                  {/* <button
                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setArchiveModal(false)}
              >
                Submit
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ) : null}
    </>
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
