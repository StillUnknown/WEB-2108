import css from './HelpersView.module.css'
import aram from '../../utils/img/aram.jpg'
import michaela from '../../utils/img/michaela.jpg'
import ursula from '../../utils/img/ursulaComic2.jpg'
import one from '../../utils/img/img_1.png'

export default function HelpersView() {

    return (
        <main className={css.gridContainerMain}>
            <section>
            </section>
            <section className={css.gridContainer}>
                <div className={css.flipCard}>
                    <div className={css.flipCardInner}>
                        <div className={css.flipCardFront}>
                            <h2>Helper 1</h2>

                        </div>
                        <div className={css.flipCardBack}>
                            <img src={michaela} className={css.image} alt='michaela'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.gridContainer}>
                <div className={css.flipCard}>
                    <div className={css.flipCardInner}>
                        <div className={css.flipCardFront}>
                            <h2>Helper 2</h2>

                        </div>
                        <div className={css.flipCardBack}>
                            <img src={aram} className={css.image} alt='aram'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.gridContainer}>
                <div className={css.flipCard}>
                    <div className={css.flipCardInner}>
                        <div className={css.flipCardFront}>
                            <h2>Helper 3</h2>

                        </div>
                        <div className={css.flipCardBack}>
                            <img src={ursula} className={css.image} alt='ursula'/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            </section>
        </main>
    )
}