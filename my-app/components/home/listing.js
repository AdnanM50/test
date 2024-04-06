import React from 'react'
import PageTitle from '../common/pageTitle'
import Item from 'antd/es/list/Item'
import Image from 'next/image'

const Listing = () => {

    const items = [
        {
            name: "Puppies",
            description: "Bully Mall Marketplace® is the only website that exclusively lists puppies from AKC-Registered litters, so you can choose a breeder with confidence."
        },
        {
            name: "Trainers",
            description: "Marketplace for Trainers helps you match your dog training goals with the perfect trainer for you and your dog's needs, from Canine Good Citizen preparation to performance sports."
        },
        {
            name: "Groomers",
            description: "Each dog groomer listed with AKC Marketplace provides a comprehensive list of services to help you find exactly what your dog needs to be safely and comfortably groomed for life."
        },
    ]

    return (
        <div className="container">
            <PageTitle title={"Listing With Us"} description={'List your services or products and connect with new customers around the world'}></PageTitle>
            <div className="md:mt-[300px] mt-0 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
                {
                    items?.map((item, i) => <>
                        <div key={i} className={`w-full text-center rounded-lg ${i === 2 ? 'md:col-span-3 md:w-1/3 mx-auto' : ''}`}>
                            <h1 className="heading_text_1">{item?.name}</h1>
                            <p className="mt-4 text-secondary_text my-3">{item?.description}</p>
                            <h1 className="font-bold leading-7 tracking-widest">If you are a Breeder <span className='text-tertiary_3'>Create Listing</span></h1>

                        </div>
                        {
                            (i === 0 && <div className='pt-44 md:pt-0 overflow-hidden md:overflow-visible pb-12 md:pb-0'> <div className="w-4/6 mx-auto md:w-full relative bg-primary h-[210px] md:h-[290px] rounded-lg">
                                <div className='flex items-center justify-center'>
                                    <Image className='w-[200px] h-[380px] md:w-[320px] md:h-[520px] mx-auto absolute -bottom-0' src={'/images/cat.png'} height={1000} width={1000} alt="cat"></Image>
                                </div>
                                <Image className='mx-auto absolute -top-20 -right-20' src={'/images/dc_cat1.png'} height={130} width={130} alt="cat"></Image>
                                <Image className='mx-auto absolute -bottom-20 -left-20 rotate-180' src={'/images/dc_cat1.png'} height={130} width={130} alt="cat"></Image>
                            </div> </div>)
                        }
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default Listing