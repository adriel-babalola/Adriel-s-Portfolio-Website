import SkillCard from "./SkillCard";
const skillItem = [
  // 🎨 DESIGN & UI
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design Tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'UI Framework'
  },

  // 💻 FRONTEND DEVELOPMENT
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction Logic'
  },
  {
    imgSrc: 'https://cdn.simpleicons.org/typescript',
    label: 'TypeScript',
    desc: 'Typed JavaScript'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Frontend Framework'
  },
  {
    imgSrc: 'https://cdn.simpleicons.org/alpine.js',
    label: 'Alpine.js',
    desc: 'Lightweight JS Framework'
  },
  {
    imgSrc: 'https://cdn.simpleicons.org/gsap',
    label: 'GSAP',
    desc: 'Animation Library'
  },

  // ⚙️ BACKEND DEVELOPMENT
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Runtime Environment'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: 'https://cdn.simpleicons.org/laravel',
    label: 'Laravel / PHP',
    desc: 'Backend Framework'
  },

  // 🗄️ DATABASES
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'NoSQL Database'
  },
  {
    imgSrc: 'https://cdn.simpleicons.org/mysql',
    label: 'MySQL',
    desc: 'Relational Database'
  },

  // 🧩 TOOLS & WORKFLOWS
  {
    imgSrc: 'https://cdn.simpleicons.org/git',
    label: 'Git / GitHub',
    desc: 'Version Control & Collaboration'
  },
  {
    imgSrc: 'https://cdn.simpleicons.org/postman',
    label: 'Postman',
    desc: 'API Testing'
  },
  {
    imgSrc: 'https://cdn.simpleicons.org/n8n',
    label: 'n8n',
    desc: 'Workflow Automation'
  },
];


const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up ">
                    Discover the powerful tools and technologies I
                    use to create exceptional, high-performing
                    websites & applications.
                </p>

               <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                           <SkillCard 
                           key={key}
                           imgSrc={imgSrc}
                           label={label}
                           desc={desc}
                           classes="reveal-up"/>

                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill
