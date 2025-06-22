
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Trophy, Clock, Target, BookOpen, MessageSquare, FileText, Award, TrendingUp, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Elite MBA Coaching</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Star className="w-4 h-4 mr-1" />
            #1 MBA Coaching Service
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Into Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Dream MBA Program</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Expert MBA coaching and application review services to help you stand out from thousands of applicants. 
            Personalized guidance from admission consultants who've helped students get into top business schools worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              Book Free Consultation
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              500+ Successful Applications
            </div>
            <div className="flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-green-600" />
              95% Admission Rate
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-600" />
              Top 50 B-Schools Worldwide
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MBA application support designed to maximize your chances of admission to top business schools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Application Review",
                description: "Complete review of your MBA application including essays, resume, and recommendations with detailed feedback and optimization suggestions.",
                features: ["Essay editing & refinement", "Resume optimization", "Recommendation strategy", "Application timeline"]
              },
              {
                icon: MessageSquare,
                title: "Interview Preparation",
                description: "Mock interviews and personalized coaching to help you ace your MBA admissions interviews with confidence.",
                features: ["Mock interview sessions", "Behavioral question prep", "School-specific preparation", "Confidence building techniques"]
              },
              {
                icon: Target,
                title: "School Selection Strategy",
                description: "Strategic guidance on selecting the right MBA programs based on your profile, goals, and preferences.",
                features: ["Profile assessment", "School matching", "Application strategy", "Backup school planning"]
              },
              {
                icon: BookOpen,
                title: "Essay Writing Support",
                description: "Expert guidance on crafting compelling essays that showcase your unique story and leadership potential.",
                features: ["Story development", "Structure optimization", "Voice & tone refinement", "Multiple draft reviews"]
              },
              {
                icon: TrendingUp,
                title: "Profile Enhancement",
                description: "Strategic advice on strengthening your candidacy through leadership experiences and skill development.",
                features: ["Gap analysis", "Leadership opportunities", "Skill development plan", "Extracurricular guidance"]
              },
              {
                icon: Clock,
                title: "GMAT/GRE Prep Support",
                description: "Integrated test preparation support and strategy to achieve competitive scores for your target schools.",
                features: ["Study plan creation", "Resource recommendations", "Score improvement strategies", "Test timing optimization"]
              }
            ].map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Elite MBA Coaching?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven track record and personalized approach set us apart from other MBA consulting services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Award,
                  title: "Expert Consultants",
                  description: "Our team consists of former admissions officers and MBA graduates from top-tier business schools including Harvard, Wharton, Stanford, and INSEAD."
                },
                {
                  icon: TrendingUp,
                  title: "Proven Success Rate",
                  description: "95% of our clients receive admission offers, with 80% getting into their top-choice schools. Our track record speaks for itself."
                },
                {
                  icon: Users,
                  title: "Personalized Approach",
                  description: "Every client receives a customized strategy based on their unique background, goals, and target schools. No cookie-cutter solutions."
                },
                {
                  icon: Globe,
                  title: "Global Experience",
                  description: "We've helped students gain admission to top business schools across the US, Europe, Asia, and other regions worldwide."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Sarah Chen",
                    school: "Harvard Business School",
                    quote: "Elite MBA Coaching transformed my application. Their strategic guidance helped me get into HBS with a scholarship!"
                  },
                  {
                    name: "Michael Rodriguez",
                    school: "Wharton School",
                    quote: "The personalized essay coaching made all the difference. I couldn't have crafted my story so compellingly without their help."
                  },
                  {
                    name: "Priya Patel",
                    school: "Stanford GSB",
                    quote: "From GMAT strategy to interview prep, they supported me every step of the way. Now I'm at my dream school!"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <p className="text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.school}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your needs. All packages include personalized attention and proven strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$1,299",
                description: "Perfect for self-motivated candidates who need targeted support",
                features: [
                  "Application review & feedback",
                  "2 essay reviews",
                  "Resume optimization",
                  "School selection guidance",
                  "1 mock interview session",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Comprehensive",
                price: "$2,799",
                description: "Our most popular package with end-to-end support",
                features: [
                  "Complete application management",
                  "Unlimited essay reviews",
                  "Resume & LinkedIn optimization",
                  "School selection & strategy",
                  "3 mock interview sessions",
                  "Recommendation letter guidance",
                  "GMAT/GRE strategy session",
                  "Priority email & phone support"
                ],
                popular: true
              },
              {
                name: "Premium",
                price: "$4,999",
                description: "Elite support for the most competitive applicants",
                features: [
                  "Dedicated consultant assignment",
                  "Unlimited application support",
                  "Unlimited essay & resume reviews",
                  "Comprehensive school strategy",
                  "5 mock interview sessions",
                  "Scholarship application support",
                  "Profile enhancement coaching",
                  "24/7 priority support",
                  "Post-admission guidance"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative h-full ${plan.popular ? 'border-2 border-blue-600 shadow-xl' : 'border shadow-md'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 my-4">{plan.price}</div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Not sure which package is right for you?</p>
            <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your MBA Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful candidates who chose Elite MBA Coaching to achieve their business school dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Elite MBA Coaching</span>
              </div>
              <p className="text-gray-400 text-sm">
                Helping ambitious professionals get into their dream MBA programs with expert guidance and proven strategies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Application Review</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Essay Writing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interview Prep</a></li>
                <li><a href="#" className="hover:text-white transition-colors">School Selection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">MBA Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">School Rankings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@elitembacoaching.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Available 7 days a week</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Elite MBA Coaching. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
