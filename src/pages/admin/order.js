import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const Order = () => {
  return (
    
    <>
      <Navbar />
      <div className="flex gap-4">
        <Sidebar />
        <div className="w-full mt-8">
          {/* <div>
          <ul>
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/orders">Orders</Link>
            </li>
            <li>
              <Link href="/admin/products">
                <a className="font-bold">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/admin/users">Users</Link>
            </li>
          </ul>
        </div> */}
          <div className="overflow-x-auto md:col-span-3">
            <div className="flex justify-between">
              <h1 className="mb-4 text-3xl font-semibold">Orders</h1>

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
                    <th className="p-5 text-left">USER</th>
                    <th className="p-5 text-left">DATE</th>
                    <th className="p-5 text-left">TOTAL</th>
                    <th className="p-5 text-left">PAID</th>
                    <th className="p-5 text-left">DELIVERED</th>
                    <th className="p-5 text-left">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {products.map((product) => ( */}
                  <tr className="border-b">
                    <td className=" p-5 ">12344abc</td>
                    <td className=" p-5 ">shaan</td>

                    <td className=" p-5 ">14-03-2023</td>
                    <td className=" p-5 ">18000</td>
                    <td className=" p-5 ">14-03-2023</td>
                    <td className=" p-5 ">not delivered</td>
                    <td className=" p-5 font-semibold text-lg cursor-pointer text-cyan-600 ">
                      <Link href='/'>
                      Details
                      </Link>
 
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className=" p-5 ">12466gbe</td>
                    <td className=" p-5 ">Sharan</td>

                    <td className=" p-5 ">14-03-2023</td>
                    <td className=" p-5 ">18000</td>
                    <td className=" p-5 ">not paid</td>
                    <td className=" p-5 ">15-02-2023</td>

                    <td className=" p-5 font-semibold text-lg cursor-pointer text-cyan-600 ">
                      <Link href='/'>
                      Details
                      </Link>
 
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

export default Order