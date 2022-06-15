import styles from "./Project.module.scss";

type ProjectPropsType = {
    title: string
    description: string
    image: string
    appLink: string
    codeLink: string
}

export const Project = ({title, description, image, appLink, codeLink}: ProjectPropsType) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
                <div className={styles.linksContainer}>
                    <a className={styles.projectLink} target={"_blank"} rel="noreferrer" href={appLink}>view app</a>
                    <a className={styles.projectLink} target={"_blank"} rel="noreferrer" href={codeLink}>view code</a>
                </div>
                <div className={styles.imageContainer} style={{backgroundImage: `url(${image})`}}>
                </div>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}