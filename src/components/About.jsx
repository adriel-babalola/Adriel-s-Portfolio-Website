
const aboutItems = [
    {
        label: 'Project done',
        number: 20
    },
    {
        label: 'Years of experience',
        number: 2
    }
];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">

                        Welcome! I&apos;m Adriel, a professional web developer specializing in crafting visually stunning and highly functional websites. By combining creativity with technical expertise, I transform your vision into a digital masterpiece that excels in both appearance and performance.
                    

                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                        <span className="text-[#D4AF6A] font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className='text-sm text-zinc-400'>{label}</p>
                                    {/* The line below is not visible but implied for closing the map function */}
                                </div>
                            ))
                        }
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            width={50}
                            height={40}
                            className="ml-auto md:w-[40px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About