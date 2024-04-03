import styles from "../styles/formbr.module.css";
import Link from 'next/link'
import Head from 'next/head'

export default function formbr() {

    return (
        <div>
            <Head>
                <title>Formulário | re.animate</title>
                <meta name='description' content='Agende sua demo' />
            </Head>
            <div className={styles.gradient1} />
            <div className={styles.gradient6} />
            <div className={styles.formContainerBlur} />
            <div className={styles.formContainer}>
                <Link href="/">
                    <div className={styles.containerClose} />
                </Link>
                <div className={styles.containerContent}>
                    <div className={styles.containerTexts}>
                        <div className={styles.containerTitle}>Agende sua demo</div>
                        <div className={styles.containerText}>Nos conte um pouco sobre você e como podemos te ajudar.</div>
                    </div>
                    <div className={styles.containerInputs}>
                        <input placeholder='Nome:' className={styles.formName}/>
                        <input placeholder='E-mail:' className={styles.formEmail}/>
                        <input placeholder='Agência/Produto:' className={styles.formAgency}/>
                        <input placeholder='Telefone:' className={styles.formPhone}/>
                        <textarea placeholder='Mensagem:' className={styles.formMessage}/>
                        <div className={styles.formButton} onClick={() => alert('Obrigado por entrar em contato!')} />
                    </div>
                </div>
            </div>
        </div>
    )

}