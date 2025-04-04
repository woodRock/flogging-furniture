// File: islands/CustomOrderForm.tsx
import { h } from "preact";
import { useState } from "preact/hooks";

export default function CustomOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
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
    
    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
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
        projectType: "",
        budget: "",
        timeline: "",
        description: ""
      });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  const projectTypes = [
    { value: "", label: "Select a project type" },
    { value: "table", label: "Dining or Coffee Table" },
    { value: "storage", label: "Storage (Bookshelf, Cabinet, etc.)" },
    { value: "seating", label: "Seating (Chair, Bench, etc.)" },
    { value: "desk", label: "Desk or Workspace" },
    { value: "bed", label: "Bed Frame or Headboard" },
    { value: "outdoor", label: "Outdoor Furniture" },
    { value: "commercial", label: "Commercial/Business Furniture" },
    { value: "other", label: "Other (Please specify in description)" }
  ];
  
  const budgetRanges = [
    { value: "", label: "Select a budget range" },
    { value: "under1000", label: "Under $1,000" },
    { value: "1000-2500", label: "$1,000 - $2,500" },
    { value: "2500-5000", label: "$2,500 - $5,000" },
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "over10000", label: "Over $10,000" },
    { value: "flexible", label: "Flexible / Not sure yet" }
  ];
  
  const timelineOptions = [
    { value: "", label: "Select a timeline" },
    { value: "1-2months", label: "1-2 months" },
    { value: "3-4months", label: "3-4 months" },
    { value: "5-6months", label: "5-6 months" },
    { value: "6plus", label: "6+ months" },
    { value: "flexible", label: "Flexible" }
  ];
  
  return (
    <form onSubmit={handleSubmit}>
      {formStatus === 'success' && (
        <div class="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-md p-4">
          <div class="flex">
            <svg class="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>Thank you for your custom order request! We'll be in touch within 48 hours to discuss your project.</p>
          </div>
        </div>
      )}
      
      {formStatus === 'error' && (
        <div class="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
          <div class="flex">
            <svg class="h-5 w-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>There was an error sending your request. Please try again.</p>
          </div>
        </div>
      )}
      
      <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
        {/* Name */}
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
        
        {/* Email */}
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
        
        {/* Phone */}
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
        
        {/* Project Type */}
        <div>
          <label htmlFor="projectType" class="block text-sm font-medium text-gray-700">
            Project Type
          </label>
          <div class="mt-1">
            <select
              name="projectType"
              id="projectType"
              value={formData.projectType}
              onChange={handleChange}
              class="block w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
            >
              {projectTypes.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Budget Range */}
        <div>
          <label htmlFor="budget" class="block text-sm font-medium text-gray-700">
            Budget Range
          </label>
          <div class="mt-1">
            <select
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              class="block w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
            >
              {budgetRanges.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Timeline */}
        <div>
          <label htmlFor="timeline" class="block text-sm font-medium text-gray-700">
            Desired Timeline
          </label>
          <div class="mt-1">
            <select
              name="timeline"
              id="timeline"
              value={formData.timeline}
              onChange={handleChange}
              class="block w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
            >
              {timelineOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Project Description */}
        <div class="sm:col-span-2">
          <label htmlFor="description" class="block text-sm font-medium text-gray-700">
            Project Description <span class="text-red-500">*</span>
          </label>
          <div class="mt-1">
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Please describe your project, including any specific materials, dimensions, or design ideas you have in mind."
              class={`block w-full rounded-md sm:text-sm ${
                errors.description 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'
              }`}
            />
            {errors.description && (
              <p class="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>
          <p class="mt-2 text-sm text-gray-500">
            The more details you can provide, the better we can understand your vision.
          </p>
        </div>
      </div>
      
      <div class="mt-6">
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          class="inline-flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
        </button>
      </div>
      
      <p class="mt-4 text-sm text-gray-500 text-center">
        By submitting this form, you're taking the first step toward a unique, custom-crafted piece of furniture.
      </p>
    </form>
  );
}