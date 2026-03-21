import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { useState } from 'react';
import './Donate.css';

export function Donate() {

  const [formData, setFormData] = useState({
      namef: '',
      namel: '',
      email: '',
      phonenum: '',
      amount: '0.00'
  });

  const [popup, setPopup] = useState({
    show: false,
    title: "",
    message: ""
  });

  const [dollars, cents] = formData.amount.split(".");

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

  const handleSubmit = () => {
    const amountNum = parseFloat(formData.amount);

    if (isNaN(amountNum) || amountNum < 5) {
      setPopup({
        show: true,
        title: "Invalid Amount",
        message: "Minimum donation is $5.00 we dont want ur pennies"
      });
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailValid) {
      setPopup({
        show: true,
        title: "Invalid Email",
        message: "Please enter a valid email address."
      });
      return;
    }

    if (formData.namef.trim() === "" || formData.namel.trim() === "") {
      setPopup({
        show: true,
        title: "Invalid Name",
        message: "Please enter your full name."
      });
      return;
    }

    setPopup({
      show: true,
      title: "Thank You!",
      message: "We stole ur money lol"
    });
  };

  const Popup = () => (
    popup.show && (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-black border border-[#db3e79] rounded-xl p-6 max-w-sm w-full shadow-[0_0_20px_#db3e79] animate-fadeIn">
          <h2 className="text-2xl font-bold text-[#db3e79] mb-3">{popup.title}</h2>
          <p className="text-gray-200 mb-6">{popup.message}</p>
          <button
            onClick={() => {
              setPopup({ show: false, title: "", message: "" });
            }}
            className="w-full bg-[#db3e79] hover:bg-[#c1356b] text-white font-bold py-2 rounded-lg transition animate-fadeIn"
          >
            Close
          </button>
        </div>
      </div>
    )
  );

  return (
    <>
    <head>
      <title>Team 172 | Donate</title>
    </head>
    <div className="bg-black">
        <div className="min-h-screen">
          <Navigation />
          <Popup />
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
                <div className="hidden md:block absolute top-0 bottom-0 left-[calc(33.33%-0.2rem)] w-[4px] bg-[#db3e79] rounded-full -translate-x-1/2 shadow-[0_0_10px_#db3e79]"></div>

                {/* Divider between col 2 & 3 (lg and up) */}
                <div className="hidden lg:block absolute top-0 bottom-0 left-[calc(66.66%+0.3rem)] w-[4px] bg-[#db3e79] rounded-full -translate-x-1/2 shadow-[0_0_10px_#db3e79]"></div>

                {/* First Name */}
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">First Name</label>
                  <input
                    type="text"
                    name="namef"
                    value={formData.namef}
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

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Last Name</label>
                  <input
                    type="text"
                    name="namel"
                    value={formData.namel}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black border border-blue-100 px-4 py-3 text-white focus:border-[#db3e79] 
                              focus:outline-none disabled:opacity-50 rounded-lg" />
                </div>

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

              {/*Submit Button*/}
              <button
                onClick={handleSubmit}
                className="mt-8 bg-[#db3e79] hover:bg-[#c1356b] text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300"
              >
                Donate
              </button>

            </div>
          </div>
        </div>
        <LinksSection />
        <Footer />
      </div></>
  );
}
