import styles from "../styles/formbr.module.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import Head from 'next/head'
import * as yup from 'yup'
import emailjs from 'emailjs-com'

export default function formbr() {

    const schema = yup.object().shape({
        name: yup.string().required('Nome não pode estar em branco'),
        email: yup.string().email('Endereço de email inválido').required('Email não pode estar em branco'),
        agency: yup.string(),
        tel: yup.number().min(11, 'O telefone precisa ter no mínimo 11 números').required('Telefone não pode estar em branco'),
        message: yup.string().min(3, 'A mensagem deve ter no mínimo 3 caracteres').max(300, 'A mensagem pode ter no máximo 300 caracteres').required('Mensagem não pode estar em branco')
    })

    const onSubmit = async (e) => {
        e.preventDefault();

        let formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            agency: e.target[2].value,
            tel: e.target[3].value,
            message: e.target[4].value,
        }

        const isValid = await schema.isValid(formData);

        if (isValid) {
            emailjs.sendForm('service_ibuddku', 'template_reanimate', e.target, 'psXKDji6qs060IYw5')

            .then((result) => {
                console.log(result);
                window.location.href = "/formcompletebr";
            }, (error) => {
                console.log(error);
            });

            
        } else {
            alert("Por favor garanta que os campos foram preenchidos corretamente e tente novamente.")
        }
    }

    return (
        <div>
            <Head>
                <title>Formulário | re.animate</title>
                <meta name='description' content='Agende sua demo' />
            </Head>
            <div className={styles.main} >
                <GoogleTagManager gtmId="GTM-WSB82BZW" />
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
                        <form className={styles.containerForm} onSubmit={onSubmit}>
                            <input placeholder='Nome:' className={styles.formName} type="text" name="name"/>
                            <input placeholder='E-mail:' className={styles.formEmail} type="text" name="email"/>
                            <input placeholder='Agência/Produto:' className={styles.formAgency} type="text" name="agency"/>
                            <input placeholder='Telefone:' className={styles.formPhone} type="text" name="phone"/>
                            <textarea placeholder='Mensagem:' className={styles.formMessage} type="textarea" name="message"/>
                            <button className={styles.formButton} onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'Formulário enviado' })} />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}