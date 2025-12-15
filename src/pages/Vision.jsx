import React from 'react';
import { motion } from 'framer-motion';
import communityImg from '../assets/vision_community_circle.png';
import networkImg from '../assets/vision_ecosystem_network.png';
import './Vision.css';

const Vision = () => {
    return (
        <div className="vision-page">
            <div className="page-header">
                <div className="container">
                    <motion.div
                        className="vision-hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our Vision</h1>
                        <p className="subtitle">A future where recovery is accessible, celebrated, and sustainable.</p>
                    </motion.div>
                </div>
            </div>

            <section className="section vision-section-split">
                <div className="container">
                    <div className="vision-grid">
                        <motion.div
                            className="vision-text-block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Making the Human Connection</h2>
                            <p>
                                The value of iCONNECT is providing available community resources in near real-time to individuals with SUD and their social network. These critical moments equate to meaningful connections that can reduce clinic readmissions, decrease overdose instances, and serve as a tool to coordinate healthcare among county, clinical, and emergency workers alike.
                            </p>
                            <p>
                                When individuals are under the influence or their families are under stress, they are just one click away from a meaningful resource and human connection.
                            </p>
                        </motion.div>
                        <motion.div
                            className="vision-image-block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={communityImg} alt="Community Support" className="vision-img" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="impact-grid">
                        <motion.div
                            className="impact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="impact-icon">🔗</span>
                            <h3>Connecting Help</h3>
                            <p>Connecting help to individuals on their recovery journey.</p>
                        </motion.div>
                        <motion.div
                            className="impact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="impact-icon">🌐</span>
                            <h3>Coordinating Ecosystems</h3>
                            <p>Coordinating the ecosystem of community resources.</p>
                        </motion.div>
                        <motion.div
                            className="impact-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="impact-icon">📍</span>
                            <h3>Highlighting Resources</h3>
                            <p>Highlighting the closest available resources.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section vision-section-split">
                <div className="container">
                    <div className="vision-grid reverse-mobile">
                        <motion.div
                            className="vision-image-block"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src={networkImg} alt="Network Ecosystem" className="vision-img" />
                        </motion.div>
                        <motion.div
                            className="vision-text-block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Saving Resources, Time, and Lives</h2>
                            <p>
                                Our ultimate goal is to demonstrate that iCONNECT can be successfully deployed in Fairfax Country, the state of Virginia, and then the nation.
                            </p>
                            <p>
                                Our community partners at the Fairfax Falls Church Community Service Board and Chris Atwood Foundation are our mentors and advisors. Together, with the guidance of our Principal Investigator and collaborating faculty members, we are confident that iCONNECT has real social good.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
