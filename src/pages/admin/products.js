import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Link from "next/link";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";


const products = ({ products }) => {

  const deleteHandler=async(productId)=>{
await axios.delete(`http://localhost:3000/api/products/?productId=${productId}`).then((res)=>{
  alert('dlee')

  console.log('res',res);
  console.log('res products',products);


 

})



  }

  return (
    <>
      <div
        className="flex flex-col
    "
      >
        <Navbar />
        <div className="flex gap-4">
          <Sidebar />
          <div className="w-screen mt-8">
      
            <div className="flex justify-between">
              <h1 className="mb-4 text-3xl font-semibold">Products</h1>

      
              <Link href="/admin/product/add">
                <button
                  //   disabled={loadingCreate}
                  //   onClick={createHandler}
                  className="primary-button px-6 font-semibold"
                >
                  {/* {loadingCreate ? 'Loading' : 'Create'} */} Create
                </button>
              </Link>
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
                    <th className="p-5 text-left">PRICE</th>
                    <th className="p-5 text-left">CATEGORY</th>
                    <th className="p-5 text-left">COUNT</th>
                    <th className="p-5 text-left">AUTHOR</th>
                    <th className="p-5 text-left">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td className=" p-5 ">{item._id.slice(0,5)}</td>
                      <td className=" p-5 ">{item.name}</td>
                      <td className=" p-5 ">${item.price}</td>
                      <td className=" p-5 ">{item.category}</td>
                      <td className=" p-5 ">{item.countInStock}</td>
                      <td className=" p-5 ">{item.author}</td>
                      <td className=" p-5 flex items-center  gap-3 ">
                        <Link href={`/admin/product/${item._id}`}>
                          <FiEdit color="green" size="21px" />
                        </Link>
                        &nbsp;
                        <button
                          onClick={() => deleteHandler(item._id)}
                        //   className="default-button"
                          type="button"
                        >
                          <AiOutlineDelete color="red" size="24px" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default products;



export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/products",);
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};
