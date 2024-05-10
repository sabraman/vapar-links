"use client"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Youtube = (props: { id: string, title: string }): JSX.Element => {
    return (
        <LiteYouTubeEmbed
            id={props.id}
            title={props.title}
            noCookie
            webp
        />
    )
}
export default Youtube;