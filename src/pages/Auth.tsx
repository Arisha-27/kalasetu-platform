import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Import your hero image
import heroImage from "../assets/hero-artisan-marketplace.jpg";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [userRole, setUserRole] = useState<"customer" | "artisan">("customer");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (userRole === "customer") {
        navigate("/customer");
      } else {
        navigate("/artist");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans bg-slate-50">
      
      {/* Background with Lighter Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* White overlay to wash it out */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        {/* Very soft pastel gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-purple-100/40" />
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-5xl h-auto md:h-[600px] flex rounded-3xl overflow-hidden shadow-xl bg-white/80 border border-white/60 m-4 animate-fade-in backdrop-blur-xl">
        
        {/* LEFT SIDE: Visuals (PASTEL COLORS HERE) */}
        <div className={`hidden md:flex w-1/2 relative flex-col justify-between p-12 transition-colors duration-500 ${
          userRole === 'customer' 
            ? 'bg-gradient-to-br from-orange-200 to-rose-300 text-orange-950'  // Soft Peach/Rose
            : 'bg-gradient-to-br from-purple-200 to-indigo-300 text-indigo-950' // Soft Lavender
        }`}>
          {/* Decorative Circles - Lighter */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/50 shadow-sm">
                <Sparkles className={`w-6 h-6 ${userRole === 'customer' ? 'text-orange-700' : 'text-purple-700'}`} />
              </div>
              <span className="text-2xl font-bold tracking-tight">KalaSetu</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              {userRole === 'customer' 
                ? "Discover the Soul of Indian Craft" 
                : "Share Your Craft with the World"}
            </h2>
            <p className={`text-lg leading-relaxed ${userRole === 'customer' ? 'text-orange-900/80' : 'text-indigo-900/80'}`}>
              {userRole === 'customer'
                ? "Join a community of art lovers supporting traditional artisans directly."
                : "Access professional tools to manage your inventory, orders, and sales."}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/30 p-4 rounded-xl backdrop-blur-md border border-white/40">
              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${userRole === 'customer' ? 'text-orange-800' : 'text-purple-800'}`} />
              <span className="text-sm font-semibold">Verified Authentic Artisans</span>
            </div>
            <div className="flex items-center gap-3 bg-white/30 p-4 rounded-xl backdrop-blur-md border border-white/40">
              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${userRole === 'customer' ? 'text-orange-800' : 'text-purple-800'}`} />
              <span className="text-sm font-semibold">Secure Payments & Shipping</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center">
          
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-sm text-slate-400 hover:text-slate-700 transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <h3 className="text-3xl font-bold text-slate-800 mb-2">
              {authMode === "login" ? "Welcome Back" : "Create an Account"}
            </h3>
            <p className="text-slate-500">
              {authMode === "login" 
                ? "Enter your details to access your account" 
                : "Get started with your free account today"}
            </p>
          </div>

          {/* Role Toggle Switch */}
          <div className="flex p-1 bg-slate-50 rounded-lg mb-8 border border-slate-100">
            <button
              type="button"
              onClick={() => setUserRole("customer")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                userRole === "customer"
                  ? "bg-orange-100 text-orange-700 shadow-sm"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => setUserRole("artisan")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                userRole === "artisan"
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              Artisan
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {authMode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-600">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-slate-300" />
                  <Input id="name" placeholder="John Doe" className="pl-10 h-11 bg-slate-50 border-slate-200 focus:border-orange-300" required />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-600">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-300" />
                <Input id="email" type="email" placeholder="name@example.com" className="pl-10 h-11 bg-slate-50 border-slate-200 focus:border-orange-300" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-600">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-300" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10 h-11 bg-slate-50 border-slate-200 focus:border-orange-300" required />
              </div>
            </div>

            {/* Submit Button - Pastel Gradients */}
            <Button 
              type="submit" 
              className={`w-full h-11 text-lg font-bold shadow-md transition-all hover:scale-[1.02] text-white border-0 ${
                userRole === 'customer' 
                  ? 'bg-gradient-to-r from-orange-300 to-rose-400 hover:from-orange-400 hover:to-rose-500'
                  : 'bg-gradient-to-r from-purple-300 to-indigo-400 hover:from-purple-400 hover:to-indigo-500'
              }`} 
              disabled={isLoading}
            >
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...</>
              ) : (
                authMode === "login" ? "Sign In" : "Create Account"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              {authMode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                className={`font-bold hover:underline ${
                  userRole === 'customer' ? 'text-orange-400' : 'text-purple-400'
                }`}
              >
                {authMode === "login" ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;