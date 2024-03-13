import styles from "./page.module.scss";
import GithubIcon from "@/components/svgs/github";
import MastodonIcon from "@/components/svgs/mastodon";
import BlogIcon from "@/components/svgs/blog";
import CvIcon from "@/components/svgs/cv";
import LinkedIn from "@/components/svgs/linkedin";

export default function Home() {
  return (
    <main className={styles.page__container}>
      <div className={styles.page__content}>
        <h1 className={styles.page__heading}>Bryan Haskin</h1>
        <p>
          <strong>Coder</strong> | <strong>Sailor</strong> | <strong>Maker</strong><br/>
          I write code and solve problems
        </p>
        <ul className={styles['page__icon-list']}>
          <li>
            <a href="https://github.com/bhhaskin" aria-label="GitHub">
            <GithubIcon/>
            <span>Github</span>
            </a>
          </li>
          <li>
            <a href="/resume.pdf" aria-label="CV">
              <CvIcon/>
              <span>CV</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bryan-haskin/" aria-label="LinkedIn">
              <LinkedIn/>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a rel="me" href="https://social.bitsofsimplicity.com/@bhhaskin" aria-label="Mastodon">
              <MastodonIcon/>
              <span>Mastodon</span>
            </a>
          </li>
          <li>
            <a href="https://bitsofsimplicity.com/" aria-label="Blog">
              <BlogIcon/>
              <span>Blog</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
