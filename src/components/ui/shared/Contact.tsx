"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin } from "lucide-react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import Container from "./Container";

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:");
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <Container>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-700">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="min-h-[150px]"
              />
              <Button type="submit" className="w-full" variant="default">
                Send Message
              </Button>
            </form>
            <div className="space-y-4 text-gray-500">
              <p className="text-lg">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your visions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/naimuddin94"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/iamnaimuddin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a
                  href="https://web.facebook.com/nayeem.durjoy.372/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
