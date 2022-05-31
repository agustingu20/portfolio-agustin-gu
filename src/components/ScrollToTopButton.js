import React, { useEffect, useState } from 'react'
import Link from '@mui/material/Link';

export default function ScrollToTopButton() {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 60) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <div className='upButton'>
            {showButton && <Link onClick={scrollToTop}><img src="https://icongr.am/material/arrow-up-circle.svg?size=45&color=4e4baf" alt="uparrow"></img></Link>}
        </div>
    )
}
