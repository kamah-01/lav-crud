import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './home.css';
import VideoModal from '../../Components/VideoModal/videoModal';
import videoFile from '../../assets/Videos/V01.mp4';

function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");

    const openModal = () => {
        setCurrentVideoUrl(videoFile); // imported video file path
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentVideoUrl("");
    };

    return (
        <div className="container-fluid p-0 home">
            {/* Hero Section */}
            <section className="hero d-flex flex-column justify-content-center align-items-center text-center">
                <h1 className="display-3">VJ Hertz</h1>
                <p className="lead">The Legend Kingpin</p>
                <Link to="/contact">
                    <button className="btn btn-primary cta-button">Book Me Now</button>
                </Link>
            </section>

            {/* About Me Section */}
            <section className="about-me d-flex justify-content-center align-items-center">
                <div className="about-me-content text-center p-5 bg-dark text-white rounded shadow">
                    <h2 className="section-heading">MEET VJ HERTZ</h2>
                    <p>
                        As one of Kenya’s most celebrated DJs, VJ Hertz has established himself as a standout figure in Nairobi’s dynamic music scene...
                    </p>
                    <div className="social-media d-flex justify-content-center gap-3 mt-4">
                        <a href="https://www.instagram.com/vjhertz/" aria-label="Instagram">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://www.facebook.com/vdjhertz" aria-label="Facebook">
                            <i className="fab fa-facebook-f fa-2x"></i>
                        </a>
                        <a href="https://x.com/_vjhertz" aria-label="X">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.tiktok.com/@_vjhertz" aria-label="TikTok">
                            <i className="fab fa-tiktok fa-2x"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Mixes and Edits Section */}
            <section className="mixes-edits text-center my-5">
                <h2 className="mb-4">Quench Your Music Thirst</h2>
                <p>Some of our best mixes</p>
                <div className="video-thumbnail" onClick={openModal}>
                    <img src="https://cdn.dribbble.com/users/1065176/screenshots/13922161/media/0856303467607c461c1d5a1e073982e2.jpg" alt="Mix 2 Thumbnail" className="img-fluid rounded" />
                    <p className="mt-2">Play Mix 2</p>
                </div>
            </section>

            <VideoModal videoUrl={currentVideoUrl} isOpen={modalOpen} onClose={closeModal} />

            {/* Portfolio Section */}
            <section className="portfolio py-5">
  <h2 className="text-center mb-5">Events Gallery</h2>
  <div className="row">
    <div className="col-md-3 col-sm-6">
      <div className="portfolio-item text-center">
        <img src="https://i.pinimg.com/564x/07/5d/5a/075d5aab01076611780f6c5be8048933.jpg" alt="Event 1" className="img-fluid rounded mb-2" />
        <p>Club Tops</p>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="portfolio-item text-center">
        <img src="https://i.pinimg.com/564x/07/5d/5a/075d5aab01076611780f6c5be8048933.jpg" alt="Event 2" className="img-fluid rounded mb-2" />
        <p>Karaoke Event</p>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="portfolio-item text-center">
        <img src="https://i.pinimg.com/564x/07/5d/5a/075d5aab01076611780f6c5be8048933.jpg" alt="Event 3" className="img-fluid rounded mb-2" />
        <p>Burudani Friday</p>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="portfolio-item text-center">
        <img src="https://i.pinimg.com/564x/07/5d/5a/075d5aab01076611780f6c5be8048933.jpg" alt="Event 4" className="img-fluid rounded mb-2" />
        <p>Quiver Expo</p>
      </div>
    </div>
  </div>
</section>




            {/* Events Section */}
            <section className="events py-5 bg-dark text-white">
                <h2 className="text-center mb-5">Upcoming Events</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="event-item mb-4 p-3 bg-secondary rounded">
                            <img src="assets/images/relax-lounge.jpg" alt="Relax Lounge" className="img-fluid rounded mb-2" />
                            <div className="event-details">
                                <span className="event-date d-block font-weight-bold">29 August</span>
                                <h4 className="mt-2">Relax Lounge</h4>
                                <p>22:00 • Muthiga</p>
                                <button className="btn btn-light btn-sm">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="event-item mb-4 p-3 bg-secondary rounded">
                            <img src="assets/images/quiver-lounge.jpg" alt="Quiver Lounge & Grill HQ" className="img-fluid rounded mb-2" />
                            <div className="event-details">
                                <span className="event-date d-block font-weight-bold">30 August</span>
                                <h4 className="mt-2">Quiver Lounge & Grill HQ</h4>
                                <p>22:00 • Nairobi</p>
                                <button className="btn btn-light btn-sm">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="event-item mb-4 p-3 bg-secondary rounded">
                            <img src="assets/images/bar-next-door.jpg" alt="Bar Next Door" className="img-fluid rounded mb-2" />
                            <div className="event-details">
                                <span className="event-date d-block font-weight-bold">4 September</span>
                                <h4 className="mt-2">Bar Next Door</h4>
                                <p>22:00 • Kiambu Road - Nairobi</p>
                                <button className="btn btn-light btn-sm">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="news py-5">
                <h2 className="text-center mb-5">Latest News</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="news-article mb-4">
                            <h3>News Headline 1</h3>
                            <p>Brief description of the news.</p>
                            <Link to="/news/news-article-1" className="text-primary">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-article mb-4">
                            <h3>News Headline 2</h3>
                            <p>Brief description of the news article...</p>
                            <Link to="/news/news-article-2" className="text-primary">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact py-5 bg-dark text-white">
                <h2 className="text-center mb-5">Contact Me</h2>
                <div className="container">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea className="form-control" id="message" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;
