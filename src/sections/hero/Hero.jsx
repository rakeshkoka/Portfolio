import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/K.Rakesh_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id='hero' className={styles.container} >
            {/* container-1 */}
            <div className={styles.colorModeContainer} >
                {/* Hero Image */}
                <img
                    className={styles.hero}
                    src={heroImg} alt="Profile picture of K Rakesh"
                />
                {/* Theme icons sun/moon */}
                <img
                    className={styles.colorMode}
                    src={themeIcon} alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            {/* container-2 */}
            <div className={styles.info} >
                <h1>K Rakesh</h1>
                <h2>Frontend Developer</h2>

                <span>
                    {/* twitter-Icon */}
                    <a href="https://twitter.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>
                    {/* github-Icon */}
                    <a href="https://github.com/" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    {/* linkedIn-Icon */}
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedIcon} alt="LinkedinIcon" />
                    </a>
                </span>

                <p className={styles.description} >
                    With a passion for developing modern React web apps for commercial businesses</p>

                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero