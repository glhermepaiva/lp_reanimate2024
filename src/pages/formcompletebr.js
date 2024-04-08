import styles from '../styles/formcomplete.module.css'
import Link from 'next/link'
import Head from 'next/head'

const FormCompleteBR = () => {

    return (
        <div>
            <Head>
                <title>Formulário | re.animate</title>
                <meta name='description' content='Agende sua demo' />
            </Head>
            <div className={styles.main} >
                <div className={styles.gradient1} />
                <div className={styles.gradient6} />
                <div className={styles.formContainerBlur} />
                <div className={styles.formContainer}>
                    <Link href="/">
                        <div className={styles.containerClose} />
                    </Link>
                    <div className={styles.containerContent}>
                        <div className={styles.containerTexts}>
                            <div className={styles.containerTitle}>Enviado com sucesso!</div>
                            <div className={styles.containerText}>Aguarde, em breve entraremos em contato.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCompleteBR;