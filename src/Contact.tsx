import { Navigation } from './components/Navigation';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://ifdcacy630.execute-api.us-east-2.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly at (207) 632-7108');
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#db3e79] selection:text-white">
      <Navigation />
      <main>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-8">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-12">Get in touch with Northern Force Robotics. We'd bee boop to hear from you!</p>
            <p className="text-xl text-gray-400 mb-12"><a href="tel:2076327108">(207) 632-7108</a></p>
          </div>
        </section>

        {/* Contact form section */}
        <section className="py-24 bg-zinc-950 border-y border-zinc-900">
          <div className="max-w-2xl mx-auto px-4">
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-900 border-2 border-green-700 rounded-lg text-center">
                <p className="text-white font-bold">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-900 border-2 border-red-700 rounded-lg text-center">
                <p className="text-white font-bold">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none disabled:opacity-50" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none disabled:opacity-50" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  rows={6} 
                  className="w-full bg-black border border-zinc-700 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none disabled:opacity-50"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full px-10 py-4 bg-[#db3e79] text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(219,62,121,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <LinksSection />
      <Footer />
    </div>
  );
}