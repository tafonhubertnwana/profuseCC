'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import Stepper from '@/components/pricing/stipper';


export default function PaymentForm() {
 
const router = useRouter();

  // Load selected plan from localStorage
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const plan = localStorage.getItem('selectedPlan');
    if (plan) {
      setSelectedPlan(JSON.parse(plan));
    } else {
      // If no plan selected, go back to pricing
      router.push('/pricing');
    }
  }, [router]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    region: '',
    country: '',
    postal: '',
    date: '',
    time: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone || !isValidPhoneNumber(formData.phone)) newErrors.phone = 'Valid phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.region.trim()) newErrors.region = 'Region is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.postal.trim()) newErrors.postal = 'Postal code is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.time.trim()) newErrors.time = 'Time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Save form data + plan together
    const completeData = { ...formData, ...selectedPlan };
    localStorage.setItem('paymentFormData', JSON.stringify(completeData));

    // Move to payment processor page
    router.push('/page/pricing/paymentform/paymentprocessor');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
            {/* Timeline */}
            <Stepper currentStep={2} />
    
            {/* Order Summary */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Order</h2>
              <p className="text-gray-600">Please provide your details to proceed with payment</p>
            </div>
            {selectedPlan && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-medium">{selectedPlan.serviceName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plan:</span>
                    <span className="font-medium">{selectedPlan.tierName}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-semibold">
                    <span>Total:</span>
                    <span className="text-[#FF0000]">${selectedPlan.price}</span>
                  </div>
                </div>
              </div>
            )}
    
            {/* Payment Details Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 text-center">Payment Details</h2>
    
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-medium">Full Name *</span></label>
                  <input
                   placeholder="Enter your full name"
                    type="text"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition  ${errors.name ? 'input-error' : ''}`}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  {errors.name && <span className="text-error text-sm mt-1">{errors.name}</span>}
                </div>
    
                <div className="form-control">
                  <label className="label"><span className="label-text font-medium">Email *</span></label>
                  <input
                  placeholder="example@email.com"
                    type="email"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.email ? 'input-error' : ''}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  {errors.email && <span className="text-error text-sm mt-1">{errors.email}</span>}
                </div>
              </div>
    
              {/* Phone */}
              <div className="form-control">
                <label className="label"><span className="label-text font-medium">Phone *</span></label>
                <PhoneInput
                 placeholder="Enter phone number"
          value={formData.phone}
          onChange={(value) => handleInputChange('phone', value)}
          defaultCountry="US"
                  
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <span className="text-error text-sm mt-1">{errors.phone}</span>}
              </div>
    
              {/* Address, Region, Country, Postal */}
              <div className="form-control">
                <label className="label"><span className="label-text font-medium">Address *</span></label>
                <input
                  type="text"
                  placeholder="Street address"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.address ? 'input-error' : ''}`}
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
                {errors.address && <span className="text-error text-sm mt-1">{errors.address}</span>}
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-medium">Region/State *</span></label>
                  <input
                    type="text"
                    placeholder="Region/State"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.region ? 'input-error' : ''}`}
                    value={formData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                  />
                  {errors.region && <span className="text-error text-sm mt-1">{errors.region}</span>}
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-medium">Country *</span></label>
                  <input
                    type="text"
                      placeholder="Country"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.country ? 'input-error' : ''}`}
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                  />
                  {errors.country && <span className="text-error text-sm mt-1">{errors.country}</span>}
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-medium">Postal Code *</span></label>
                  <input
                    type="text"
                    placeholder="Postal code"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.postal ? 'input-error' : ''}`}
                    value={formData.postal}
                    onChange={(e) => handleInputChange('postal', e.target.value)}
                  />
                  {errors.postal && <span className="text-error text-sm mt-1">{errors.postal}</span>}
                </div>
              </div>
    
              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-medium"> Date *</span></label>
                  <input
                    type="date"
                    placeholder="Select date"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.date ? 'input-error' : ''}`}
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                  {errors.date && <span className="text-error text-sm mt-1">{errors.date}</span>}
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-medium"> Time *</span></label>
                  <input
                    type="time"
                      placeholder="Select time"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition ${errors.time ? 'input-error' : ''}`}
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                  />
                  {errors.time && <span className="text-error text-sm mt-1">{errors.time}</span>}
                </div>
              </div>
    
              {/* Notes */}
              <div className="form-control">
                <label className="label"><span className="label-text font-medium">Additional Notes</span></label>
                <textarea
                placeholder="Any additional notes (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition h-40"
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                />
              </div>
    
              {/* Submit */}
              <button type="submit" className="px-4 py-3 rounded-sm bg-[#FF0000] text-white w-full mt-4">
                Continue to Payment
              </button>
            </motion.form>
          </div>
  );
}
