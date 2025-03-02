import Link from "next/link";

const BeautyCategoryDetail = async () => {

    const res = await fetch('https://dummyjson.com/products/category/beauty')
    const result = await res.json();
    console.log("beauty", result)

    return (
        <div className='border rounded-lg p-4 m-4'>
            <h2 className='font-semibold'>Best Deal on Beauty Products</h2>
            <div className="flex">
                {result?.products?.map((item, index) => {
                    return (
                        <Link href={"explore/" + item?.slug} key={index} className="cursor-pointer hover:scale-105 transition-all duration-300 " >

                            <div className="border bg-gray-100 rounded-lg h-40 w-40">
                                {/* <Image src={item?.url} width={100} height={100} alt='not found' /> */}
                            </div>
                            <span className="">{item?.title}</span>
                        </Link>
                    )
                })}

            </div>

        </div>
    )
}

export default BeautyCategoryDetail