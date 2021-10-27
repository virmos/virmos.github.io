const mainScreen = 
`<header class="" id="header">
    <div class="d-flex flex-column" id="menu">
        <div class="profile-menu" id="profile-menu">
            <img src="assets/imgs/profile-image.png" alt="" class="img_fluid rounded_circle">
            <h1 class="text-light text-center">Ha Dong Giang</h1>
            <div class="social-links text-center">
                <a class="bi-facebook rounded_circle" href="https://www.facebook.com/hadonggiang1810"></a>
                <a class="bi-twitter rounded_circle" href="https://twitter.com/tipro1810"></a>
                <a class="bi-github rounded_circle" href="https://github.com/virmos"></a>
            </div>
        </div>  
        <nav class="nav-menu" id="nav-menu">
            <ul>
                <li><a class="d-flex" href="#hero">
                        <i class="bi bi-house-door"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li><a class="d-flex" href="#resume">
                        <i class="bi bi-person"></i>
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<section class="hero d-flex flex-column justify-content-center align-items-center" id="hero">
    <div class="section-container animate__animated animate__fadeInRight">
        <p>
            <div class="text-center">
                <h1 class="text-light">Ha Dong Giang</h1>
            </div>
            <div class="type-writer">
                <span class="break-word">🎓CS Student @Vietnam National University</span>
            </div>
        </p>
    </div>
</section>

<main class="main" id="main">
    <section class="resume" id="resume">
        <div class="container">
            <div class="section-title">
                <h2>Resume</h2>
            </div>
            <div class="row">
                <div class="col-lg-6 fadeInUpWrapper">
                    <div class="animatedFadeInUp">
                        <h3 class="resume-title">Education</h3>
                        <div class="resume-item">
                            <h4>Vietnam National University</h4>
                            <h5>Sep 2019 - Present</h5>
                            <p>
                                <em>University of Engineering and Technology</em>
                            </p>
                            <li>Bachelor Degree in Computer Science</li>
                        </div>
                        <div class="resume-item">
                            <h4>Robotics</h4>
                            <h5>Mar 2021 - Present</h5>
                            <p>
                                <em>Supervisor: Doctor Le Nguyen Khoi</em> <br>
                                <em>Project: Motion Planning for Robot</em> <br>
                                <li>Working with Robot Operating System(ROS) for Turtlebot3</li>
                            </p>
                        </div>
                        <div class="resume-item">
                            <h4>Natural Language Processing</h4>
                            <h5>Mar 2021 - May 2021</h5>
                            <p>
                                <em>Supervisor: MSc Can Duy Cat</em> <br>
                                <em>Project: "Mô hình phân lớp khía cạnh cho dữ liệu bình luận
                                trên các trang thương mại điện tử Việt Nam"</em> <br>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 fadeInUpWrapper">
                    <div class="animatedFadeInUp">
                        <h3 class="resume-title">Experience</h3>
                        <div class="resume-item">
                            <h4>Java</h4>
                            <em>Project: Bomberman, Tetris, Dictionary</em> <br>
                            <li>Clone a old retro Bomberman Game with Java Core</li>
                            <li>Build a Tetris Game with Java Core</li>
                            <li>Build Java Dictionary with Java Swing</li>
                        </div>
                        <div class="resume-item">
                            <h4>Nand2tetris I + II, COURSERA</h4>
                            <h5>Jun 2021 - Aug 2021</h5>
                            <p>
                                <em>Project: Build a computer from scratch</em> <br>
                                <li>Assembling NAND gates to make ALU, RAM, ROM</li>
                                <li>Wrote a 2-tier compiler which parse Java-like -> VM Code -> Assembly</li>
                                <li>Wrote an Assembler which parse Assembly -> Machine Instructions</li>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>`

function onload() {
    const items = document.querySelectorAll('.animatedFadeInUp');
    items.forEach(item => {
        item.classList.remove('fadeInUp');
    })

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach(item => {
                    item.classList.add('fadeInUp');
                })
            return;
            }
            items.forEach(item => {
                item.classList.remove('fadeInUp');
            })
        });
    });
    observer.observe(document.querySelector('.fadeInUpWrapper'));
}

export default {
    content: mainScreen,
    onload: onload,
}