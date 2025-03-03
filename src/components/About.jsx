


const aboutItems = [
    {
      label: 'Project done',
      number: 15
    },
    {
      label: 'Years of experience',
      number: 13
    }
  ];

function About() {
  return (
     <section
        id="about"
        className="section"
     >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Theo, 
                I am an experienced software developer specializing in backend development, particularly in building and maintaining web APIs, web applications, and enterprise solutions. With expertise in NestJS (TypeScript) and C#, I have worked on multiple projects ranging from real estate APIs, vehicle and sales management systems, to human movement detection using AI.
                My skill set includes ASP.NET, VB.NET, WPF, SQL Server, Azure, and various reporting tools like SSRS and Crystal Reports. I have also developed and maintained SharePoint portals, online approval systems, and quality control applications.
                Passionate about creating efficient and scalable solutions, I am proficient in using Visual Studio, Git, JavaScript, jQuery, and Telerik to build robust applications that meet business needs.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img 
                        src="/images/logo.svg" 
                        alt="logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                </div>
            </div>
        </div>

     </section>
  )
}

export default About