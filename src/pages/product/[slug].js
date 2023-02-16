import Navbar from 'components/Navbar'
import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'

const Slug = () => {
    return (
        <>
            <Navbar />
            {/* <div className='w-screen'> */}
            <div className='flex flex-col sm:flex-row mt-8 md:gap-10 sm:w-4/5 m-auto md:w-full md:px-4 sm:gap-32 gap-8   lg:w-4/5 justify-between '>

                <div className='flex flex-col sm:items-start sm:justify-start items-center justify-center flex-initial   '>
                    <img src="https://rukminim1.flixcart.com/image/416/416/l4ssfww0/regionalbooks/b/6/x/indian-economy-english-1st-edition-for-upsc-cse-prelims-mains-by-original-imagfm5peczatstg.jpeg?q=70" alt='img' className='sticky top-4 left-0' />

                </div>


                <div className='flex flex-col  gap-4 flex-1 px-1'>

                    <h2 className='text-xl'>Indian Economy (English | 1st Edition) For UPSC CSE Prelims & Mains By Study IQ  (Paperback, StudyIQ Publications)</h2>

                    <div className='flex gap-4 '>
                        <p className='flex items-center justify-start px-1 rounded-md bg-green-600 text-white border-r-2'>4.5<AiFillStar /></p>
                        <p className='text-gray-500 font-semibold'>1000 Ratings & 100 Reviews</p>

                    </div>

                    <div>
                        <p className='text-green-700 font-semibold'>special peice</p>
                        <div className='flex items-center gap-3'>
                            <h3 className='text-slate-900 font-semibold flex items-center justify-start text-3xl'><BiRupee />555</h3>
                            <p className='line-through flex text-gray-400 items-center text-lg'> <BiRupee />258 </p>
                            <p className='text-green-600 font-semibold text-lg'>28% off </p>
                        </div>
                    </div>

                    <div className='flex md:gap-2  '>
                        <p className=' singleProduct-title'>Author</p>
                        <p className='  singleProduct-desc text-blue-700 font-semibold cursor-pointer'>
                            StudyIQ Publications</p>
                    </div>
                    <div className='flex md:gap-2 '>
                        <p className=' singleProduct-title'>Services</p>
                        <p className='  singleProduct-desc'>Cash on Delivery available ? </p>
                    </div>
                    <div className='flex md:gap-2 '>
                        <p className=' singleProduct-title'>seller</p>
                        <p className=' singleProduct-desc'>7 Days Replacement Policy </p>
                    </div>
                    <div className='flex md:gap-2  '>
                        <p className=' singleProduct-title'>Status</p>
                        <p className='  singleProduct-desc text-blue-700 font-semibold cursor-pointer'>
                            In Stock</p>
                    </div>

                    <div className='flex md:gap-2 lg:gap-0'>
                        <p className=' singleProduct-title'>Description</p>
                        <p className='  singleProduct-desc'>Indian Economy launched by Study IQ Publications aims to address the syllabus of Economy holistically from the UPSC Civil Services Examinations perspective. The book has been updated as per the latest examination pattern and is also suitable for all competitive examinations. The book has been prepared by experienced faculties and subject-matter experts, keeping in mind the challenges faced by the students while preparing for competitive exams. Important Features of the Book: Simplified language for technical subject like Economy will cater to all students who are new to the syllabus and those who have already given attempts. Example driven approach for easy understanding of complex concepts. All ideas of Economic Survey from the last 5 years have been covered in respective chapters. Previous Year Questions(Prelims and Mains) are added at end of the chapters for students to apply their knowledge and know the trends. 'Case Studies' and 'Do You Know' sections are added for making learning exciting. Extensive use of tables for comparison and better understanding. </p>
                    </div>


                    <div className=' flex flex-col gap-8 mt-8'>
                        <h1 className='text-3xl font-semibold'>Specifications</h1>
                        <div className='flex flex-col gap-6'>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'>  Book </p>
                                <p className='sp-specification-desc'>
                                    Indian Economy (English | 1st Edition) For UPSC CSE Prelims & Mains By Study IQ</p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'>  Author </p>
                                <p className='sp-specification-desc'>StudyIQ Publications
                                </p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'>  Binding </p>
                                <p className='sp-specification-desc'>Paperback</p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'>  Publishing Date
                                </p>
                                <p className='sp-specification-desc'>2022</p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'> Publisher
                                </p>
                                <p className='sp-specification-desc'>StudyIQ Publications
                                </p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'>  Edition
                                </p>
                                <p className='sp-specification-desc'>1</p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'> Number of Pages

                                </p>
                                <p className='sp-specification-desc'>450</p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'>  Language
                                </p>
                                <p className='sp-specification-desc'>English, Hindi</p>
                            </div>
                            <div className='sp-specification'>
                                <p className='sp-specification-title'>  Subject
                                </p>
                                <p className='sp-specification-desc'>UPSC, Indian Economy
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-10  m-auto mt-10 mb-4
'>
                        <Link href='/cart'>
                            <button
                                className="primary-button mt-2 px-7"
                                type="button"

                            >
                                Add to cart
                            </button>
                        </Link>
                        <Link href='/'>
                            <button
                                className="primary-button px-5  mt-2"
                                type="button"

                            >
                                Back To Product
                            </button>
                        </Link>
                    </div>

                </div>


            </div>
            {/* </div> */}
        </>
    )
}

export default Slug