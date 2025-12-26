import Image from "next/image";
import lite from "@/src/assets/image/lite.jpg";

export function About() {
  return (
    <section id="about" className="bg-[#0b0f14] flex flex-col items-center min-h-screen justify-center">
      <div
        className="
          min-h-[calc(100vh-150px)]
          max-w-7xl w-full px-6 xl:px-20 lg:px-20
          grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1
          gap-6
         
          
        "
      >
        {/* LEFT CONTENT */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            About
          </h2>

          <p className="mt-6 text-justify leading-relaxed">
            I am currently working as a Full Stack Developer Intern, with hands-on
            experience in the MERN stack and Next.js. I contribute to building
            real-world web applications, focusing on frontend development, API
            integration, and authentication while working as part of a development
            team.

          </p>

          {/* <p className="mt-4 text-justify leading-relaxed">
            I work on both front-end and back-end systems, love crafting clean UI
            with React, and scalable APIs with Node.js. Constant learning keeps
            me sharp and future-ready.
          </p> */}

          <p className="mt-4 text-justify leading-relaxed">
            Let’s collaborate and build something impactful together 🚀
          </p>

          {/* TECH STACK */}
          <h3 className="mt-8 text-2xl font-semibold text-primary">
            My Tech Stack
          </h3>

          <div className="flex flex-wrap  mt-4 gap-1 ">
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=next.js&logoColor=white" className="float-left p-1" alt="Next.js Badge" />

            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/bootstrap-%238A42F4.svg?style=for-the-badge&logo=bootstrap&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/material--ui-%23008CFF.svg?style=for-the-badge&logo=material-ui&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/sass-%23cf649a.svg?style=for-the-badge&logo=sass&logoColor=whitee" className="float-left p-1" alt="" />

            <img src="https://img.shields.io/badge/Python-FFD43B.svg?style=for-the-badge&logo=python&logoColor=blue" alt="Python" className="float-left p-1" />
            <img src="https://img.shields.io/badge/c%2B%2B-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" className="float-left p-1" alt="" />

            <img src="https://img.shields.io/badge/mysql-%23507E9C.svg?style=for-the-badge&logo=mysql&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white" className="float-left p-1" alt="PostgreSQL Badge" />
            <img src="https://img.shields.io/badge/MongoDB_Atlas-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" className="float-left p-1" alt="MongoDB Atlas Badge" />
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" className="float-left p-1" />
            <img src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white" className="float-left p-1" alt="Docker Badge" />
            <img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" className="float-left p-1" alt="Prisma Badge" />
            <img src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white" className="float-left p-1" alt="Git Badge" />
            <img src="https://img.shields.io/badge/photoshop-%23A8A8A8.svg?style=for-the-badge&logo=adobe-photoshop&logoColor=" className="float-left p-1" alt="" />
            <img src="https://img.shields.io/badge/microsoft_excel-%234B8B3B.svg?style=for-the-badge&logo=microsoft-excel&logoColor=white" className="float-left p-1" alt="" />


          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end xl:justify-end items-center py-12 ">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-30 group-hover:opacity-50 transition" />

            {/* Background blur image */}
            <Image
              src={lite}
              alt="background"
              className="absolute inset-0 rounded-full blur-md grayscale opacity-70"
            />

            {/* Main image */}
            <Image
              src={lite}
              alt="Shivam"
              className="
                relative
                w-64 h-64 sm:w-80 sm:h-80
                rounded-full
                border-4 border-primary
                grayscale
                group-hover:grayscale-0
                transition duration-300
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
