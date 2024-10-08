import './main.css';

import React, { useState } from 'react';

const myproject = [
    { projecttitlt: 'React Project', category: 'react', imgpath: '/img/CRUDS.jpg' },
    { projecttitlt: 'CSS Project', category: 'css', imgpath: '/img/CRUDS.jpg' },
    { projecttitlt: 'JavaScript Project', category: 'javascript', imgpath: '/img/CRUDS.jpg' }
];

const Main = () => {
    const [currrentactive, setcurrrentactive] = useState("all");

    const filteredProjects = currrentactive === "all"
        ? myproject
        : myproject.filter(project => project.category === currrentactive);

    return (
        <main className='main flex'>
            {/* Left Section with project filter buttons */}
            <section className='left-section flex'>
                <button onClick={() => setcurrrentactive("all")} className={currrentactive === "all" ? "active" : null}>All Projects</button>
                <button onClick={() => setcurrrentactive("css")} className={currrentactive === "css" ? "active" : null}>HTML & CSS</button>
                <button onClick={() => setcurrrentactive("javascript")} className={currrentactive === "javascript" ? "active" : null}>JavaScript</button>
                <button onClick={() => setcurrrentactive("react")} className={currrentactive === "react" ? "active" : null}>React</button>
            </section>

            {/* Right Section with project cards */}
            <section className='right-section flex'>
                {filteredProjects.map((item, index) => (
                    <article key={index} className='card'>
                        <img width={266} src={item.imgpath} alt={item.projecttitlt} />
                        <div style={{width: "266px"}} className='box'>
                            <h1 className='title'>{item.projecttitlt}</h1>
                            <p className='sub-title'>Custom {item.projecttitlt} with Responsive Front-End Design</p>
                            <div className='icons flex'>
                                <div style={{gap: "11px"}} className='icon flex'>
                                    <div className='icon-link'></div>
                                    <div className='icon-github'></div>
                                </div>
                                <a className='link flex' href="#">More
                                    <span style={{alignSelf: "end"}} className='icon-arrow-right'></span>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Main;
