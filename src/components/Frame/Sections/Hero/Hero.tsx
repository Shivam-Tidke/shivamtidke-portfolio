'use client'

import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import bg from '@/src/assets/image/bg-home.png'
import { TypeAnimation } from 'react-type-animation'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const Hero = () => {
  const Name = useRef<HTMLDivElement >(null)

   useEffect(() => {
    gsap.fromTo(
      "#bg-right",
      {  x: -100, rotate:-10, opacity: 0.5 },
      {
        x:0,
        rotate:1.5,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1,0.4)",
        transformOrigin:"right top",
        stagger: {
          each: 0.1,
          from: "random"
        },
      }
    );
   



    // if (Name.current) {
    //   gsap.fromTo(
    //     Name.current.querySelectorAll("bg-right"),
    //     { drawSVG: "0%", opacity: 0 },
    //     { drawSVG: "100%", opacity: 1, duration: 1.5, stagger: 0.15, ease: "power2.out" }
    //   );
    // }
  }, []);

  return (
    <section className="flex w-full bg-[#0b0f14] flex-col items-center justify-center relative overflow-hidden 2xL:py-30 py-15  xl:py-30">
      <div className="grid w-full  grid-cols-1  sm:grid-cols-2 items-center  max-w-7xl px-6 xl:px-20 lg:px-20 py-10">

        {/* LEFT CONTENT */}
        <div className="mt-10 sm:mt-0">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Hi, I&apos;m{' '}
            <span
              id="hero-name"
              ref={Name}
              className="text-primary inline-block"
            >
              {'Shivam Tidke'.split('').map((char, i) => (
                <span key={i} className="inline-block char">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h3>

          <div className="mt-4 font-bold">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                1000,
                'Next.js Developer',
                1000,
                'Frontend Developer',
                1000,
                'Web Developer',
                1000
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-3xl text-primary drop-shadow-lg"
            />

          </div>
          <p className='mt-4'>I am a Full Stack Developer Intern working on real-world web applications
            using React, Next.js, and Node.js.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-6 flex-wrap">
            <Link href="#project">
              <button className="bg-white px-4 py-1 text-black font-semibold">View Projects</button>
            </Link>

            <a
              href="/Shivam_Tidke-MERN-Dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary font-semibold px-4 py-1">Resume</button>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 mt-10">
            <a
              href="https://www.linkedin.com/in/shivam-tidke-9a2569269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="text-4xl iconHover" />
            </a>

            <a
              href="https://github.com/Shivam-Tidke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="text-4xl iconHover" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div ref={Name} className="mt-6 sm:mt-0 flex justify-end"  id='bg-right'>
          <Image
        
            src={bg}
            alt="Hero background"
            priority
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  )
}


