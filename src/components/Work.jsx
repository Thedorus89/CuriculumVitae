import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/sharepoint.webp',
      title: 'Sharepoint workflow and webparts',
      tags: ['Sharepoint', 'Development']
    },
    {
      imgSrc: '/images/Mars.webp',
      title: 'Master and Distribution Online',
      tags: ['WPF', 'C#', 'Vb.Net', 'Development'], 
    },
    {
      imgSrc: '/images/Oasys.png',
      title: 'Online Approval System',
      tags: ['Development', 'C#', 'Vb.Net'], 
    },
    {
      imgSrc: '/images/Motion.jpeg',
      title: 'Human Motion Detection using AI',
      tags: ['WPF', 'C#', 'Development'], 
    },
    {
      imgSrc: '/images/Nest.webp',
      title: 'Web API',
      tags: ['NestJS', 'Development', 'TypeScript'], 
    }, 
  ];

const Work = () => {
  return (
    <section
        id="work"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags }, key) =>(
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags} 
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work