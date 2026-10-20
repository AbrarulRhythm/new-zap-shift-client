import { useForm, useWatch } from 'react-hook-form';
import { TbInfoSquare } from 'react-icons/tb';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isValid, isSubmitting },
    } = useForm();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map((c) => c.region);
    const regions = [...new Set(regionsDuplicate)];
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter((c) => c.region === region);
        const districts = regionDistricts.map((d) => d.district);
        return districts;
    };

    // Handle Send Aprcel
    const handleSendParcel = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section className="send-parcel">
            <title>Send A Parcel - Zap Shift</title>

            <div className="bg-white mx-3 lg:mx-12 rounded-md md:rounded-2xl">
                <div className="container">
                    <div className="py-6 md:py-8 lg:py-20 px-1 lg:px-20 2xl:px-0">
                        <h1 className="text-2xl lg:text-5xl font-extrabold text-blue-10 mb-10">Send A Parcel</h1>
                        <h3 className="text-2xl font-extrabold text-blue-10">Enter your parcel details</h3>
                        <hr className="border-t border-dark-5 my-6" />

                        <form onSubmit={handleSubmit(handleSendParcel)}>
                            <div className="mb-6 flex items-center space-x-10">
                                <label className="flex items-center space-x-2">
                                    <input
                                        {...register('percleType', { required: 'hello' })}
                                        type="radio"
                                        className="radio radio-sm radio-success"
                                    />
                                    <span className="font-semibold">Document</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        {...register('percleType', { required: 'hello' })}
                                        type="radio"
                                        className="radio radio-sm radio-success"
                                    />
                                    <span className="font-semibold">Not-Document</span>
                                </label>
                                <span className={`${errors.percleType ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}>
                                    <TbInfoSquare className="text-lg" /> {errors.percleType && errors.percleType.message}
                                </span>
                            </div>

                            {/* Parcel name & weight */}
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full md:w-6/12 px-3 mb-4">
                                    <div>
                                        <label className="form-label">Parcel Name</label>
                                        <input
                                            {...register('parcelName', {
                                                required: 'Parcel name is required!',
                                            })}
                                            type="name"
                                            className={`${errors.parcelName ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Parcel Name"
                                        />
                                        <span
                                            className={`${errors.parcelName ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.parcelName && errors.parcelName.message}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-3 mb-4">
                                    <div>
                                        <label className="form-label">Parcel Weight (KG)</label>
                                        <input
                                            {...register('parcelWeight', {
                                                required: 'Parcel weight is required!',
                                            })}
                                            type="name"
                                            className={`${errors.parcelWeight ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Parcel Weight (KG)"
                                        />
                                        <span
                                            className={`${errors.parcelWeight ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.parcelWeight && errors.parcelWeight.message}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-t border-dark-5 mt-4 mb-8" />

                            <div className="flex flex-wrap -mx-3">
                                {/* Sender Details */}
                                <div className="w-full md:w-6/12 px-3 mb-6">
                                    <h3 className="text-xl font-extrabold text-blue-10 mb-6">Sender Details</h3>

                                    {/* Sender name */}
                                    <div className="mb-4">
                                        <label className="form-label">Sender Name</label>
                                        <input
                                            {...register('senderName', {
                                                required: 'Sender name is required!',
                                            })}
                                            className={`${errors.senderName ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Sender Name"
                                        />
                                        <span
                                            className={`${errors.senderName ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.senderName && errors.senderName.message}
                                        </span>
                                    </div>

                                    {/* Sender email */}
                                    <div className="mb-4">
                                        <label className="form-label">Sender Email</label>
                                        <input
                                            {...register('senderEmail', {
                                                required: 'Sender email is required!',
                                            })}
                                            type="email"
                                            className={`${errors.senderEmail ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Sender Email"
                                        />
                                        <span
                                            className={`${errors.senderEmail ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.senderEmail && errors.senderEmail.message}
                                        </span>
                                    </div>

                                    {/* Sender phone no */}
                                    <div className="mb-4">
                                        <label className="form-label">Sender Phone No</label>
                                        <input
                                            {...register('senderPhoneNo', {
                                                required: 'Sender phone no is required!',
                                            })}
                                            type="number"
                                            className={`${errors.senderPhoneNo ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Sender Phone No"
                                        />
                                        <span
                                            className={`${errors.senderPhoneNo ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.senderPhoneNo && errors.senderPhoneNo.message}
                                        </span>
                                    </div>

                                    {/* Sender region */}
                                    <div className="mb-4">
                                        <label className="form-label">Your Regions</label>
                                        <select
                                            {...register('senderRegion', {
                                                required: 'Sender regions is required!',
                                            })}
                                            defaultValue="Select your Regions"
                                            className={`${errors.senderRegion ? 'form-field-error form-field' : 'form-field'} select h-auto`}
                                        >
                                            <option disabled={true}>Select your Regions</option>
                                            {regions.map((r, i) => (
                                                <option key={i} value={r}>
                                                    {r}
                                                </option>
                                            ))}
                                        </select>
                                        <span
                                            className={`${errors.senderRegion ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.senderRegion && errors.senderRegion.message}
                                        </span>
                                    </div>

                                    {/* Sender district */}
                                    <div className="mb-4">
                                        <label className="form-label">Your District</label>
                                        <select
                                            {...register('senderDistrict', {
                                                required: 'Sender district is required!',
                                            })}
                                            defaultValue="Select your District"
                                            className={`${errors.senderDistrict ? 'form-field-error form-field' : 'form-field'} select h-auto`}
                                        >
                                            <option disabled={true}>Select your District</option>
                                            {districtsByRegion(senderRegion).map((d, i) => (
                                                <option key={i} value={d}>
                                                    {d}
                                                </option>
                                            ))}
                                        </select>
                                        <span
                                            className={`${errors.senderDistrict ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.senderDistrict && errors.senderDistrict.message}
                                        </span>
                                    </div>

                                    {/* Sender address */}
                                    <div className="mb-4">
                                        <label className="form-label">Sender Address</label>
                                        <input
                                            {...register('senderAddress', {
                                                required: 'Sender address is required!',
                                            })}
                                            className={`${errors.senderAddress ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Sender Address"
                                        />
                                        <span
                                            className={`${errors.senderAddress ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.senderAddress && errors.senderAddress.message}
                                        </span>
                                    </div>

                                    {/* Pickup Instruction */}
                                    <div className="mb-4">
                                        <label className="form-label">Pickup Instruction</label>
                                        <textarea
                                            {...register('senderPickupInstruction')}
                                            type="text"
                                            className={`${errors.senderPickupInstruction ? 'form-field-error form-field' : 'form-field'} h-25`}
                                            placeholder="Pickup Instruction"
                                        ></textarea>
                                        <span
                                            className={`${errors.senderPickupInstruction ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" />{' '}
                                            {errors.senderPickupInstruction && errors.senderPickupInstruction.message}
                                        </span>
                                    </div>
                                </div>

                                {/* Receiver Details */}
                                <div className="w-full md:w-6/12 px-3 mb-6">
                                    <h3 className="text-xl font-extrabold text-blue-10 mb-6">Receiver Details</h3>

                                    {/* Receiver name */}
                                    <div className="mb-4">
                                        <label className="form-label">Receiver Name</label>
                                        <input
                                            {...register('receiverName', {
                                                required: 'Receiver name is required!',
                                            })}
                                            className={`${errors.senderName ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Receiver Name"
                                        />
                                        <span
                                            className={`${errors.receiverName ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.receiverName && errors.receiverName.message}
                                        </span>
                                    </div>

                                    {/* Receiver email */}
                                    <div className="mb-4">
                                        <label className="form-label">Receiver Email</label>
                                        <input
                                            {...register('receiverEmail', {
                                                required: 'Receiver email is required!',
                                            })}
                                            type="email"
                                            className={`${errors.receiverEmail ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Receiver Email"
                                        />
                                        <span
                                            className={`${errors.receiverEmail ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.receiverEmail && errors.receiverEmail.message}
                                        </span>
                                    </div>

                                    {/* Receiver phone no */}
                                    <div className="mb-4">
                                        <label className="form-label">Sender Phone No</label>
                                        <input
                                            {...register('receiverPhoneNo', {
                                                required: 'Receiver phone no is required!',
                                            })}
                                            type="number"
                                            className={`${errors.receiverPhoneNo ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Receiver Phone No"
                                        />
                                        <span
                                            className={`${errors.receiverPhoneNo ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.receiverPhoneNo && errors.receiverPhoneNo.message}
                                        </span>
                                    </div>

                                    {/* Receiver region */}
                                    <div className="mb-4">
                                        <label className="form-label">Receiver Regions</label>
                                        <select
                                            {...register('receiverRegion', {
                                                required: 'Receiver regions is required!',
                                            })}
                                            defaultValue="Select Receiver Regions"
                                            className={`${errors.senderRegion ? 'form-field-error form-field' : 'form-field'} select h-auto`}
                                        >
                                            <option disabled={true}>Select Receiver Regions</option>
                                            {regions.map((r, i) => (
                                                <option key={i} value={r}>
                                                    {r}
                                                </option>
                                            ))}
                                        </select>
                                        <span
                                            className={`${errors.receiverRegion ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.receiverRegion && errors.receiverRegion.message}
                                        </span>
                                    </div>

                                    {/* Receiver district */}
                                    <div className="mb-4">
                                        <label className="form-label">Receiver District</label>
                                        <select
                                            {...register('receiverDistrict', {
                                                required: 'Receiver district is required!',
                                            })}
                                            defaultValue="Select Receiver District"
                                            className={`${errors.receiverDistrict ? 'form-field-error form-field' : 'form-field'} select h-auto`}
                                        >
                                            <option disabled={true}>Select Receiver District</option>
                                            {districtsByRegion(receiverRegion).map((d, i) => (
                                                <option key={i} value={d}>
                                                    {d}
                                                </option>
                                            ))}
                                        </select>
                                        <span
                                            className={`${errors.receiverDistrict ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" />{' '}
                                            {errors.receiverDistrict && errors.receiverDistrict.message}
                                        </span>
                                    </div>

                                    {/* Receiver address */}
                                    <div className="mb-4">
                                        <label className="form-label">Receiver Address</label>
                                        <input
                                            {...register('receiverAddress', {
                                                required: 'Receiver address is required!',
                                            })}
                                            className={`${errors.receiverAddress ? 'form-field-error form-field' : 'form-field'}`}
                                            placeholder="Receiver Address"
                                        />
                                        <span
                                            className={`${errors.receiverAddress ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" /> {errors.receiverAddress && errors.receiverAddress.message}
                                        </span>
                                    </div>

                                    {/* Receiver Instruction */}
                                    <div className="mb-4">
                                        <label className="form-label">Pickup Instruction</label>
                                        <textarea
                                            {...register('receiverPickupInstruction')}
                                            type="text"
                                            className={`${errors.receiverPickupInstruction ? 'form-field-error form-field' : 'form-field'} h-25`}
                                            placeholder="Pickup Instruction"
                                        ></textarea>
                                        <span
                                            className={`${errors.receiverPickupInstruction ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}
                                        >
                                            <TbInfoSquare className="text-lg" />{' '}
                                            {errors.receiverPickupInstruction && errors.receiverPickupInstruction.message}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="my-6 text-blue-9 font-semibold">* PickUp Time 4pm-7pm Approx.</p>

                            <button
                                className="bg-theme-primary disabled:bg-gray-400 disabled:active:scale-100 disabled:hover:shadow-none disabled:text-white disabled:cursor-not-allowed text-dark-13 font-semibold rounded-md px-6 py-2.5 hover:shadow-btn-inner duration-300 active:scale-95 cursor-pointer"
                                disabled={!isValid || isSubmitting}
                                type="submit"
                            >
                                {isSubmitting ? <span className="loading loading-spinner loading-sm"></span> : 'Proceed to Confirm Booking'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SendParcel;
