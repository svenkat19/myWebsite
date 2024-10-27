import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Typeright.css'; // Make sure to import your CSS
import cv from '../cv.png';

const Typeright = () => {
    const [isVisible, setIsVisible] = useState(false);
    const typerightRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (typerightRef.current) {
            observer.observe(typerightRef.current);
        }

        return () => {
            if (typerightRef.current) {
                observer.unobserve(typerightRef.current);
            }
        };
    }, []);

    return (
        <div className="container flex-container" style={{ marginTop: '1rem' }} ref={typerightRef}>
            <div className="text-container" style={{ width: '30rem' }}>
                <h1
                    className={isVisible ? 'fade-in-left' : 'fade-out-left'}
                    style={{ fontSize: '3rem' }}
                >
                    Hey there,
                </h1>
                <h1
                    className={isVisible ? 'fade-in-left' : 'fade-out-left'}
                    style={{ fontSize: '3rem' }}
                >
                    I'm Shashank Venkat.
                </h1>
                <br />
                <h2>
                    <span
                        className={isVisible ? 'fade-in-left' : 'fade-out-left'}
                        style={{ color: '#007ACC', fontWeight: 'bold', fontSize: '2rem' }}
                    >
                        <Typewriter
                            words={[
                                'Dancer 🕺🏽',
                                'Machine Learning Researcher 🤖',
                                'Full Stack Developer 🌐',
                                'IT Analyst 📈',
                                'Space Lover 🌌🔭',
                                'History Geek 📜🕵🏽 ...'
                            ]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={() => console.log('Loop completed')}
                        />
                    </span>
                </h2>
                <br />
                <div className="container flex-container" style={{ marginTop: '1rem' }} ref={typerightRef}>
                    <div className="text-container" style={{ width: '30rem' }}>
                        {/* ...existing code... */}
                        <div>
                            <button
                                type="button"
                                className={`btn btn-outline-primary ${isVisible ? 'fade-in-left' : 'fade-out-left'}`}
                            >
                                <div className="download-link">
                                    <a href='https://drive.google.com/file/d/1LTnvqorg_MBdTJKMcK-lH50VH6mMFxSF/view?usp=sharing' style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>View Resume </span>
                                        <img className='download-image' src={cv} style={{ width: '2rem', height: '2rem', marginLeft: '0.5rem' }} alt="Resume" />
                                    </a>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`profile-container ${isVisible ? 'fade-in-right' : 'fade-out-right'}`}
                style={{}}
            >
                <img
                    src="tTBWByQwdtDAxTvZT4ADi-transformed.png"
                    alt="Profile"
                />
            </div>
        </div>
    );
};

export default Typeright;
