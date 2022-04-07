import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import medisearchImg from '../assets/Screen Capture 020 - MEDiSEARCH - hospital-staff-app.herokuapp.com.jpg';
import savourysubsImg from '../assets/Screen Capture 026 - Savoury Subscriptions - savoury-subscriptions.herokuapp.com.jpg';
import trainToTheBeatImg from '../assets/Screen Capture 016 - Train to the beat - scalexanderb.github.io.jpg';
import noteTakerImg from '../assets/Screen Capture 018 - Note Taker - mighty-mountain-08810.herokuapp.com.jpg';
import weatherDashboardImg from '../assets/Screen Capture 017 - Weather Dashboard - scalexanderb.github.io.jpg';
import workdaySchedulerImg from '../assets/Screen Capture 014 - Work Day Scheduler - scalexanderb.github.io.jpg';
import techBlogImg from '../assets/Screen Capture 021 - The Tech Blog - mighty-garden-10876.herokuapp.com.jpg';
import passwordGenImg from '../assets/PW gen pic.PNG';
import budgetTrackerImg from '../assets/Screen Capture 022 - Budget Tracker - fast-shelf-17349.herokuapp.com.jpg';
import javascriptQuizImg from '../assets/Javascript Quiz.jpg'

SwiperCore.use([Pagination, Navigation]); 

function Project() {
    return (

        <section className="my-5">
          
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                centeredSlides={true}
            >
                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Savoury Subscriptions</h4>
                                <a href="https://github.com/ScalexanderB/Savoury-Subscriptions" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://savoury-subscriptions.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: Javascript, React, CSS</li>
                                <li>Packages used: Node.js, Express, Apollo, GraphQL, Mongoose, Stripe, heroku</li>
                                <li>Description: An app for creating an ingredients delivery subscription based on specific user requirements.</li>
                            </ul>
                        </section>
                        <a href="https://savoury-subscriptions.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={savourysubsImg} alt="savoury subscriptions app" />
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">MEDiSEARCH</h4>
                                <a href="https://github.com/ScalexanderB/Medisearch" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://med-i-search.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: Javascript, Handlebars, HTML</li>
                                <li>Packages used: Argon2, Sequelize, Node.js, nodemon, mySql2, connect-session-sequelize, dotenv, express-handlebars, express-session, heroku</li>
                                <li>Description: An app used for creating and managing hospital data.</li>
                            </ul>
                        </section>
                        <a href="https://med-i-search.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={medisearchImg} alt="medisearch app" />
                        </a>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Train To The Beat</h4>
                                <a href="https://github.com/ScalexanderB/activity-music" target="_blank" rel="noreferrer" className="btn btn-secondar btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://scalexanderb.github.io/activity-music/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: HTML, CSS, Javascript</li>
                                <li>Packages used: None</li>
                                <li>Description: An app used for generating a playlist based on beats per minute.</li>
                            </ul>
                        </section>
                        <a href="https://scalexanderb.github.io/activity-music/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={trainToTheBeatImg} alt="Train To The Beat app"/>
                        </a>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Note Taker</h4>
                                <a href="https://github.com/ScalexanderB/Your-Note-Taker" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://mighty-mountain-08810.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: HTML, CSS, Javascript</li>
                                <li>Packages used: express.js</li>
                                <li>Description: A basic note taking app built with Express.js.</li>
                            </ul>
                        </section>
                        <a href="https://mighty-mountain-08810.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={noteTakerImg} alt="note taker app"/>
                        </a>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Tech Blog</h4>
                                <a href="https://github.com/ScalexanderB/blog-for-tech"  target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://mighty-garden-10876.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: Javascript, Handlebars, CSS</li>
                                <li>Packages used: bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, path, sequelize</li>
                                <li>Description: A basic tech blog app that stores posts and information from users.</li>
                            </ul>
                        </section>
                        <a href="https://mighty-garden-10876.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={techBlogImg} alt="tech blog app"/>
                        </a>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Weather Dashboard</h4>
                                <a href="https://github.com/ScalexanderB/Weather-Dashboard" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://scalexanderb.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: HTML, CSS, Javascript</li>
                                <li>Packages used: None</li>
                                <li>Description: A basic weather app which allows a user to search up a specific place or a saved place and view the weather.</li>
                            </ul>
                        </section>
                        <a href="https://scalexanderb.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={weatherDashboardImg}alt="weather dashboard app"/>
                        </a>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Work Day scheduler</h4>
                                <a href="https://github.com/ScalexanderB/Workday-Scheduler" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://scalexanderb.github.io/Workday-Scheduler/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: HTML, CSS, Javascript</li>
                                <li>Packages used: None</li>
                                <li>Description: An app used for planning your work day, the app will save your inputs for future use.</li>
                            </ul>
                        </section>
                        <a href="https://scalexanderb.github.io/Workday-Scheduler/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={workdaySchedulerImg} alt="workday scheduler app" />
                        </a>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Password Generator</h4>
                                <a href="https://github.com/ScalexanderB/PasswordGenerator" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://scalexanderb.github.io/PasswordGenerator/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: HTML, CSS, Javascript</li>
                                <li>Packages used: None</li>
                                <li>Description: An app used to randomly generate a password based off user inputs.</li>
                            </ul>
                        </section>
                        <a href="https://scalexanderb.github.io/PasswordGenerator/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={passwordGenImg} alt="password generator app" />
                        </a>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Budget Tracker</h4>
                                <a href="https://github.com/ScalexanderB/Easy-Budget-Tracker" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://fast-shelf-17349.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: HTML, CSS, Javascript </li>
                                <li>Packages used: MongoDB, Mongoose, express.js</li>
                                <li>Description: An app used for tracking a users spending and budget.</li>
                            </ul>
                        </section>
                        <a href="https://fast-shelf-17349.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={budgetTrackerImg} alt="budget tracker app" />
                        </a>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card mb-3">
                    <div className="card-body">
                            <h4 className="card-title">Javascript Quiz</h4>
                                <a href="https://github.com/ScalexanderB/Javascript-Quiz" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                                <a href="https://scalexanderb.github.io/Javascript-Quiz/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    Live Application
                                </a>
                        </div>
                        <section className="content mt-4 textBox">
                            <ul>
                                <li>Languages: HTML, CSS, Javascript </li>
                                <li>Packages used: None.</li>
                                <li>Description: An app that has you complete a timed quiz based on Javascript knowledge.</li>
                            </ul>
                        </section>
                        <a href="https://scalexanderb.github.io/Javascript-Quiz/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={javascriptQuizImg} alt="javascript quiz app" />
                        </a>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
    </>
    </section>
        // <div>
        //     <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-column">
        //         {props.projects.map((project) => (
        //             <div className="column is-full">
        //                 <div className="card">
        //                     <div className="card-image">
        //                         <figure className="image is-4by3">
        //                             <a href={project.live} target="_blank" rel="noreferrer">
        //                                 <img src={project.image} alt="" />
        //                             </a>    
        //                         </figure>
        //                     </div>
        //                     <div className="card-content">
        //                         <div className="media">
        //                             <div className="media-left"></div>
        //                             <div className="media-content">
        //                                 <p className="title is-4" key={project.id}>
        //                                     {project.title}
        //                                 </p>
        //                             </div>
        //                         </div>

        //                         <div className="content has-text-left">
        //                             {project.description}
        //                             <br />
        //                             <br />
        //                             <div className="content is-family-code">
        //                                 Languages: {project.languages}
        //                                 <br />
        //                                 NPM Packages: {project.packages}
        //                             </div>
        //                             <div className="card">
        //                                 <footer className="card-footer">
        //                                     <a
        //                                       href={project.repo}
        //                                       className="card-footer-item proj-link"
        //                                       target="_blank"
        //                                       rel="noreferrer"
        //                                     >
        //                                         Repository
        //                                     </a>
        //                                     <br />
        //                                     <a 
        //                                       href={project.live}
        //                                       className="card-footer-item proj-link"
        //                                       target="_blank"
        //                                       rel="noreferrer"
        //                                     >
        //                                         Live Site
        //                                     </a>    
        //                                 </footer>
        //                                </div>
        //                            </div> 
        //                         </div>
        //                     </div>
        //                 </div>    
        //         ))}
        //     </div>
        // </div>
    );
}

export default Project;
