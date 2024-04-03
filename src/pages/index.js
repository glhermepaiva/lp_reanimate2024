import {useEffect, useRef, useState } from 'react'
import styles from "../styles/index.module.css";
import Link from 'next/link'
import Head from 'next/head'

import {SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { register } from "swiper/element/bundle";

register();

export default function Home() {

  /***** HAMBURGER MENU  *****/

  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    if (menuOpen == false){
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    } 
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  /***** CAROUSEL CONFIG *****/

  const paginationRef = useRef(null);

    useEffect(() => {
    const swiperContainer = paginationRef.current;
    const params = {
        pagination: {
        clickable: true
        },
        loop: true,
        injectStyles: [
        `
            .swiper-wrapper {
                width: 100vw;
                height: 200px;
                margin: 0px 0 20px 0;
            }

            .swiper-pagination {
                margin: 0px 0 50px 33vw !important;
                width: 150px !important;
            } 

            .swiper-pagination-bullet {
                width: 27px;
                height: 27px;
                margin: 0px 10px !important;
                background-color: #E8336A;
            }
            @media (max-width: 1800px) {
              .swiper-pagination {
                margin: 0px 0 50px 35vw !important;
              } 
            }
            @media (max-width: 1680px) {
              .swiper-pagination {
                margin: 0px 0 50px 38vw !important;
              } 
            }
            @media (max-width: 1500px) {
              .swiper-pagination {
                margin: 0px 0 50px 42vw !important;
              } 
            }
            @media (max-width: 768px) {
              .swiper-pagination {
                margin: 0px 0 50px 38vw !important;
              } 
            }
            @media (max-width: 480px) {
              .swiper-pagination {
                margin: 0px 0 50px 32vw !important;
              } 
            }
            @media (max-width: 320px) {
              .swiper-pagination {
                margin: 0px 0 50px 25vw !important;
              } 
            }
        `,
        ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
    }, []);

    /***** EXTERNAL LINKS *****/

    function reanimLink () {
      window.open('https://www.reanimate.com.br/', "_self");
    }

    function pointLink () {
      window.open('https://www.pointmedia.com.br/');
    }

    const faceLink = () => {
      window.open('https://www.facebook.com/Point-Media-2496784783713500/');
    }

    const instaLink = () => {
      window.open('https://www.instagram.com/pointmediaoficial/');
    }
  
    const linkedinLink = () => {
      window.open('https://br.linkedin.com/company/point-media-oficial');
    }
  

    /***** ANCHORS *****/

    const featuresRef = useRef(null);
    const mmRef = useRef(null);
    const raRef = useRef(null);
    const daRef = useRef(null);
    const pointRef = useRef(null);
    const clientsRef = useRef(null);

    const anchorHeader = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
    }

    const anchorFeatures = () => {
        const featuresPosition = featuresRef.current.offsetTop -50;
        window.scrollTo({
          top: featuresPosition,
          behavior: 'smooth',
        })
    }

    const anchorFeaturesMobile = () => {
      const featuresPosition = featuresRef.current.offsetTop;
      window.scrollTo({
        top: featuresPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
  }

    const anchorMM = () => {
      const mmPosition = mmRef.current.offsetTop -50;
      window.scrollTo({
        top: mmPosition,
        behavior: 'smooth',
      })
    }

    const anchorMMMobile = () => {
      const mmPosition = mmRef.current.offsetTop + 880;
      window.scrollTo({
        top: mmPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorRA = () => {
      const raPosition = raRef.current.offsetTop -50;
      window.scrollTo({
        top: raPosition,
        behavior: 'smooth',
      })
    }

    const anchorRAMobile = () => {
      const raPosition = raRef.current.offsetTop + 630;
      window.scrollTo({
        top: raPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorDA = () => {
      const daPosition = daRef.current.offsetTop -50;
      window.scrollTo({
        top: daPosition,
        behavior: 'smooth',
      })
    }

    const anchorDAMobile = () => {
      const daPosition = daRef.current.offsetTop + 570;
      window.scrollTo({
        top: daPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorPoint = () => {
      const pointPosition = pointRef.current.offsetTop -50;
      window.scrollTo({
        top: pointPosition,
        behavior: 'smooth',
      })
    }

    const anchorPointMobile = () => {
      const pointPosition = pointRef.current.offsetTop + 350;
      window.scrollTo({
        top: pointPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorClients = () => {
      const clientsPosition = clientsRef.current.offsetTop -50;
      window.scrollTo({
        top: clientsPosition,
        behavior: 'smooth',
      })
    }

    const anchorClientsMobile = () => {
      const clientsPosition = pointRef.current.offsetTop + 550;
      window.scrollTo({
        top: clientsPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    /***** RETURN *****/    

  return (
    <div className={styles.page}>
      <Head>
        <title>re.animate | Transforme dias de trabalho em minutos</title>
        <meta name='description' content='Transforme dias de trabalho em minutos com o re.animate.' />
      </Head>
      <div className={styles.gradient1} />
      <div className={styles.gradient2} />

      <div className={styles.main}>

        <div className={styles.header}>
          <div className={styles.headerLogo} />
          <div className={styles.headerHamburger} onClick={openMenu}/>
          <div className={`${styles.hoverMenu} ${menuOpen ? styles.open : ''}`}>
            <div className={styles.menuClose} onClick={closeMenu}/>
            <div className={styles.menuLinks}>
              <p className={styles.menuTopic} onClick={anchorFeaturesMobile}>FEATURES</p>
              <p className={styles.menuTopic} onClick={anchorMMMobile}> MASTER MOTION</p>
              <p className={styles.menuTopic} onClick={anchorRAMobile}>REPLICATE</p>
              <p className={styles.menuTopic} onClick={anchorDAMobile}>DYNAMIC</p>
              <p className={styles.menuTopic} onClick={anchorPointMobile}>POINT</p>
              <p className={styles.menuTopic} onClick={anchorClientsMobile}>CLIENTES</p>
              <Link href="/formbr" style={{textDecoration: 'none', color: '#FFFFFF'}}>
                <p className={styles.menuTopic}>CONTATO</p>
              </Link>
              <div className={styles.menuLoginButton} onClick={reanimLink} />
            </div>
            <div className={styles.menuSocials}>
              <div className={styles.footerFace} onClick={faceLink} />
              <div className={styles.footerInsta} onClick={instaLink} />
              <div className={styles.footerLinkedin} onClick={linkedinLink} />
            </div>
            <div className={styles.menuLogo} />
          </div> 
          <div className={styles.headerTopicsContainer}>
            <p className={styles.headerTopic} onClick={anchorFeatures}>FEATURES</p>
            <p className={styles.headerTopic} onClick={anchorMM}> MASTER MOTION</p>
            <p className={styles.headerTopic} onClick={anchorRA}>REPLICATE</p>
            <p className={styles.headerTopic} onClick={anchorDA}>DYNAMIC</p>
            <p className={styles.headerTopic} onClick={anchorPoint}>POINT</p>
            <p className={styles.headerTopic} onClick={anchorClients}>CLIENTES</p>
            <Link href="/formbr" style={{textDecoration: 'none', color: '#000000'}}>
              <p className={styles.headerTopic}>CONTATO</p>
            </Link>
            <div className={styles.headerLoginButton} onClick={reanimLink} />
          </div>
        </div>

        <div className={styles.mainFirstSection}>
          <div className={styles.mainLeft}>
            <div className={styles.mainText} />
            <p>A plataforma de automação que vai revolucionar sua produção de banner digitais.</p>
            <Link href="/formbr">
              <div className={styles.mainContrateButton} />
            </Link>
          </div>
          <div className={styles.mainRight}>
            <div className={styles.mainAutomatizeArt} />
          </div>
        </div>

        <div className={styles.mainStars} />
      
        <div className={styles.qualitiesContainer} ref={featuresRef} >
          <div>
            <div className={styles.iconCheck} />
            <h2>Mais qualidade</h2>
            <p>Replique a peça master em diversos formatos tanto animados quanto estáticos.</p>
          </div>
          <div>
            <div className={styles.iconProject} />
            <h2>Mais escalabilidade</h2>
            <p>Crie milhares de peças a partir de uma só.</p>
          </div>
          <div>
            <div className={styles.iconClock} />
            <h2>Mais agilidade</h2>
            <p>Tenha uma campanha inteira nas mãos em poucos cliques.</p>
          </div>
        </div>
      

        <div className={styles.gradient3} />
        <div className={styles.gradient4} />

        <div className={styles.modulesContainerExternal}>
          <div className={styles.modulesContainer}>
            <h1>Revolucione a sua operação!</h1>
            <p className={styles.modulesContainerText1}>O <b>re.animate</b> é dividido em três módulos:</p>
            <div className={styles.logosContainer}>
              <div className={styles.logoMM} />
              <div className={styles.logoRA} />
              <div className={styles.logoDA} />
            </div>
            <p className={styles.modulesContainerText2}>Três programas que vão trazer automação a sua linha de produção de banners.</p>

          <div className={styles.modulesDetails}>

            <div className={styles.modulesDetailsContainerMM}>
              <div className={styles.pcMM} ref={mmRef} />
              <div className={styles.modulesDetailsContainerInfos}>
                <div className={styles.logoMM} />
                <p>Dê vida às suas criações de forma simples, e criativa, transformando elementos estáticos, em animações de alto nível. De maneira rápida, fácil e totalmente no code.</p>
                <div className={styles.buttonMM} onClick={reanimLink} />
              </div>
            </div>

            <div className={styles.modulesDetailsContainerRA}>
              <div className={styles.modulesDetailsContainerInfos}>
                <div className={styles.logoRA} />
                <p>Otimize o processo de replicação para diversos formatos em apenas um clique, mantendo a qualidade visual. Mudou alguma informação? Altere rapidamente de modo automático toda sua linha criativa.</p>
                <div className={styles.buttonRA} onClick={reanimLink} />
              </div>
              <div className={styles.pcRA} ref={raRef}/>
            </div>

            <div className={styles.modulesDetailsContainerDA}>
              <div className={styles.pcDA} ref={daRef} />
              <div className={styles.modulesDetailsContainerInfos}>
                <div className={styles.logoDA} />
                <p>Em casos onde existem muitos produtos e ofertas a serem publicados, crie um feed com inúmeras variações de conteúdos em um só lugar utilizando apenas o KV.</p>
                <div className={styles.buttonDA} onClick={reanimLink} />
              </div>
            </div>

          </div>

          <div className={styles.aboutPoint} ref={pointRef} onClick={pointLink} />
        </div>
      </div>

        <div className={styles.carousel}>
          <h1 className={styles.carouselTitle} ref={clientsRef}>Nossos clientes:</h1>
          <swiper-container ref={paginationRef} init="false">
            <SwiperSlide>
              <div className={styles.carouselClients}>
                <div className={styles.client1} />
                <div className={styles.client2} />
                <div className={styles.client3} />
                <div className={styles.client4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.carouselClients}>
                <div className={styles.client5} />
                <div className={styles.client6} />
                <div className={styles.client7} />
                <div className={styles.client8} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.carouselClients}>
                <div className={styles.client9} />
                <div className={styles.client10} />
                <div className={styles.client11} />
                <div className={styles.client12} />
              </div>
            </SwiperSlide>
          </swiper-container>
        </div>
      </div>

      <div className={styles.gradient5} />

      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogoLinks}>
            <div className={styles.footerLogo} onClick={anchorHeader} />
            <div>
              <h2>Reanimate</h2>
              <p onClick={anchorHeader}>Sobre</p>
              <p onClick={anchorFeatures}>Features</p>
              <Link href="/formbr" style={{textDecoration: 'none', color: '#FFFFFF'}}>
                <p>Suporte</p>
              </Link>
              <Link href="/formbr" style={{textDecoration: 'none', color: '#FFFFFF'}}>
                <p>Contato</p>
              </Link>
            </div>
          </div>
          <div className={styles.footerSubscribe}>
            <h2>Siga-nos para mais informações:</h2>
            <input placeholder='seuemail@seudominio.com.br' className={styles.footerInput}/>
            <div className={styles.footerButton} onClick={() => alert('Obrigado por se inscrever!')} />
          </div>
        </div>
        <div className={styles.footerLine} />
        <div className={styles.footerSocials}>
          <div className={styles.footerFace} onClick={faceLink} />
          <div className={styles.footerInsta} onClick={instaLink} />
          <div className={styles.footerLinkedin} onClick={linkedinLink} />
        </div>
        <div className={styles.footerLegal}>©2024 PointMedia. All Rights Reserved</div>
      </div>
      
    </div>
  );
}
