"use client";

import { useState, useEffect, useRef } from 'react'
import styles from "./page.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { register } from "swiper/element/bundle";

register();

export default function Home() {

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
                display: flex;
            }

            .swiper-pagination {
                margin: 0px 0 50px -250px !important;
            } 

            .swiper-pagination-bullet {
                width: 27px;
                height: 27px;
                margin: 0px 10px !important;
                background-color: #E8336A;
            }
        `,
        ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
    }, []);

    function reanimLink () {
      window.open('https://www.reanimate.com.br/', "_self");
    }

    const featuresRef = useRef(null);
    const mmRef = useRef(null);
    const raRef = useRef(null);
    const daRef = useRef(null);
    const pointRef = useRef(null);
    const clientsRef = useRef(null);

    const anchorFeatures = () => {
        const featuresPosition = featuresRef.current.offsetTop -50;
        window.scrollTo({
          top: featuresPosition,
          behavior: 'smooth',
        })
    }

    const anchorMM = () => {
      const mmPosition = mmRef.current.offsetTop -50;
      window.scrollTo({
        top: mmPosition,
        behavior: 'smooth',
      })
    }

    const anchorRA = () => {
      const raPosition = raRef.current.offsetTop -50;
      window.scrollTo({
        top: raPosition,
        behavior: 'smooth',
      })
    }

    const anchorDA = () => {
      const daPosition = daRef.current.offsetTop -50;
      window.scrollTo({
        top: daPosition,
        behavior: 'smooth',
      })
    }

    const anchorPoint = () => {
      const pointPosition = pointRef.current.offsetTop -50;
      window.scrollTo({
        top: pointPosition,
        behavior: 'smooth',
      })
    }

    const anchorClients = () => {
      const clientsPosition = clientsRef.current.offsetTop -50;
      window.scrollTo({
        top: clientsPosition,
        behavior: 'smooth',
      })
    }

  return (
    <div>
      <div className={styles.gradient1} />

      <div className={styles.header}>
        <div className={styles.headerLogo} />
        <div className={styles.headerTopicsContainer}>
          <p className={styles.headerTopic} onClick={anchorFeatures}>FEATURES</p>
          <p className={styles.headerTopic} onClick={anchorMM}> MASTER MOTION</p>
          <p className={styles.headerTopic} onClick={anchorRA}>REPLICATE</p>
          <p className={styles.headerTopic} onClick={anchorDA}>DYNAMIC</p>
          <p className={styles.headerTopic} onClick={anchorPoint}>POINT</p>
          <p className={styles.headerTopic} onClick={anchorClients}>CLIENTES</p>
          <p className={styles.headerTopic}>CONTATO</p>
          <div className={styles.headerLoginButton} onClick={reanimLink} />
        </div>
      </div>

      <div className={styles.gradient2} />

      <div className={styles.main}>
        <div className={styles.mainFirstSection}>
          <div className={styles.mainLeft}>
            <div className={styles.mainText} />
            <div className={styles.mainContrateButton} />
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
            <div className={styles.modulesDetailsContainer}>
              <div className={styles.pcMM} ref={mmRef} />
              <div className={styles.modulesDetailsContainerInfos}>
                <div className={styles.logoMM} />
                <p>Dê vida às suas criações de forma simples, e criativa, transformando elementos estáticos, em animações de alto nível. De maneira rápida, fácil e totalmente no code.</p>
                <div className={styles.buttonMM} />
              </div>
            </div>
            <div className={styles.modulesDetailsContainer}>
              <div className={styles.modulesDetailsContainerInfos}>
                <div className={styles.logoRA} />
                <p>Otimize o processo de replicação para diversos formatos em apenas um clique, mantendo a qualidade visual. Mudou alguma informação? Altere rapidamente de modo automático toda sua linha criativa.</p>
                <div className={styles.buttonRA} />
              </div>
              <div className={styles.pcRA} ref={raRef}/>
            </div>
            <div className={styles.modulesDetailsContainer}>
              <div className={styles.pcDA} ref={daRef} />
              <div className={styles.modulesDetailsContainerInfos}>
                <div className={styles.logoDA} />
                <p>Em casos onde existem muitos produtos e ofertas a serem publicados, crie um feed com inúmeras variações de conteúdos em um só lugar utilizando apenas o KV.</p>
                <div className={styles.buttonDA} />
              </div>
            </div>
          </div>
          <div className={styles.aboutPoint} ref={pointRef} />
        </div>

        <div className={styles.carousel}>
          <h1 className={styles.carouselTitle} ref={clientsRef}>Nossos clientes:</h1>
          <swiper-container ref={paginationRef} init="false">
            <SwiperSlide>
              <div style={{display: 'flex', margin: '0 0 0 300px'}}>
                <div className={styles.client1} />
                <div className={styles.client2} />
                <div className={styles.client3} />
                <div className={styles.client4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{display: 'flex', margin: '0 0 0 300px'}}>
                <div className={styles.client5} />
                <div className={styles.client6} />
                <div className={styles.client7} />
                <div className={styles.client8} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{display: 'flex', margin: '0 0 0 300px'}}>
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
          <div className={styles.footerLogo} />
          <div>
            <h2>Reanimate</h2>
            <p>Sobre</p>
            <p>Features</p>
            <p>Suporte</p>
            <p>Contato</p>
          </div>
          <div>
            <h2>Siga-nos para mais informações:</h2>
            <input placeholder='seuemail@seudominio.com.br' className={styles.footerInput}/>
            <div className={styles.footerButton} />
          </div>
        </div>
        <div className={styles.footerLine} />
        <div className={styles.footerSocials}>
          <div className={styles.footerFace} />
          <div className={styles.footerInsta} />
          <div className={styles.footerLinkedin} />
        </div>
        <div className={styles.footerLegal}>©2024 PointMedia. All Rights Reserved</div>
      </div>
      
    </div>
  );
}
