import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt', formData);
  };

  return (
    <div className="h-screen flex bg-[#f0f9f4] font-sans overflow-hidden">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center relative bg-gradient-to-br from-[#eef8f5] via-[#daefe7] to-[#c2e2d7] border-r border-[#c2e2d7]/50 px-8">
        <div className="w-full max-w-[420px] relative z-10">
          {/* Chat Mockup Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 pb-20 relative"
          >
            {/* Header of Chat Mockup */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#dbeae3] flex items-center justify-center text-[#2d6a4f] shrink-0">
                <MessageSquare size={20} className="fill-current opacity-90" />
              </div>
              <div>
                <h3 className="text-[#1f2937] font-bold text-[16px]">Quiet Conversations</h3>
                <p className="text-gray-500 text-[13px]">Real-time engagement without the noise.</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-6">
              <div className="bg-[#f4f6f8] rounded-2xl rounded-tl-sm p-4 text-[13px] text-gray-700 max-w-[85%] border border-transparent shadow-sm font-medium leading-relaxed">
                Hello! I saw your recent collection. Can we discuss a custom order for our team?
              </div>
              <div className="flex justify-end">
                <div className="bg-[#125e4c] text-white rounded-2xl rounded-tr-sm p-4 text-[13px] max-w-[85%] shadow-md font-medium leading-relaxed">
                  Absolutely! I'd love to help with that. Let's find a time to chat about your specific requirements.
                </div>
              </div>
              <div className="bg-[#f4f6f8] rounded-2xl rounded-tl-sm p-4 text-[13px] text-gray-700 max-w-[85%] border border-transparent shadow-sm font-medium leading-relaxed">
                Perfect. Looking forward to it.
              </div>
            </div>

            {/* Bottom Floating Stats Wrapper */}
            <div className="absolute -bottom-10 -left-8 right-6 flex gap-4 w-[calc(100%+2rem)] z-20 items-stretch">
              {/* NEW LEADS Card */}
              <div className="bg-[#ebf4f0] rounded-[1.5rem] p-5 shadow-[0_10px_30px_-10px_rgba(18,94,76,0.1)] flex-none w-[35%] flex flex-col justify-center border border-white/50">
                <p className="text-[11px] font-bold text-[#5c7a6e] tracking-widest mb-2 uppercase">NEW LEADS</p>
                <p className="text-4xl font-black text-[#125e4c]">12</p>
              </div>
              
              {/* Julian Hayes Testimonial */}
              <div className="bg-white rounded-[1.5rem] p-5 flex-1 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#1b2a26] flex items-center justify-center text-white shrink-0">
                    <User size={14} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1f2937] leading-none mb-1">Julian Hayes</h4>
                    <p className="text-[9px] text-[#8ca89d] font-bold tracking-widest uppercase">LIAISON USER</p>
                  </div>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed italic pr-2 font-medium">
                  "The most peaceful CRM experience I've ever had. It just flows."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-white relative">
        <div className="w-full max-w-[400px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Branding */}
            <div className="mb-10">
              <h2 className="text-[#125e4c] text-[22px] font-extrabold tracking-tight mb-8">Liaison</h2>
              
              <h1 className="text-[2.75rem] tracking-tight font-extrabold text-[#2d3330] leading-[1.1] mb-5">
                Quietly <br />
                connected.
              </h1>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-[95%]">
                The premium workspace where client relationships become calm conversations.
              </p>

              {/* WhatsApp Connection Button */}
              <button 
                type="button" 
                className="w-full bg-[#2fd15a] hover:bg-[#25b54a] text-white py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare size={18} className="fill-current" />
                Connect WhatsApp
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
              <span className="relative bg-white px-4 text-[10px] font-bold tracking-[0.2em] text-[#7a8c85] uppercase">
                OR USE YOUR EMAIL
              </span>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-[#5c6963] mb-2 tracking-wider uppercase">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-5 py-3.5 text-[14px] bg-[#f4f8f6] text-[#2d3330] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#125e4c] focus:bg-white transition-all placeholder-[#aab8b2] font-medium"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[11px] font-bold text-[#5c6963] tracking-wider uppercase">Password</label>
                  <a href="#" className="text-[11px] font-bold text-[#125e4c] hover:text-[#0b3b2f] tracking-wide uppercase">FORGOT?</a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full px-5 py-3.5 text-[14px] bg-[#f4f8f6] text-[#2d3330] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#125e4c] focus:bg-white transition-all placeholder-[#aab8b2] font-medium shadow-none font-bold tracking-widest"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1b5e50] hover:bg-[#15473d] text-white py-4 rounded-full font-bold text-[15px] transition-colors shadow-md"
                >
                  Enter the Quiet
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
