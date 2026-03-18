import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { useState } from 'react';

export function Donate() {

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      amount: 0.0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
    <head>
      <title>Team 172 | Donate</title>
    </head>
    <div className="bg-black">
        <div className="min-h-screen">
          <Navigation />
          <div className="max-w-4xl mx-auto px-4 py-16 text-white">
            <div className="mb-12">
              <h1 className="text-5xl font-black mb-4 text-white tracking-tighter uppercase">
                Support Our <span className="text-[#db3e79]">Mission</span>
              </h1>
              <div className="w-24 h-1 bg-[#db3e79] mb-8"></div>
            </div>

            <div className="space-y-12">

              {/*Donation Explanation*/}
              <section>
                <p className="text-gray-300 mb-8">
                  Your donation directly impacts the future of STEM education and empowers our students to innovate, compete, and inspire others. Every contribution helps us build incredible robots and change lives.
                </p>
              </section>

              {/*Interactive Part*/}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Name Segment */}
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black border border-blue-100 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none disabled:opacity-50 rounded-lg" />
                </div>

                {/* Email Part */}
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black border border-blue-100 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none disabled:opacity-50 rounded-lg" />
                </div>

                {/* Amount Part */}
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Amount</label>
                  <input
                    type="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black border border-blue-100 px-4 py-3 text-white focus:border-[#db3e79] focus:outline-none disabled:opacity-50 rounded-lg" />
                </div>
              </section>
            </div>
          </div>
        </div>
        <LinksSection />
        <Footer />
      </div></>
  );
}
