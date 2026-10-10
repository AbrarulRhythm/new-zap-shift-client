import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import express from '../../../assets/expres.png';
import nationWide from '../../../assets/nationwide.png';
import fulfillment from '../../../assets/fulfillment.png';
import cod from '../../../assets/cash-on-delivery.png';
import corporate from '../../../assets/corporate.png';
import pReturn from '../../../assets/parcelReturn.png';

const OurServices = () => {
    // Services Details
    const services = [
        {
            title: 'Express  & Standard Delivery',
            desc: 'We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.',
            icon: express,
        },
        {
            title: 'Nationwide Delivery',
            desc: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
            icon: nationWide,
        },
        {
            title: 'Fulfillment Solution',
            desc: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
            icon: fulfillment,
        },
        {
            title: 'Cash on Home Delivery',
            desc: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
            icon: cod,
        },
        {
            title: 'Corporate Service / Contract In Logistics',
            desc: 'Customized corporate services which includes warehouse and inventory management support.',
            icon: corporate,
        },
        {
            title: 'Parcel Return',
            desc: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
            icon: pReturn,
        },
    ];

    return (
        <div className="container">
            <SectionTitle
                title="Our Services"
                subTitle="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
                style="text-white text-center"
            ></SectionTitle>

            <div className="flex flex-wrap -mx-3">
                {services.map((service, index) => (
                    <div key={index} className="w-full md:w-6/12 lg:w-4/12 px-3 mb-6">
                        <div className="text-center bg-white rounded-2xl px-7 py-8 h-full hover:bg-theme-primary duration-300">
                            <div className="mx-auto w-22 h-22 flex justify-center items-center rounded-full mb-4 bg-linear-to-t from-[#eeedfc00] to-[#EEEDFC]">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-blue-10">{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
