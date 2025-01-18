'use client';
import Image from 'next/image';
import SectionHead from './SectionHead';
import { useRef } from 'react';
import emailJS from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailJS.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, {
      publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID,
    }).then(() => {
      console.log('SUCCESS!');
    },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };
  return (
    <section id='contact' className='text-white scroll-mt-[80px] min-h-[60vh]'>
      <SectionHead>Let&apos;s Connect</SectionHead>
      <div class="mt-6">
        <div class="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-5xl bg-gradient-to-b from-slate-900 rounded-md">
          <form ref={formRef} onSubmit={handleSubmit} className="ml-auto space-y-4">
            <input type='text' name='name' placeholder='Name' className="w-full bg-slate-800 placeholder-slate-300 text-white rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
            <input type='email' name='email' placeholder='Email' className="w-full bg-slate-800 placeholder-slate-300 text-white rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
            <input type='text' name='subject' placeholder='Subject' className="w-full bg-slate-800 placeholder-slate-300 text-white rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
            <textarea name='message' placeholder='Message' rows="6" className="w-full bg-slate-800 placeholder-slate-300 text-white rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"></textarea>
            <button type='submit' className="rounded-md text-sm px-4 py-2.5 w-full !mt-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mr-4">Message</button>
          </form>
          <div className="relative h-full">
            <Image
              src="/assets/contact.svg"
              alt="Contact"
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;