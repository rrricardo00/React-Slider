import React from 'react'
import styles from './modules/Slide.module.css'

const Slide = ({ slides }) => {

    const [active, setActive] = React.useState(0)
    const [position, setPosition] = React.useState(0)
    const contentRef = React.useRef()

    React.useEffect(() => {
        const { width } = contentRef.current.getBoundingClientRect()
        setPosition(-(width * active))
    }, [active])

    const slideNext = () => {

       active < slides.length -1 && setActive(active + 1)
    }

    const slidePrev = () => {
       active > 0 && setActive(active - 1)
    }

    return (
        <section className={styles.container}>

            <div ref={contentRef} className={styles.content} style={{ transform: `translateX(${position}px)` }}>
                {slides.map(item => {
                    return (
                        <div className={styles.item} key={item.id}>{item.text}</div>
                    )
                })}
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    )
}

export default Slide