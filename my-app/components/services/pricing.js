import { Col, Row, Switch } from 'antd'
import React from 'react'
import PrimaryButton from '../button/primary_button'

const Pricing = () => {
    return (
        <div>
            <div className='flex items-center justify-end border-b pb-3 border-primary my-14'>
                <div className='flex items-center gap-4'>
                    <h1 className='font-bold text-primary text-lg'>Offer Packages</h1>
                    <Switch></Switch>
                </div>
            </div>
            <div>
                <h1 className='heading_text_2 !font-roboto'>Shop See examples</h1>

                <div className='mt-5 pricing-table'>
                    <table className='w-full border border-[#ACB5BD]'>
                        <thead className='text-center w-full'>
                            <tr className='text-center bg-[#FFEBE3]'>
                                <th rowSpan={4} className='bg-[#FFEBE3] w-1/4 py-9 border-t border-[#ACB5BD]'></th>
                                <th className="w-1/4 border border-[#ACB5BD]">BASIC</th>
                                <th className="w-1/4 border border-[#ACB5BD]">STANDARD</th>
                                <th className="w-1/4 border border-[#ACB5BD]">PREMIUM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                [...Array(9)].map((data, index) => <tr key={index} className='text-center'>
                                    <td className={`py-9 ${index == 0 || 1 ? 'bg-[#FFEBE3]' : ' border border-[#FFEBE3]'}`}>{(index == 0 || index == 1 || index == 2) ? '' : 'aaa'}</td>
                                    <td className='border border-[#ACB5BD]'>$100</td>
                                    <td className='border border-[#ACB5BD]'>$150</td>
                                    <td className='border border-[#ACB5BD]'>$200</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-[#FFEBE3] mt-[60px] py-9 px-5 space-y-3 text-base rounded-[10px] border border-primary'>
                <Row>
                    <Col span={12}>Basic</Col>
                    <Col span={9}>
                        <input className='w-full py-3 rounded outline-none border border-[#ACB5BD] px-3'></input>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>Standard</Col>
                    <Col span={9}>
                        <input className='w-full py-3 rounded outline-none px-3  border border-[#ACB5BD]'></input>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>Premium</Col>
                    <Col span={9}>
                        <input className='w-full py-3 rounded outline-none px-3 border border-[#ACB5BD]'></input>
                    </Col>
                </Row>
            </div>
            <div className='flex justify-end mt-10'>
                <PrimaryButton >Continue</PrimaryButton>

            </div>
        </div>
    )
}

export default Pricing