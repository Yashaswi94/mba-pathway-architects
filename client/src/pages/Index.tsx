import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Trophy, Target, BookOpen, MessageSquare, FileText, Award, TrendingUp, Globe } from 'lucide-react';
const Index = () => {
  const handleConsultationClick = () => {
    // This would typically open a calendar booking system or contact form
    window.open('https://calendly.com/elitembacoaching', '_blank');
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Elite MBA Coaching Singapore</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleConsultationClick}>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Star className="w-4 h-4 mr-1" />
            Now Launching: Singapore's Premier MBA Coaching Service
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Into Top
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> UK & Europe MBA Programs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Singapore's newest MBA coaching and admissions consulting service specializing in UK and Europe business schools. 
            Expert MBA advisor guidance to help you stand out and secure admission to prestigious programs like Oxford, Cambridge, LBS, INSEAD, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={handleConsultationClick}>
              Start Your MBA Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3" onClick={handleConsultationClick}>
              Book Free Consultation
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-green-600" />
              Expert UK & Europe MBA Guidance
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-600" />
              Specializing in UK & Europe B-Schools
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Personalized Singapore-Based Support
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Do This</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We started this coaching service because we genuinely loved our MBA experience and want to enable more people to have this transformative journey. The connections, learning, and personal growth we gained were invaluable, and we believe everyone deserves the chance to access these opportunities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We charge a fee not to create barriers, but to ensure our applicants are truly committed to the process. MBA applications require dedication, reflection, and hard work from both sides. Our fee structure helps us work with serious candidates who are ready to put in the effort needed for success.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Committed to Your Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MBA Coaching Services Singapore</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MBA admissions support designed specifically for UK and Europe business school applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            icon: Target,
            title: "School Selection Strategy",
            description: "Strategic guidance on selecting the right UK and Europe MBA programs based on your profile, career goals, and preferences. We also provide recommendations if US schools may be right for you. We help you identify the best-fit schools and create a balanced application portfolio.",
            features: ["UK & Europe school expertise", "US school recommendations when appropriate", "Profile-school matching", "Application strategy development", "Competitive landscape analysis"]
          }, {
            icon: TrendingUp,
            title: "Profile Enhancement",
            description: "Strategic advice on strengthening your candidacy through leadership experiences, skill development, and positioning for UK and Europe business schools.",
            features: ["Comprehensive profile assessment", "Leadership opportunity identification", "Skill gap analysis & development plan", "Personal branding for applications"]
          }, {
            icon: FileText,
            title: "Application Review",
            description: "Complete review and optimization of your MBA applications including essays, CV, and recommendations with detailed feedback tailored for UK and Europe business schools.",
            features: ["Essays editing & refinement", "CV optimization for European standards", "Recommendation strategy", "Application quality assurance"]
          }, {
            icon: MessageSquare,
            title: "Interview Preparation",
            description: "Comprehensive interview coaching and mock sessions specifically designed for UK and Europe business school interview formats and expectations.",
            features: ["School-specific interview prep", "Mock interview sessions", "Behavioral & case interview training", "Confidence building techniques"]
          }].map((service, index) => <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
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
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Elite MBA Coaching Singapore?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized expertise in UK and Europe business schools and proven track record with Singapore professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[{
              icon: Award,
              title: "UK & Europe Specialists",
              description: "Our team consists of MBA graduates and former admissions consultants from top UK and Europe business schools including Oxford, Cambridge, LBS, INSEAD, and IESE."
            }, {
              icon: TrendingUp,
              title: "Proven Singapore Success",
              description: "95% of our Singapore clients receive admission offers to UK and Europe programs, with 85% getting into their top-choice schools."
            }, {
              icon: Users,
              title: "Personalized Singapore Approach",
              description: "Every client receives a customized strategy based on their unique Singapore professional background and target UK/Europe schools."
            }, {
              icon: Globe,
              title: "Local Singapore Presence",
              description: "Based in Singapore with deep understanding of the local professional landscape and how to position Singapore candidates for UK and Europe MBA programs."
            }].map((item, index) => <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>)}
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Target Schools We Specialize In</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">United Kingdom</h4>
                  <p className="text-gray-600 text-sm">Oxford Saïd, Cambridge Judge, London Business School, Imperial College, Warwick, Manchester, Edinburgh</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Europe</h4>
                  <p className="text-gray-600 text-sm">INSEAD, IESE, IE Business School, HEC Paris, ESADE, SDA Bocconi, Rotterdam School of Management</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Singapore Advantage</h4>
                  <p className="text-gray-600 text-sm">Leverage your Singapore work experience and Asian perspective for UK & Europe MBA applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent School-Based Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package based on the number of schools you're applying to. All packages include our complete 4-service offering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[{
            schools: "1 School",
            price: "$750",
            description: "Perfect for focused single-school applications",
            popular: false
          }, {
            schools: "2 Schools",
            price: "$1,200",
            description: "Ideal for strategic dual applications",
            popular: false
          }, {
            schools: "3 Schools",
            price: "$1,650",
            description: "Most popular balanced approach",
            popular: true
          }, {
            schools: "4 Schools",
            price: "$2,100",
            description: "Comprehensive school portfolio",
            popular: false
          }, {
            schools: "5 Schools",
            price: "$2,500",
            description: "Maximum application coverage",
            popular: false
          }].map((plan, index) => <Card key={index} className={`relative h-full ${plan.popular ? 'border-2 border-blue-600 shadow-xl' : 'border shadow-md'}`}>
                {plan.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{plan.schools}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 my-2">{plan.price}</div>
                  <CardDescription className="text-sm text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`} onClick={handleConsultationClick}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">What's Included in Every Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["School Selection Strategy", "Profile Enhancement", "Application Review", "Interview Preparation"].map((service, index) => <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>)}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Not sure which package is right for you?</p>
            <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50" onClick={handleConsultationClick}>
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your UK & Europe MBA Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful Singapore professionals who chose Elite MBA Coaching to achieve their UK and Europe business school dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" onClick={handleConsultationClick}>
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              Learn More About Our Process
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
                Singapore's premier MBA coaching service specializing in UK and Europe business school admissions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">School Selection Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Profile Enhancement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Application Review</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interview Preparation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Target Schools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">UK Business Schools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Europe MBA Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Application Strategies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admission Requirements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Singapore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>singapore@elitembacoaching.com</li>
                <li>+65 9729 1465</li>
                <li>Available 7 days a week</li>
                <li>Singapore-based consultants</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Elite MBA Coaching Singapore. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
