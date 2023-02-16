import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Link from "next/link";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const User = () => {
  return (
     <>
      <Navbar />
      <div className="flex gap-4">
        <Sidebar />
        <div className="w-full mt-8">

          <div className="overflow-x-auto md:col-span-3">
            <div className="flex justify-between">
              <h1 className="mb-4 text-3xl font-semibold">Users</h1>

              {/* {loadingDelete && <div>Deleting item...</div>} */}
              <button
                //   disabled={loadingCreate}
                //   onClick={createHandler}
                className="primary-button"
              >
                {/* {loadingCreate ? 'Loading' : 'Create'} */}
              </button>
            </div>
            {/* {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : ( */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">ID</th>
                    <th className="p-5 text-left">NAME</th>
                    <th className="p-5 text-left">EMAIL</th>
                    <th className="p-5 text-left">PHONE</th>
                    <th className="p-5 text-left">ROLE</th>
            <th className="p-5 text-left">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {products.map((product) => ( */}
                  <tr className="border-b">
                    <td className=" p-5 ">12344abc</td>
                    <td className=" p-5 ">Book</td>

                    <td className=" p-5 ">1200</td>
                    <td className=" p-5 ">history</td>
                    <td className=" p-5 ">2</td>
               

                    <td className=" p-5 flex items-center gap-3 ">
                
                      <Link href={`/admin/product/:id`}>
                        {/* <a type="button" className="default-button"> */}
                        <FiEdit color="green" size="21px" />
                        {/* </a> */}
                      </Link>
                      &nbsp;
                      <button
                      //   onClick={() => deleteHandler(product._id)}
                      //   className="default-button"
                      //   type="button"
                      >
                        <AiOutlineDelete color="red" size="24px" />
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className=" p-5 ">12344abc</td>
                    <td className=" p-5 ">Book</td>

                    <td className=" p-5 ">1200</td>
                    <td className=" p-5 ">history</td>
                    <td className=" p-5 ">2</td>
               

                    <td className=" p-5 flex items-center gap-3 ">
                
                      <Link href={`/admin/product/:id`}>
                        {/* <a type="button" className="default-button"> */}
                        <FiEdit color="green" size="21px" />
                        {/* </a> */}
                      </Link>
                      &nbsp;
                      <button
                      //   onClick={() => deleteHandler(product._id)}
                      //   className="default-button"
                      //   type="button"
                      >
                        <AiOutlineDelete color="red" size="24px" />
                      </button>
                    </td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default User