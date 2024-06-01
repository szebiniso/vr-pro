import React from 'react';

const ContactInformation = () => {
  return (
    <div className="mt-12 text-gray-500">
      <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
      <div className="flex flex-col min-[320px]:space-y-2 md:flex-row md:space-x-6 md:space-y-0 lg:space-y-6">
        <div className="md:w-1/2">
          <h3 className="mb-2 text-lg font-semibold">Address</h3>
          <p className="text-gray-700">Tunguch, Ankara Street 1/8</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="mb-2 text-lg font-semibold">Phone</h3>
          <p className="text-gray-700">+997 776 56 78 90</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="mb-2 text-lg font-semibold">Email</h3>
          <p className="text-gray-700">info@Innovatech.com</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="mb-2 text-lg font-semibold">Website</h3>
          <p className="text-gray-700">www.Innovatech.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
