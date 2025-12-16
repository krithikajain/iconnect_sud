import React from 'react';
import { motion } from 'framer-motion';
import siddharthaImg from '../assets/siddhartha_sikdar.jpg';
import hollyImg from '../assets/holly_matto.jpg';
import rebeccaImg from '../assets/rebecca.jpg';
import dylanImg from '../assets/dylan.jpg';
import padmanabhanImg from '../assets/Padmanabhan.jpg';
import krithikaImg from '../assets/krithika.jpg';
import lillianImg from '../assets/lillian.jpg';
import siriImg from '../assets/siri.jpeg';
import './Team.css';

const founders = [
    {
        name: 'Rebecca Leung',
        role: 'Co-founder',
        image: rebeccaImg,
        link: 'https://www.linkedin.com/in/healthrebeccaleung/'
    },
    {
        name: 'Dylan Scarton',
        role: 'Co-founder',
        image: dylanImg,
        link: 'https://www.linkedin.com/in/dylan-scarton/'
    }
];

const piAndPc = [
    {
        name: 'Siddhartha Sikdar, PhD',
        role: 'Principal Investigator',
        image: siddharthaImg,
        link: 'https://www.linkedin.com/in/siddhartha-sikdar-b2603a1/'
    },
    {
        name: 'Jasmine',
        role: 'Project Coordinator',
        image: 'https://ui-avatars.com/api/?name=Jasmine&background=0D8ABC&color=fff',
        link: '#'
    }
];

const techTeam = [
    {
        name: 'Hector',
        role: 'CTO',
        image: 'https://ui-avatars.com/api/?name=Hector&background=0D8ABC&color=fff',
        link: '#'
    },
    {
        name: 'Krithika Jain',
        role: 'Technical Lead',
        image: krithikaImg,
        link: '#'
    },
    {
        name: 'Gabriel',
        role: 'Tech Associate',
        image: 'https://ui-avatars.com/api/?name=Gabriel&background=0D8ABC&color=fff',
        link: '#'
    }
];

const faculty = [
    {
        name: 'Holly Matto, PhD, MSW',
        role: 'Co-Faculty Mentor',
        image: hollyImg,
        link: 'https://publichealth.gmu.edu/profiles/hmatto'
    },
    {
        name: 'Padmanabhan Seshaiyer, PhD',
        role: 'Co-Faculty Mentor',
        image: padmanabhanImg,
        link: 'https://www.linkedin.com/in/padhuseshaiyer/'
    }
];

const interns = [
    {
        name: 'Camila',
        role: 'Social Media Intern',
        image: 'https://ui-avatars.com/api/?name=Camila&background=ffc107&color=fff',
        link: '#'
    },
    {
        name: 'Hajrah',
        role: 'Social Media Intern',
        image: 'https://ui-avatars.com/api/?name=Hajrah&background=ffc107&color=fff',
        link: '#'
    },
    {
        name: 'Lillian',
        role: 'Social Media Intern',
        image: lillianImg,
        link: '#'
    },
    {
        name: 'Siri',
        role: 'Social Media Intern',
        image: siriImg,
        link: '#'
    }
];

const TeamRow = ({ members, delayOffset = 0 }) => (
    <div className="team-row">
        {members.map((member, index) => (
            <motion.div
                className="team-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.1) + delayOffset }}
            >
                {member.link && member.link !== '#' ? (
                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="team-link">
                        <div className="team-img-wrapper">
                            <img src={member.image} alt={member.name} className="team-img" />
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </a>
                ) : (
                    <div className="team-link" style={{ cursor: 'default' }}>
                        <div className="team-img-wrapper">
                            <img src={member.image} alt={member.name} className="team-img" />
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                )}
            </motion.div>
        ))}
    </div>
);

const Team = () => {
    return (
        <div className="team-page">
            <div className="page-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our Team</h1>
                        <p className="subtitle">Dedicated professionals working to make a difference.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="team-rows-container">
                        <TeamRow members={founders} delayOffset={0} />
                        <TeamRow members={piAndPc} delayOffset={0.2} />
                        <TeamRow members={techTeam} delayOffset={0.4} />
                        <TeamRow members={faculty} delayOffset={0.6} />
                        <TeamRow members={interns} delayOffset={0.8} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
