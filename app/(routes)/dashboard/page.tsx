import React from 'react'
import ImageUpload from "./_components/ImageUpload"
import Hero from "./_components/Hero"


function Dashboard() {
    return (
        <div className='xl:px-20'>
            {/* <h2 className='font-bold text-3xl'>Convert Wireframe to code</h2> */}
            <ImageUpload />
            {/* <Hero /> */}
        </div>
    )
}

export default Dashboard