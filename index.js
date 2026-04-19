import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function SecurityRamboWebsite() {
  return (
    <div className="min-h-screen bg-blue-950 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-blue-800">
        <h1 className="text-2xl font-bold">Security Rambo</h1>
        <nav className="space-x-6">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#hiring">Hiring</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Trusted Protection. Professional Security.
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Security Rambo delivers dependable and professional security services across the Cayman Islands. Our trained guards ensure safety, protection, and peace of mind for businesses, residential communities, and events.
        </p>
        <Button className="text-lg px-6 py-3">Get a Quote</Button>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Building & Complex Security",
            "Event Security",
            "Residential Security",
            "Mobile Patrol Services",
            "Construction Site Security",
            "Access Control & Monitoring",
          ].map((service, index) => (
            <Card key={index} className="bg-blue-900">
              <CardContent className="p-6 text-center">
                <ShieldCheck className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold">{service}</h4>
                <p className="text-gray-300 mt-2">
                  Professional, trained guards ensuring safety and reliability at all times.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 bg-blue-900">
        <h3 className="text-3xl font-semibold text-center mb-6">
          About Us
        </h3>
        <p className="max-w-3xl mx-auto text-center text-gray-300">
          Security Rambo is a newly established security company based in the Cayman Islands. We are committed to delivering high-quality protection services through a team of qualified, trained, and disciplined security professionals. Our focus is on reliability, professionalism, and ensuring the safety of our clients across residential, commercial, and event environments.
        </p>
      </section>

      {/* Hiring Section */}
      <section id="hiring" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-6">
          We Are Hiring
        </h3>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          Security Rambo is currently looking for dedicated and disciplined individuals to join our growing team. If you are reliable, professional, and ready to work in the security field, we encourage you to apply.
        </p>
        <div className="text-center mt-6">
          <Button>Apply Now</Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-blue-900">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Contact Us
        </h3>
        <div className="flex flex-col items-center space-y-4 text-gray-300">
          <p className="flex items-center gap-2">
            <Phone size={18} /> 345-928-4554
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> securityrambo@gmail.com
          </p>
          <p className="flex items-center gap-2 text-center">
            <MapPin size={18} /> 14 Templeton Street, Windsor Park, George Town, Cayman Islands
          </p>
          <p className="flex items-center gap-2">
            <Clock size={18} /> Mon - Fri (8:00 AM - 5:00 PM)
          </p>
          <p className="text-sm">Serving all areas across the Cayman Islands</p>
          <Button className="mt-4">Request Service</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-blue-800">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Security Rambo | Owner: Rembley Noel Reid. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
