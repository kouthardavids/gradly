import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, User, Eye, EyeOff, GraduationCap, CheckCircle } from 'lucide-react';

export default function SignupLoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    // const [userType, setUserType] = useState('student');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [focusedField, setFocusedField] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-black text-white flex overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse-slow"></div>

            <div className="absolute top-0 -left-48 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 -right-48 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>

            <div className="hidden lg:flex lg:w-1/2 xl:w-2/5 sticky top-0 h-screen items-center justify-center p-12">
                <div className="max-w-md space-y-8 animate-fade-in">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Gradly
                        </h1>
                        <p className="text-2xl text-gray-400">
                            Your journey to university starts here
                        </p>
                    </div>

                    <div className="space-y-6 pt-8">
                        {[
                            { icon: <GraduationCap className="w-6 h-6" />, text: 'Calculate your APS instantly' },
                            { icon: <CheckCircle className="w-6 h-6" />, text: 'Find courses you qualify for' },
                            // { icon: <CheckCircle className="w-6 h-6" />, text: 'Get AI-powered study help' },
                            // { icon: <CheckCircle className="w-6 h-6" />, text: 'Track all applications' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 text-gray-300 transition-all duration-500 hover:translate-x-2 hover:text-white"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className="bg-white/10 p-3 rounded-lg transition-all duration-300 hover:bg-white/20">
                                    {item.icon}
                                </div>
                                <span className="text-lg">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 flex gap-8 text-sm text-gray-400">
                        <div>
                            <div className="text-2xl font-bold text-white">23</div>
                            <div>SA Universities</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">500+</div>
                            <div>Courses</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
                <div className="w-full max-w-md mx-auto animate-fade-in-up">
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-white/20">
                        <div className="flex gap-2 bg-white/5 p-1 rounded-full mb-8">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${isLogin
                                    ? 'bg-white text-black shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${!isLogin
                                    ? 'bg-white text-black shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">
                                {isLogin ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="text-gray-400">
                                {isLogin
                                    ? 'Enter your credentials to continue'
                                    : 'Join thousands of students finding their path'}
                            </p>
                        </div>

                        {/* {!isLogin && (
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-3 text-gray-300">
                                    I am a...
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setUserType('student')}
                                        className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${userType === 'student'
                                            ? 'bg-white text-black shadow-lg scale-105'
                                            : 'bg-white/10 hover:bg-white/20 border border-white/20'
                                            }`}
                                    >
                                        🎓 Student
                                    </button>
                                    <button
                                        onClick={() => setUserType('mentor')}
                                        className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${userType === 'mentor'
                                            ? 'bg-white text-black shadow-lg scale-105'
                                            : 'bg-white/10 hover:bg-white/20 border border-white/20'
                                            }`}
                                    >
                                        💼 Mentor
                                    </button>
                                </div>
                            </div>
                        )} */}

                        <div className="space-y-5">
                            {!isLogin && (
                                <div className="relative">
                                    <label className="block text-sm font-medium mb-2 text-gray-300">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField('')}
                                            placeholder="Enter your full name"
                                            className={`w-full bg-white/5 border rounded-xl py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-gray-500 ${focusedField === 'name'
                                                ? 'border-white bg-white/10 shadow-lg scale-[1.02]'
                                                : 'border-white/20 hover:border-white/40'
                                                }`}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-gray-300">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField('')}
                                        placeholder="you@example.com"
                                        className={`w-full bg-white/5 border rounded-xl py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-gray-500 ${focusedField === 'email'
                                            ? 'border-white bg-white/10 shadow-lg scale-[1.02]'
                                            : 'border-white/20 hover:border-white/40'
                                            }`}
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium mb-2 text-gray-300">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('password')}
                                        onBlur={() => setFocusedField('')}
                                        placeholder="Enter your password"
                                        className={`w-full bg-white/5 border rounded-xl py-3 pl-12 pr-12 outline-none transition-all duration-300 placeholder:text-gray-500 ${focusedField === 'password'
                                            ? 'border-white bg-white/10 shadow-lg scale-[1.02]'
                                            : 'border-white/20 hover:border-white/40'
                                            }`}
                                    />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {isLogin && (
                                <div className="text-right">
                                    <button
                                        className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                className="group w-full bg-white text-black py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-2 mt-6"
                            >
                                {isLogin ? 'Login' : 'Create Account'}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-transparent text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="text-sm font-medium">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="text-sm font-medium">Facebook</span>
                            </button>
                        </div>

                        {!isLogin && (
                            <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
                                By signing up, you agree to our{' '}
                                <button className="text-white hover:underline transition-all duration-300">
                                    Terms of Service
                                </button>{' '}
                                and{' '}
                                <button className="text-white hover:underline transition-all duration-300">
                                    Privacy Policy
                                </button>
                            </p>
                        )}
                    </div>

                    <div className="lg:hidden text-center mt-8 space-y-4">
                        <div className="text-2xl font-bold">Gradly</div>
                        <p className="text-gray-400 text-sm">Your journey to university starts here</p>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </div>
    );
}