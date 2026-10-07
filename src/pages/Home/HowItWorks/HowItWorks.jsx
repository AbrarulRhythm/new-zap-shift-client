import pickAndDrop from '../../../assets/pick&drop.png';
import cod from '../../../assets/cod.png';
import deliveryHub from '../../../assets/delivery-hub.png';
import booking from '../../../assets/booking.png';

const HowItWorks = () => {
    // Details
    const howItWorks = [
        {
            name: 'Booking Pick & Drop',
            desc: 'From personal packages to business shipments — we deliver on time, every time.',
            icon: pickAndDrop,
        },
        {
            name: 'Cash On Delivery',
            desc: 'From personal packages to business shipments — we deliver on time, every time.',
            icon: cod,
        },
        {
            name: 'Delivery Hub',
            desc: 'From personal packages to business shipments — we deliver on time, every time.',
            icon: deliveryHub,
        },
        {
            name: 'Booking SME & Corporate',
            desc: 'From personal packages to business shipments — we deliver on time, every time.',
            icon: booking,
        },
    ];

    return (
        <div className="container">
            <h2 className="text-3xl font-extrabold text-blue-10 mb-8">How it Works</h2>

            <div className="flex flex-wrap -mx-3">
                {howItWorks.map((work, index) => (
                    <div key={index} className="w-full md:w-6/12 lg:w-3/12 px-3 mb-6">
                        <div className="p-8 bg-white rounded-3xl h-full">
                            <img src={work.icon} className="mb-6" alt={work.name} />
                            <h5 className="text-xl font-bold text-blue-10 mb-4">{work.name}</h5>
                            <p>{work.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
