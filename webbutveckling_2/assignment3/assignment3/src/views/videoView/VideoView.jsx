import css from './VideoView.module.css'


function VideoView() {
    return (
        <div className={css.alignCenter}>
            <h1 data-testid='header'>VideoView</h1>
            <iframe width="1500" height="900" className={css.iframeShadow} src="https://www.youtube.com/embed/AneOyX1CSlk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
}

export default VideoView