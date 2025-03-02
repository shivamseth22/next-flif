import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-blue-500 flex justify-around p-4'>
            <Link href={"/"}>  <div className='text-xl font-bold text-white'>Flifkart</div></Link>


            <Input type="text" placeholder="Search" className="max-w-xl bg-white text-black " />
            <div className='flex gap-2'>
                <Link href={"/login"}> <Button variant="link" className="bg-white text-black">Login</Button></Link>

                <Button variant="link" className="bg-white text-black">Cart</Button>
            </div>

        </div>
    )
}

export default Navbar