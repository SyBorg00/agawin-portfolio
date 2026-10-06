import PageLayout from "../../components/PageLayout";
import Image from "next/image";

import {
    FaLinkedin, FaFacebook, FaGithub, FaGitAlt, FaNode, FaReact, FaPython, FaJava,
    FaLaravel, FaPhp, FaAndroid, FaFigma, FaCss3Alt, FaHtml5
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiApachenetbeanside, SiMysql, SiXampp, SiGmail } from "react-icons/si";

const stacks = [

    {
        slug: "nodejs", icon: <FaNode size={70} />
    },
    {
        slug: "react", icon: <FaReact size={70} />
    },
    {
        slug: "python", icon: <FaPython size={70} />
    },
    {
        slug: "java", icon: <FaJava size={70} />
    },
    {
        slug: "js", icon: <IoLogoJavascript size={70} />
    },
    {
        slug: "laravel", icon: <FaLaravel size={70} />
    },
    {
        slug: "php", icon: <FaPhp size={70} />
    },
    {
        slug: "flutter", icon: <FaFlutter size={70} />
    },
    {
        slug: "mysql", icon: <SiMysql size={70} />
    },
    {
        slug: "android", icon: <FaAndroid size={70} />
    },
    {
        slug: "figma", icon: <FaFigma size={70} />
    },

    {
        slug: "css", icon: <FaCss3Alt size={70} />
    },
    {
        slug: "html", icon: <FaHtml5 size={70} />
    },

];

const tools = [
    {
        slug: "vs_studio", icon: <BiLogoVisualStudio size={70} />
    },
    {
        slug: "github", icon: <FaGitAlt size={70} />
    },
    {
        slug: "netbeans", icon: <SiApachenetbeanside size={70} />
    },
    {
        slug: "xampp", icon: <SiXampp size={70} />
    },

];


export default function About() {
    return (
        <PageLayout>
            <main>
                <section className="section muted bg-cover bg-center" style={{ backgroundImage: "url('/images/about-bg.png')" }} >
                    <div className="container">
                        <div>
                            <p className="eyebrow">ABOUT ME</p>
                            <h1>A Software Developer with a builder mindset.</h1>
                            <br />
                        </div>
                        <div>
                            <p>My name is Sylvann Jules A. Agawin, a graduate at Ateneo de Davao University, Cum Laude. With a knack for both frontend and backend development, I thrive on creating intuitive and creative
                                digital experiences. I have a good foundation in programming languages, frameworks, and tools that allow me to build robust applications from scratch.
                            </p>
                            <br />
                            <p>I enjoy taking an idea from
                                <span className="about-span"> database design</span> - analyzing the overall data structure of the app, to
                                <span className="about-span"> API development</span> ,
                                and all the way to a
                                <span className="about-span"> polished frontend. </span>
                                I care about maintainable code, practical architecture, and interfaces that are easy to understand.</p>
                            <br />

                            <p>Whether it would be Flutter, Javascript, Java, or any new stacks, I am always up for the challenge and eager to learn from it</p>
                            <br />
                            <p>Currently, I'm expanding my portfolio through real-world projects and continuously improving my full-stack workflow.</p>
                        </div>
                    </div>
                </section>

                <section className="section muted bg-cover bg-center">
                    <div className="container">
                        <div className="about-grid">
                            {/* Stacks */}

                            <div>
                                <div>
                                    <p className="eyebrow">SKILLSETS</p>
                                    <h1>A Software Developer must be flexible with their skillsets. This is currently what I am proficient with.</h1>
                                    <br />
                                </div>
                                <div className="stack-grid">
                                    {stacks.map((stack, index) => (
                                        <div className="about-card" key={index}>
                                            {stack.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div>
                                <p className="eyebrow">TOOLSETS</p>
                                <h1>A Software Developer with a builder mindset must need the right tools to operate. These are the tools I currently use.</h1>
                                <br />
                                <div className="stack-grid">
                                    {tools.map((tool, index) => (
                                        <div className="about-card" key={index}>
                                            {tool.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>



                        </div>
                    </div>

                </section>

                <section className="section container contact">

                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="eyebrow text-3xl" >GET IN TOUCH</p>
                        <h1>Feel free to contact me through the following links</h1>

                        <div className="flex flex-row gap-10">
                            <div className="contact-icon">
                                <a href="mailto:agawinsylvannjules@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <SiGmail size={50} />
                                </a>

                            </div>
                            <div className="contact-icon">
                                <a href="https://linkedin.com/in/sylvann-jules-agawin-831195419" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={50} />
                                </a>

                            </div>
                            <div className="contact-icon">
                                <a href="https://github.com/SyBorg00" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={50} />
                                </a>

                            </div>

                            <div className="contact-icon">
                                <a href="https://www.facebook.com/sylvannjules.agawin" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={50} />
                                </a>

                            </div>

                        </div>
                    </div>


                </section>
            </main>
        </PageLayout>
    )
}
