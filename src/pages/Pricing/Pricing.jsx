import React from 'react';

const Pricing = () => {
    return (
        <section className="pricing">
            <title>Calculate Price - Zap Shift</title>

            <div className="bg-white mx-3 lg:mx-12 rounded-md md:rounded-2xl">
                <div className="container">
                    <div className="py-6 md:py-8 lg:py-20 px-1 lg:px-20 2xl:px-0">
                        <h1 className="text-2xl lg:text-5xl font-extrabold text-blue-10 mb-4 md:mb-6">Pricing Calculator</h1>
                        <h3 className="text-dark-8 max-w-157.25">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business
                            shipments — we deliver on time, every time.
                        </h3>
                        <hr className="border-t border-dark-5 my-6 md:my-12" />

                        <h3 className="text-lg md:text-3xl font-extrabold text-blue-10 mb-8 md:mb-12 text-left md:text-center">
                            Calculate Your Cost
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
