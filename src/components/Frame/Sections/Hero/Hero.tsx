'use client'

import Image from 'next/image'
import Link from 'next/link'
import bg from '@/src/assets/image/bg-home.png'
import { TypeAnimation } from 'react-type-animation'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

 export const Hero = () => {
  return (
    <section className="flex w-full bg-[#0b0f14] flex-col items-center justify-center relative overflow-hidden min-h-screen">
      <div className="grid w-full  grid-cols-1  sm:grid-cols-2 items-center  max-w-7xl px-6 xl:px-20 lg:px-20 py-10">

        {/* LEFT CONTENT */}
        <div className="mt-10 sm:mt-0">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Hi, I&apos;m <span className="text-primary">Shivam Tidke</span>
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
        <div className="mt-6 sm:mt-0 flex justify-end">
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


