'use client';

import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { portfolioData } from '@/lib/data';
import React from 'react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center text-center overflow-hidden"
    >
      {/* Aurora effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[80vw] h-[50vh] blur-3xl rounded-full bg-gradient-to-tr from-primary/30 to-secondary/40 animate-pulse duration-[10s]"/>
      </div>
      
      <div className="container relative mx-auto px-4 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold tracking-tight text-foreground">
            Hi, I'm {portfolioData.name}
          </h1>
          <p className="text-4xl md:text-7xl font-headline font-extrabold tracking-tight text-gradient capitalize">
             {portfolioData.tagline}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto pt-4">
            A passionate Senior Software Engineer based in the USA, dedicated to transforming innovative concepts into robust, high-performance digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={portfolioData.socials.github} target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={portfolioData.socials.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={portfolioData.socials.email} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href={portfolioData.socials.phone} aria-label="Phone">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
