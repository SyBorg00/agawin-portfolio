import PageLayout from '../../components/PageLayout';
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Link from 'next/link';


const upcoming_projects = [
    {
        title: 'Booking & Appointment System',
        description: 'A full-stack booking platform with service management, staff scheduling, appointments, and a Laravel API.',
        tags: ['Laravel', 'MySQL', 'React'],
        links: ["https://github.com/SyBorg00/booking_system_backend.git"]
    },
];

const achived_projects = [
    {
        title: 'Univent Admin Web System',
        image: '/images/univents.png',
        description: 'A web based event management system. Utilizing Flutter for both the frontend and backend logic processes, with Supabase for data storage and retrieval.',
        tags: ['Flutter', 'Dart', 'BLOC', 'Web'],
        links: ["https://github.com/SyBorg00/Univent_Admin_Web.git"]
    },
    {
        title: 'Pomelo Disease Detection System',
        image: '/images/pomelo-1.png',
        description: 'An android applcation to detect pomelo-related diseases. Built in collaboration. Uses React Native as the frontend, Python as the backend, and Expo as the deployment tool.',
        tags: ['React Native', 'Expo', "Python", 'Android'],
        links: ["https://github.com/SyBorg00/pacita_boarding_rental_app.git"]
    },
    {
        title: 'Employee Management System',
        image: '/images/employee.png',
        description: 'A simple Management System built with Javascript, EJS, MySQL and Node.JS for CRUD operations and data management.',
        tags: ['Javascript', 'MySQL', 'Web'],
        links: ["https://github.com/SyBorg00/Univent_Admin_Web.git"]
    }
]

export default function Projects() {
    return (
        <PageLayout>
            <main className="section muted bg-cover bg-center" style={{ backgroundImage: "url('/images/project-bg.png')" }}>
                <section className='section container'>
                    <div className="sectionhead">
                        <p className="eyebrow">UPCOMING</p>
                        <h1>A snippet of what I am currently working with</h1>
                    </div>
                    <div className="grid">
                        {upcoming_projects.map((project, index) => (
                            <article className="card" key={project.title}>
                                <div className="cardtop"><span className="number">{String(index + 1).padStart(2, '0')}</span><span>↗</span></div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                            </article>
                        ))}
                    </div>
                </section>


                {/* Archived */}
                <section className="section container">
                    <div className="sectionhead">
                        <p className="eyebrow">ARCHIVED PROJECTS</p>
                        <h1>Projects that were developed during my academic years</h1>
                    </div>
                    <div className="grid">
                        {achived_projects.map((project, index) => (
                            <article className="card" key={project.title}>
                                <div className="cardtop"><span className="number">{String(index + 1).padStart(2, '0')}</span><span>↗</span></div>

                                <div className='relative overflow-hidden'>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={200}
                                        className="h-64 w-full object-cover"
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent'></div>
                                </div>

                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>

                                <div className="button primary flex flex-row items-center justify-center gap-2">
                                    {project.links.map(link => (
                                        <div
                                            key={link}
                                            className="flex flex-row items-center justify-center gap-2"
                                        >
                                            <FaGithub size={20} />
                                            <Link href={link}>View in GitHub</Link>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}
