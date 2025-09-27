import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const loadingMessages = [
    "Packing your message ✉️",
    "Sending it through the web 🌐",
    "Almost there 🚀",
    "Just a moment ⏳",
    "Making sure it lands safely 📬",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || loading) return;

    setLoading(true);

    // Rotate loading messages
    let i = 0;
    const interval = setInterval(() => {
      setLoadingMessage(loadingMessages[i % loadingMessages.length]);
      i++;
    }, 800);

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const res = await fetch("https://gokul-portfolio-backend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 6000);

        toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        formRef.current.reset();
      } else {
        toast({ title: "Error", description: "Failed to send message. Please try again later." });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Something went wrong. Please check your internet connection." });
    } finally {
      setLoading(false);
      clearInterval(interval);
      setLoadingMessage("");
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "gokulnath461123456@gmail.com",
      href: "mailto:gokulnath461123456@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "http://linkedin.com/in/gokulnath-s-b57313264",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Madurai, India",
      href: "https://www.google.com/maps/place/Iravadanallur,+Tamil+Nadu+625009/",
      color: "text-green-400",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          <Confetti
            width={window.innerWidth}
            height={1200}
            recycle={false}
            numberOfPieces={1000}
          />

        </div>
      )}

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <div className="section-divider" />
          <div className="space-y-4">
            <p className="text-xl text-foreground font-medium">Let's Connect!</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always excited to discuss new projects, creative ideas, or opportunities to be
              part of your vision. Whether you have a question, need a quote, or just want to say hello,
              feel free to get in touch!
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Let's start a conversation
                </h3>
                <p className="text-muted-foreground">
                  I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title + index}
                    className="card-gradient rounded-2xl p-6 group hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={() => method.href && window.open(method.href)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                        <method.icon className={`w-5 h-5 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      </div>
                      {method.href && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Send className="w-4 h-4 text-primary" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="card-gradient rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-accent" />
                Response Time
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">&lt; 24h</div>
                  <div className="text-xs text-muted-foreground">Email Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">Same Day</div>
                  <div className="text-xs text-muted-foreground">LinkedIn Message</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-gradient rounded-2xl p-8 pb-16">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Project discussion, collaboration, etc."
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, ideas, or how I can help..."
                    rows={6}
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                    disabled={loading}
                  />
                </div>

                {/* Submit Button with spinner and loading message */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-hero bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg py-3 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2 text-sm">
                      <span className="animate-spin rounded-full w-4 h-4 border-2 border-white border-t-transparent" />
                      {loadingMessage}
                      <span className="dots">
                        <span>.</span><span>.</span><span>.</span>
                      </span>
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </Button>

                {/* Tiny progress bar animation */}
                {loading && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="h-1 bg-primary rounded mt-2"
                  />
                )}
              </form>

              <motion.p
                className="text-xs text-muted-foreground text-center mt-4 opacity-70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Your information is secure and will only be used to respond to your inquiry.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="card-gradient rounded-2xl px-8 py-6 inline-block">
            <p className="text-foreground font-medium mb-2">
              "Great things happen when passionate people connect"
            </p>
            <p className="text-muted-foreground text-sm">
              Looking forward to hearing from you!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for bouncing dots */}
      <style>
        {`
  .dots span {
    display: inline-block;
    animation: bounce 1s infinite;
    margin-left: 2px;
  }
  .dots span:nth-child(2) { animation-delay: 0.2s; }
  .dots span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes bounce {
    0%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-4px); }
  }
`}
      </style>

    </section>
  );
};

export default ContactSection;
