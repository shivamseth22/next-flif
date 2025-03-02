// "use client"
import Image from "next/image";
import Link from "next/link";

const Category = async () => {

  const res = await fetch('https://dummyjson.com/products/categories')
  const result = await res.json();
  console.log("result", result)


  // const myImage = {
  //   "beauty" : url
  //   "mobile" : url
  // }

  return (
    <div className='flex justify-center p-4 m-4'>
      <div className='flex space-x-4 text-center '>

        {result.slice(0, 6).map((item, index) => {
          return (
            <Link href={"explore/" + item?.slug} key={index} className="cursor-pointer hover:scale-105 transition-all duration-300" >

              <div className="border bg-gray-100 rounded-lg h-40 w-40">
                {/* <Image src={item?.url} width={100} height={100} alt='not found' /> */}
              </div>
              <span>{item?.name}</span>
            </Link>
          )
        })}

      </div>


    </div>
  )
}

export default Category

