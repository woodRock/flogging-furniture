// File: islands/ContactForm.tsx
import { h } from "preact";
import { useState } from "preact/hooks";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    setFormData({
      ...formData,
      [target.name]: target.value
    });
    
    // Clear error for this field if it exists
    if (errors[target.name]) {
      setErrors({
        ...errors,
        [target.name]: ""
      });
    }
  };
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // Success simulation
      setFormStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {formStatus === 'success' && (
        <div class="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-md p-4">
          <div class="flex">
            <svg class="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        </div>
      )}
      
      {formStatus === 'error' && (
        <div class="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
          <div class="flex">
            <svg class="h-5 w-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>There was an error sending your message. Please try again.</p>
          </div>
        </div>
      )}
      
      <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
        <div>
          <label htmlFor="name" class="block text-sm font-medium text-gray-700">
            Name <span class="text-red-500">*</span>
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              class={`block w-full rounded-md sm:text-sm ${
                errors.name 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'
              }`}
            />
            {errors.name && (
              <p class="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="email" class="block text-sm font-medium text-gray-700">
            Email <span class="text-red-500">*</span>
          </label>
          <div class="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              class={`block w-full rounded-md sm:text-sm ${
                errors.email 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'
              }`}
            />
            {errors.email && (
              <p class="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" class="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <div class="mt-1">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              class="block w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" class="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <div class="mt-1">
            <select
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              class="block w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
            >
              <option value="">Please select...</option>
              <option value="Custom Order">Custom Order</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Workshop Visit">Workshop Visit</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div class="sm:col-span-2">
          <label htmlFor="message" class="block text-sm font-medium text-gray-700">
            Message <span class="text-red-500">*</span>
          </label>
          <div class="mt-1">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              class={`block w-full rounded-md sm:text-sm ${
                errors.message 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'
              }`}
            />
            {errors.message && (
              <p class="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
        </div>
      </div>
      
      <div class="mt-6">
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          class="inline-flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}