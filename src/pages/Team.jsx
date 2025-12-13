import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
    { id: 1, name: 'Jane Doe', role: 'Founder & CEO', bio: 'Passionate about mental health advocacy.' },
    { id: 2, name: 'John Smith', role: 'CTO', bio: 'Tech enthusiast building for social good.' },
    { id: 3, name: 'Alice Johnson', role: 'Community Manager', bio: 'Connecting people with resources.' },
    { id: 4, name: 'Bob Brown', role: 'Lead Counselor', bio: 'Expert in substance use recovery.' },
];

const Team = () => {
    return (
        <div className="team-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Meet Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        The dedicated individuals behind iConnect SUD.
                    </motion.p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="team-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="member-avatar">
                                    <span>{member.name.charAt(0)}</span>
                                </div>
                                <h3>{member.name}</h3>
                                <span className="member-role">{member.role}</span>
                                <p>{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
