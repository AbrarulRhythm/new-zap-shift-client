import parcelTracking from '../../../assets/live-parcel-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';
import callSupport from '../../../assets/call-support.png';

const WhyChooseUs = () => {
    const details = [
        {
            name: 'Live Parcel Tracking',
            desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            icon: parcelTracking,
        },
        {
            name: '100% Safe Delivery',
            desc: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
            icon: safeDelivery,
        },
        {
            name: '24/7 Call Center Support',
            desc: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
            icon: callSupport,
        },
    ];

    return (
        <div className="container">
            <div className="pt-12 pb-6 lg:pt-25 lg:pb-19 border-y-2 border-dashed border-blue-10">
                <div className="flex flex-wrap -mx-3">
                    {details.map((item, index) => (
                        <div key={index} className="w-full px-3 mb-6">
                            <div className="bg-white rounded-3xl">
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full md:w-3/12 relative">
                                        <div className="p-8">
                                            <img src={item.icon} className="mx-auto" alt="icon" />
                                            <div className="hidden md:inline md:absolute border-r border-dashed border-blue-10 w-px h-37.5 top-[50%] translate-[-50%] right-0"></div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-9/12">
                                        <div className="text-center md:text-left p-10 lg:p-12">
                                            <h4 className="text-2xl font-extrabold text-blue-10 mb-4">{item.name}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
