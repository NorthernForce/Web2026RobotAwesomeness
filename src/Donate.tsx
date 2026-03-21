import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { useState } from 'react';

export function Donate() {

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      amount: '0.00'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "amount") {
      // Allow only digits and a single decimal
      const cleaned = value
        .replace(/[^0-9.]/g, "")     // remove letters/symbols
        .replace(/(\..*)\./g, "$1"); // prevent more than one decimal

      setFormData(prev => ({
        ...prev,
        amount: cleaned
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = () => {
    let amt = formData.amount;

    // If empty or just ".", default to 0.00
    if (!amt || amt === ".") {
      setFormData(prev => ({ ...prev, amount: "0.00" }));
      return;
    }

    // Format to 2 decimals
    const formatted = parseFloat(amt).toFixed(2);

    setFormData(prev => ({
      ...prev,
      amount: formatted
    }));
  };

  const [dollars, cents] = formData.amount.split(".");

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
                  Your donation directly impacts the future of STEM education and empowers our students to innovate, compete, 
                  and inspire others. Every contribution helps us build incredible robots and change lives.
                </p>
              </section>

              {/*Interactive Part*/}
              <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Vertical Dividers */}

                {/* Divider between col 1 & 2 (md and up) */}
                <div className="hidden md:block absolute top-2 bottom-2 left-[calc(33.33%-0.2rem)] w-[4px] bg-[#db3e79] rounded-full -translate-x-1/2 shadow-[0_0_10px_#db3e79]"></div>

                {/* Divider between col 2 & 3 (lg and up) */}
                <div className="hidden lg:block absolute top-2 bottom-2 left-[calc(66.66%+0.3rem)] w-[4px] bg-[#db3e79] rounded-full -translate-x-1/2 shadow-[0_0_10px_#db3e79]"></div>

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
                    className="w-full bg-black border border-blue-100 px-4 py-3 text-white focus:border-[#db3e79] 
                              focus:outline-none disabled:opacity-50 rounded-lg" />
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
                    className="w-full bg-black border border-blue-100 px-4 py-3 text-white focus:border-[#db3e79] 
                              focus:outline-none disabled:opacity-50 rounded-lg" />
                </div>

                {/* Amount Part */}
                <div className="flex flex-col justify-center">
                  <label className="block text-sm font-bold uppercase mb-2">Amount</label>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 select-none">$</span>

                    <div
                      className="w-full h-[52px] bg-black border border-blue-100 pl-8 pr-4 text-white rounded-lg
                                flex items-center leading-none"
                    >
                      <span>{dollars}</span>
                      {cents !== undefined && (
                        <span className="text-[#db3e79]">.{cents}</span>
                      )}
                    </div>

                    <input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="absolute inset-0 w-full h-[52px] bg-transparent text-transparent caret-white
                                pl-8 pr-4 focus:outline-none leading-none"
                    />
                  </div>
                </div>

                {/* Placeholder for 2nd name part*/}
                <div></div>

                {/* Placeholder for 2nd email part*/}
                <div></div>

                {/* Pre Amount buttons (5, 10, 20...)*/}
                <div className="flex flex-wrap gap-4 mt-4 justify-center items-center">
                  {[5, 10, 20, 50, 100].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setFormData(prev => ({ ...prev, amount: amt.toFixed(2) }))}
                      className="bg-[#db3e79] hover:bg-[#c1356b] border-xl border-white text-white font-bold py-2 
                                px-4 rounded-lg transition duration-300"
                    >
                      ${amt.toFixed(2)}
                    </button>
                  ))}
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
