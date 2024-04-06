import { Rate } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';

function Faq() {
    const [open, setOpen] = useState('');

    return (
        <>
            <p className='fredoka text-2xl'>Frequently Asked Question</p>
            <div className='py-5'>
                {
                    [1, 2, 3].map((item, index) => <div key={index}>
                        <div
                            className={`flex cursor-pointer w-full items-center justify-between ${'border-b border-secondary_text'} py-5 text-dark_text transition-all ease-in-out hover:text-primary  relative z-50`}
                            onClick={() => setOpen(open == item ? false : item)}
                        >
                            <h4 className={`fredoka text-2xl ${open == item && 'text-primary'} `}>Which package should I purchase?</h4>
                            <div className="!h-5 !w-5">
                                <FiPlus size={18} className={open == item ? 'rotate-45 transform text-primary ' : ''} />
                            </div>
                        </div>
                        <div className={open == item ? 'mb-5 text-lg text-secondary_text' : 'hidden'}>
                            <p className='paragraph_1 text-secondary_text'>I am a design enthusiast with a proven track record of over 3 years in the industry. I have worked as a Remote Designer for two companies based in USA. Additionally, I have completed over 150 freelance design projects, demonstrating my versatility and range of expertise.</p>
                        </div>
                    </ div>)
                }
            </div>
        </>
    )
}

export default Faq