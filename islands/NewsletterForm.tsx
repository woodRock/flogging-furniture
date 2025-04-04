// File: islands/NewsletterForm.tsx
import { h } from "preact";
import { useState } from "preact/hooks";

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };
  
  return (
    <form class="mt-4" onSubmit={handleSubmit}>
      <div class="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          placeholder="Your email"
          disabled={status === 'submitting'}
          class="min-w-0 flex-1 appearance-none rounded-md border border-stone-600 bg-stone-700 px-3 py-2 placeholder-stone-400 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          class="ml-3 flex-shrink-0 rounded-md bg-amber-600 px-3 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>
      
      {status === 'success' && (
        <p class="mt-2 text-sm text-green-400">Thanks for subscribing!</p>
      )}
      
      {status === 'error' && (
        <p class="mt-2 text-sm text-red-400">Please enter a valid email address.</p>
      )}
    </form>
  );
}