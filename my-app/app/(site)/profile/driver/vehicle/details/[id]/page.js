import React from 'react';
import { Card, Row, Col } from 'antd';
import Button from '../button';
import { useRouter } from 'next/navigation';

const { Meta } = Card;

const VehicleDriver = ({ params }) => {
    const [vehicle,getVehicle,{load}]=useFetch(vehicleDetails);

    if (!vehicle) {
        return null;
    }

    // const handleEdit = () => {
    //     push(`/driver/vehicle/edit/${vehicle?._id}`)
    // }

    return (
        <div className='mt-4'>
            <div className='flex justify-between items-center bg-white p-4 shadow-md border'>
                <h1 className="text-2xl font-bold">Vehicle Details</h1>
                {/* <Button type="primary" onClick={handleEdit}>Update Vehicle</Button> */}
            </div>
            <Row gutter={[16, 16]} className='mt-8'>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card
                        hoverable
                        cover={<img alt={vehicle?.name} src={vehicle?.images[0]} />}
                        className="rounded-lg"
                    >
                        <Meta title={vehicle?.name} description={`Year: ${vehicle?.year}`} />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={16} xl={16}>
                    <Card className="rounded-lg">
                        <div className="vehicle-details">
                            <h2 className="text-2xl font-bold mb-4">Vehicle Details</h2>
                            <ul className='md:text-lg py-1 font-semibold header_6'>
                                <li><span >Category:</span> {vehicle?.category?.name}</li>
                                <li><span >Max Power:</span> {vehicle?.max_power}</li>
                                <li><span>Max Speed:</span> {vehicle?.max_speed}</li>
                                <li><span>Capacity:</span> {vehicle?.capacity} passengers</li>
                                <li><span>Color:</span> {vehicle?.color}</li>
                                <li><span>Fuel Type:</span> {vehicle?.fuel_type}</li>
                                <li><span>Mileage:</span> {vehicle?.mileage} km/l</li>
                                <li><span>Gear Type:</span> {vehicle?.gear_type}</li>
                                <li><span>AC:</span> {vehicle?.ac ? "Available" : "Not Available"}</li>
                                <li><span>Vehicle Number:</span> {vehicle?.vehicle_number}</li>
                                <li><span>Status:</span> {vehicle?.status}</li>
                                <li><span>Online:</span> {vehicle?.online ? "Yes" : "No"}</li>
                                <li><span>Created At:</span> {new Date(vehicle?.createdAt).toLocaleDateString()}</li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>


        </div>
    );
};

export default VehicleDriver;
