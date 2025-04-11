import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Cal, { getCalApi } from "@calcom/embed-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.ns["30min"]("ui", {"styles":{"branding":{"brandColor":"#00C853"}}});
    })();
  }, []);

  return (
    <div className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-lg text-neutral-900/80 max-w-2xl mb-12">
            Whether you're ready to start a project or just want to chat about possibilities, I'm here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: true })}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
                Book a Free Consultation
              </h2>
              <Cal
                calLink="30min"
                style={{width: '100%', height: '100%', minHeight: '500px'}}
                config={{layout: 'month_view'}}
              />
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">
                Other Ways to Connect
              </h2>
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-neutral-900 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  hello@example.com
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-900 hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  @cheysleeman
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-900 hover:text-primary transition-colors">
                  <Calendar className="w-5 h-5" />
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;