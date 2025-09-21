'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Gamepad2,
  Trophy,
  User,
  Ticket,
  MapPin,
  Users,
  Star,
  Mail,
  Phone,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from "next/image";

const LOGO_SVG = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-sm"
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="url(#gamingGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="url(#gamingGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6V18M6 12H18"
      stroke="#f97316"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="gamingGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
  </svg>
);


export default function GamingLoungeLanding() {
  return (
    <main className="min-h-screen bg-zinc-950 text-slate-50 relative overflow-hidden">
      {/* Aurora gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-fuchsia-600/30 via-purple-700/20 to-pink-500/20" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/80">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-fuchsia-500">
            {LOGO_SVG}
            <span className="text-2xl font-bold tracking-tight text-slate-50">
              Clutchify
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-500 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-purple-500 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-[0_4px_16px_rgba(147,51,234,0.3)] transition-colors"
            >
              <a href="#book">Book a session</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('/images/gaming-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black leading-tight tracking-tight text-white drop-shadow-2xl"
          >
            Unleash Your Inner <span className="text-fuchsia-500">Champion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-slate-200"
          >
            Your ultimate hub for competitive gaming, simulators, and pure entertainment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-[0_4px_24px_rgba(147,51,234,0.4)]"
            >
              <a href="#services">Explore Our Games <Gamepad2 className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/10 hover:text-white"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="relative border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-50 leading-tight">
            About Clutchify
          </h2>
          <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
            Clutchify is more than just a gaming center; it&apos;s a community built for gamers, by gamers. We provide a state-of-the-art environment with top-tier hardware, from high-performance PCs for e-sports to the latest consoles and immersive simulators. Our mission is to create a space where players of all levels can connect, compete, and have fun.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-50 leading-tight">
            Our Gaming Universe
          </h2>
          <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
            Step into a world where high-performance hardware meets cutting-edge entertainment.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'PC Gaming Arena',
                description: 'High-end rigs for competitive play. Dive into Counter-Strike, Valorant, and more.',
                img: '/images/pc-gaming.jpg',
              },
              {
                title: 'PS5 Lounge',
                description: 'Unmatched console gaming with the latest PS5 titles, including FIFA and WWE.',
                img: '/images/ps5-setup.jpg',
              },
              {
                title: 'F1 Simulator',
                description: 'Feel the G-forces and master the tracks with our hyper-realistic Formula 1 simulator.',
                img: '/images/f1-simulator.jpg',
              },
              {
                title: 'Car Arcade Games',
                description: 'Get behind the wheel for high-octane fun with our popular car racing arcade games.',
                img: '/images/car-arcade.jpg',
              },
              {
                title: 'MotoGP Simulator',
                description: 'Lean into the turns and feel the rush of the track with our authentic MotoGP simulator.',
                img: '/images/motogp-simulator.jpg',
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="group bg-zinc-800/60 border-zinc-700/60 transition overflow-hidden p-0 relative"
              >
                <div className="relative h-60">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-[1.04] will-change-transform"
                  />
                  {/* Overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">{service.title}</h3>
                    <p className="mt-1 text-sm text-slate-200 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-50 leading-tight">
            Pricing
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Flexible hourly rates for every type of gamer.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'PC Gaming', price: '$8', rate: '/ hour', features: ['High-end PC', 'Competitive Games', 'Comfortable chairs'] },
              { title: 'PS5 Lounge', price: '$10', rate: '/ hour', features: ['Latest PS5 titles', '4K monitors', 'Controller rental included'] },
              { title: 'Simulators', price: '$15', rate: '/ hour', features: ['F1, Car & MotoGP', 'Force feedback steering', 'Immersive cockpits'] },
            ].map((plan, i) => (
              <Card key={i} className="bg-zinc-800/60 border-zinc-700/60 p-6 flex flex-col items-center text-center">
                <CardHeader className="p-0 border-b border-zinc-700/60 w-full pb-4">
                  <CardTitle className="text-2xl text-purple-400">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 text-center">
                  <div className="text-5xl font-bold text-white flex items-center justify-center">
                    {plan.price}
                    <span className="text-lg text-slate-400 font-normal ml-1">{plan.rate}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-400">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <Trophy className="mr-2 h-4 w-4 text-fuchsia-400 flex-shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold">
                    <a href="#book">Book {plan.title}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-50">What Our Gamers Say</h2>
          <div className="mt-10 overflow-x-auto">
            <div className="grid auto-cols-[minmax(300px,1fr)] grid-flow-col gap-4 pr-6">
              {[
                { q: "The PC rigs are insane! Super fast, no lag. Best gaming center I&apos;ve been to.", a: '— Mark R., Competitive Gamer' },
                { q: "I love the simulators—it feels so real! A must-try for any racing fan.", a: '— Alex D., F1 Enthusiast' },
                { q: "Perfect spot for a night out with friends. The PS5 lounge is top-notch.", a: '— Sarah P., Console Player' },
              ].map((t, i) => (
                <Card key={i} className="bg-zinc-800/60 border-zinc-700/60 min-w-[300px]">
                  <CardContent className="pt-6 pb-5 text-slate-300 text-sm space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-purple-600/30 grid place-content-center text-purple-400">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="text-xs text-slate-500">{t.a}</div>
                    </div>
                    <p className="text-slate-200">“{t.q}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact & CTA */}
      <section id="contact" className="relative border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-50 leading-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Contact us to learn more about our services, tournaments, and events.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-zinc-800/60 border-zinc-700/60 p-6 flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 grid place-content-center rounded-xl bg-purple-600/30 text-purple-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg text-white">Email Us</CardTitle>
                <p className="mt-1 text-sm text-slate-400">
                  <a href="mailto:contact@clutchify.com" className="hover:text-fuchsia-500 transition-colors">contact@clutchify.com</a>
                </p>
              </div>
            </Card>
            <Card className="bg-zinc-800/60 border-zinc-700/60 p-6 flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 grid place-content-center rounded-xl bg-fuchsia-600/30 text-fuchsia-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg text-white">Call Us</CardTitle>
                <p className="mt-1 text-sm text-slate-400">
                  <a href="tel:+1234567890" className="hover:text-fuchsia-500 transition-colors">+1 (234) 567-890</a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-zinc-700/60 bg-zinc-800/60 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50">Ready to Play?</h3>
              <p className="mt-1 text-slate-400">Book your session or learn more about our tournament schedules.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-[0_4px_24px_rgba(147,51,234,0.4)]">
                <a href="#book">Book Now <Ticket className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/10 hover:text-white">
                <a href="#location">Find Us <MapPin className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-fuchsia-500">{LOGO_SVG}<span>Clutchify</span></div>
          <div className="flex items-center gap-4">
            <a className="hover:text-fuchsia-500 transition-colors" href="#services">Services</a>
            <a className="hover:text-fuchsia-500 transition-colors" href="#about">About</a>
            <a className="hover:text-fuchsia-500 transition-colors" href="#pricing">Pricing</a>
            <a className="hover:text-fuchsia-500 transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-2 hover:text-fuchsia-500" href="#">
              <Users className="h-4 w-4"/> Community
            </a>
            <a className="flex items-center gap-2 hover:text-fuchsia-500" href="#">
              <Trophy className="h-4 w-4"/> Tournaments
            </a>
            <a className="flex items-center gap-2 hover:text-fuchsia-500" href="#">
              <Star className="h-4 w-4"/> Reviews
            </a>
          </div>
          <div>© {new Date().getFullYear()} Clutchify. All rights reserved.</div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <a
        href="#book"
        className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(147,51,234,0.6)] hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 ring-purple-400"
      >
        Book Now
      </a>
    </main>
  );
}