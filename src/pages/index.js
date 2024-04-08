import {useEffect, useRef, useState } from 'react'
import styles from "../styles/index.module.css";
import Link from 'next/link'
import Head from 'next/head'

import {Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { register } from "swiper/element/bundle";

register();

export default function Home() {

  /***** WINDOW SIZE  *****/

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [])

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
        function handleResize() {

          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  const size = useWindowSize();

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

/***** VIDEO MODALS  *****/

  const [modalMMOpen, setModalMMOpen] = useState(false)

  const openModalMM = () => {
    setModalMMOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModalMM = () => {
    setModalMMOpen(false)
    document.body.style.overflow = 'auto'
  }

  const [modalDAOpen, setModalDAOpen] = useState(false)

  const openModalDA = () => {
    setModalDAOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModalDA = () => {
    setModalDAOpen(false)
    document.body.style.overflow = 'auto'
  }

  const [modalRAOpen, setModalRAOpen] = useState(false)

  const openModalRA = () => {
    setModalRAOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModalRA = () => {
    setModalRAOpen(false)
    document.body.style.overflow = 'auto'
  }

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

    /***** EMAIL INPUT *****/

    const [email, setEmail] = useState('')

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async () => {
      try {
          const response = await fetch('https://api.reanimate.com.br/api/lead', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email })
          });
          if (response.ok) {
              alert('Obrigado, seu email foi cadastrado com sucesso!');
              setEmail('');
          } else {
              alert('Por favor garanta que seu endereço de email esteja correto e tente novamente.')
              console.error('Erro ao cadastrar o email:', response.statusText);
          }
      } catch (error) {
          alert('Por favor garanta que seu endereço de email esteja correto e tente novamente.')
          console.error('Erro ao cadastrar o email:', error.message);
      }
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
        setMenuOpen(false)
    }

    const anchorFeatures = () => {
      const featuresPosition = featuresRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
          top: featuresPosition,
          behavior: 'smooth',
      });
      setMenuOpen(false)
    };

    const anchorMM = () => {
      const mmPosition = mmRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: mmPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorRA = () => {
      const raPosition = raRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: raPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorDA = () => {
      const daPosition = daRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: daPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorPoint = () => {
      const pointPosition = pointRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: pointPosition,
        behavior: 'smooth',
      })
      setMenuOpen(false)
    }

    const anchorClients = () => {
      const clientsPosition = clientsRef.current.getBoundingClientRect().top + window.pageYOffset;
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

      <div className={styles.main}>

          <div className={styles.gradient1} />
          <div className={styles.gradient2} />

          <div className={styles.header}>
            <div className={styles.headerLogo} />
            <div className={styles.headerHamburger} onClick={openMenu}/>
            <div className={`${styles.hoverMenu} ${menuOpen ? styles.open : ''}`}>
              <div className={styles.menuClose} onClick={closeMenu}/>
              <div className={styles.menuLinks}>
                <p className={styles.menuTopic} onClick={anchorFeatures}>FEATURES</p>
                <p className={styles.menuTopic} onClick={anchorMM}>MASTER MOTION</p>
                <p className={styles.menuTopic} onClick={anchorRA}>REPLICATE</p>
                <p className={styles.menuTopic} onClick={anchorDA}>DYNAMIC</p>
                <p className={styles.menuTopic} onClick={anchorPoint}>POINT</p>
                <p className={styles.menuTopic} onClick={anchorClients}>CLIENTES</p>
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

          {modalMMOpen ?
            <div className={styles.galleryModal}>
              <div className={styles.modalBG} />
              <div className={styles.modalClose} onClick={closeModalMM} />
              <video className={styles.videoMM} controls autoPlay>
                <source src="/mm.mp4" type="video/mp4" />
              </video>
            </div>
          : null}

          {modalRAOpen ?
            <div className={styles.galleryModal}>
              <div className={styles.modalBG} />
              <div className={styles.modalClose} onClick={closeModalRA} />
              <video className={styles.videoRA} controls autoPlay>
                <source src="/ra.mp4" type="video/mp4" />
              </video>
            </div>
          : null}    

          {modalDAOpen ?
            <div className={styles.galleryModal}>
              <div className={styles.modalBG} />
              <div className={styles.modalClose} onClick={closeModalDA} />
              <video className={styles.videoDA} controls autoPlay>
                <source src="/da.mp4" type="video/mp4" />
              </video>
            </div>
          : null}

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
                  <div className={styles.buttonMM} onClick={openModalMM} />
                </div>
              </div>

              <div className={styles.modulesDetailsContainerRA}>
                <div className={styles.modulesDetailsContainerInfos}>
                  <div className={styles.logoRA} />
                  <p>Otimize o processo de replicação para diversos formatos em apenas um clique, mantendo a qualidade visual. Mudou alguma informação? Altere rapidamente de modo automático toda sua linha criativa.</p>
                  <div className={styles.buttonRA} onClick={openModalRA} />
                </div>
                <div className={styles.pcRA} ref={raRef}/>
              </div>

              <div className={styles.modulesDetailsContainerDA}>
                <div className={styles.pcDA} ref={daRef} />
                <div className={styles.modulesDetailsContainerInfos}>
                  <div className={styles.logoDA} />
                  <p>Em casos onde existem muitos produtos e ofertas a serem publicados, crie um feed com inúmeras variações de conteúdos em um só lugar utilizando apenas o KV.</p>
                  <div className={styles.buttonDA} onClick={openModalDA} />
                </div>
              </div>

            </div>

            <div className={styles.aboutPoint} ref={pointRef} onClick={pointLink} />
          </div>
        </div>

        <div className={styles.carousel}>
          <div className={styles.carouselTitle} ref={clientsRef}>Nossos clientes:</div>
          {size.width >= 2400 ? 
          <Swiper slidesPerView={8.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
            <SwiperSlide className={styles.clientsSwipe}>
              <div className={styles.client1} />
              <div className={styles.client2} />
              <div className={styles.client3} />
              <div className={styles.client4} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client5} />
              <div className={styles.client6} />
              <div className={styles.client7} />
              <div className={styles.client8} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client9} />
              <div className={styles.client10} />
              <div className={styles.client11} />
              <div className={styles.client12} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client13} />
              <div className={styles.client14} />
              <div className={styles.client15} />
              <div className={styles.client16} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client17} />
              <div className={styles.client18} />
              <div className={styles.client19} />
              <div className={styles.client20} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client21} />
              <div className={styles.client22} />
              <div className={styles.client23} />
              <div className={styles.client24} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client25} />
              <div className={styles.client26} />
              <div className={styles.client27} />
              <div className={styles.client28} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client29} />
              <div className={styles.client30} />
              <div className={styles.client31} />
              <div className={styles.client32} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client33} />
              <div className={styles.client34} />
              <div className={styles.client35} />
              <div className={styles.client36} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client37} />
              <div className={styles.client38} />
              <div className={styles.client39} />
              <div className={styles.client40} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client41} />
              <div className={styles.client42} />
              <div className={styles.client43} />
              <div className={styles.client44} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client45} />
              <div className={styles.client46} />
              <div className={styles.client47} />
              <div className={styles.client48} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client49} />
              <div className={styles.client50} />
              <div className={styles.client51} />
              <div className={styles.client52} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client53} />
              <div className={styles.client54} />
              <div className={styles.client55} />
              <div className={styles.client56} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client57} />
              <div className={styles.client58} />
              <div className={styles.client59} />
              <div className={styles.client60} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client61} />
              <div className={styles.client62} />
              <div className={styles.client63} />
              <div className={styles.client64} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client65} />
              <div className={styles.client66} />
              <div className={styles.client67} />
              <div className={styles.client68} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client69} />
              <div className={styles.client70} />
              <div className={styles.client71} />
              <div className={styles.client72} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client73} />
              <div className={styles.client74} />
              <div className={styles.client75} />
              <div className={styles.client76} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client77} />
              <div className={styles.client78} />
              <div className={styles.client79} />
              <div className={styles.client80} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client81} />
              <div className={styles.client82} />
              <div className={styles.client83} />
              <div className={styles.client84} />
            </SwiperSlide>
          </Swiper>
          :
          size.width >= 1600 ?
        <Swiper slidesPerView={6.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
          <SwiperSlide className={styles.clientsSwipe}>
              <div className={styles.client1} />
              <div className={styles.client2} />
              <div className={styles.client3} />
              <div className={styles.client4} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client5} />
              <div className={styles.client6} />
              <div className={styles.client7} />
              <div className={styles.client8} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client9} />
              <div className={styles.client10} />
              <div className={styles.client11} />
              <div className={styles.client12} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client13} />
              <div className={styles.client14} />
              <div className={styles.client15} />
              <div className={styles.client16} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client17} />
              <div className={styles.client18} />
              <div className={styles.client19} />
              <div className={styles.client20} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client21} />
              <div className={styles.client22} />
              <div className={styles.client23} />
              <div className={styles.client24} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client25} />
              <div className={styles.client26} />
              <div className={styles.client27} />
              <div className={styles.client28} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client29} />
              <div className={styles.client30} />
              <div className={styles.client31} />
              <div className={styles.client32} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client33} />
              <div className={styles.client34} />
              <div className={styles.client35} />
              <div className={styles.client36} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client37} />
              <div className={styles.client38} />
              <div className={styles.client39} />
              <div className={styles.client40} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client41} />
              <div className={styles.client42} />
              <div className={styles.client43} />
              <div className={styles.client44} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client45} />
              <div className={styles.client46} />
              <div className={styles.client47} />
              <div className={styles.client48} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client49} />
              <div className={styles.client50} />
              <div className={styles.client51} />
              <div className={styles.client52} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client53} />
              <div className={styles.client54} />
              <div className={styles.client55} />
              <div className={styles.client56} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client57} />
              <div className={styles.client58} />
              <div className={styles.client59} />
              <div className={styles.client60} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client61} />
              <div className={styles.client62} />
              <div className={styles.client63} />
              <div className={styles.client64} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client65} />
              <div className={styles.client66} />
              <div className={styles.client67} />
              <div className={styles.client68} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client69} />
              <div className={styles.client70} />
              <div className={styles.client71} />
              <div className={styles.client72} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client73} />
              <div className={styles.client74} />
              <div className={styles.client75} />
              <div className={styles.client76} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client77} />
              <div className={styles.client78} />
              <div className={styles.client79} />
              <div className={styles.client80} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client81} />
              <div className={styles.client82} />
              <div className={styles.client83} />
              <div className={styles.client84} />
            </SwiperSlide>
          </Swiper>
          :
          size.width >= 1280 ? 
          <Swiper slidesPerView={4.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
            <SwiperSlide>
              <div className={styles.client1} />
              <div className={styles.client2} />
              <div className={styles.client3} />
              <div className={styles.client4} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client5} />
              <div className={styles.client6} />
              <div className={styles.client7} />
              <div className={styles.client8} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client9} />
              <div className={styles.client10} />
              <div className={styles.client11} />
              <div className={styles.client12} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client13} />
              <div className={styles.client14} />
              <div className={styles.client15} />
              <div className={styles.client16} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client17} />
              <div className={styles.client18} />
              <div className={styles.client19} />
              <div className={styles.client20} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client21} />
              <div className={styles.client22} />
              <div className={styles.client23} />
              <div className={styles.client24} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client25} />
              <div className={styles.client26} />
              <div className={styles.client27} />
              <div className={styles.client28} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client29} />
              <div className={styles.client30} />
              <div className={styles.client31} />
              <div className={styles.client32} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client33} />
              <div className={styles.client34} />
              <div className={styles.client35} />
              <div className={styles.client36} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client37} />
              <div className={styles.client38} />
              <div className={styles.client39} />
              <div className={styles.client40} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client41} />
              <div className={styles.client42} />
              <div className={styles.client43} />
              <div className={styles.client44} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client45} />
              <div className={styles.client46} />
              <div className={styles.client47} />
              <div className={styles.client48} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client49} />
              <div className={styles.client50} />
              <div className={styles.client51} />
              <div className={styles.client52} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client53} />
              <div className={styles.client54} />
              <div className={styles.client55} />
              <div className={styles.client56} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client57} />
              <div className={styles.client58} />
              <div className={styles.client59} />
              <div className={styles.client60} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client61} />
              <div className={styles.client62} />
              <div className={styles.client63} />
              <div className={styles.client64} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client65} />
              <div className={styles.client66} />
              <div className={styles.client67} />
              <div className={styles.client68} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client69} />
              <div className={styles.client70} />
              <div className={styles.client71} />
              <div className={styles.client72} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client73} />
              <div className={styles.client74} />
              <div className={styles.client75} />
              <div className={styles.client76} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client77} />
              <div className={styles.client78} />
              <div className={styles.client79} />
              <div className={styles.client80} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client81} />
              <div className={styles.client82} />
              <div className={styles.client83} />
              <div className={styles.client84} />
            </SwiperSlide>
          </Swiper>
          :
          size.width >= 768 ? 
          <Swiper slidesPerView={3.5} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
            <SwiperSlide>
              <div className={styles.client1} />
              <div className={styles.client2} />
              <div className={styles.client3} />
              <div className={styles.client4} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client5} />
              <div className={styles.client6} />
              <div className={styles.client7} />
              <div className={styles.client8} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client9} />
              <div className={styles.client10} />
              <div className={styles.client11} />
              <div className={styles.client12} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client13} />
              <div className={styles.client14} />
              <div className={styles.client15} />
              <div className={styles.client16} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client17} />
              <div className={styles.client18} />
              <div className={styles.client19} />
              <div className={styles.client20} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client21} />
              <div className={styles.client22} />
              <div className={styles.client23} />
              <div className={styles.client24} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client25} />
              <div className={styles.client26} />
              <div className={styles.client27} />
              <div className={styles.client28} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client29} />
              <div className={styles.client30} />
              <div className={styles.client31} />
              <div className={styles.client32} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client33} />
              <div className={styles.client34} />
              <div className={styles.client35} />
              <div className={styles.client36} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client37} />
              <div className={styles.client38} />
              <div className={styles.client39} />
              <div className={styles.client40} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client41} />
              <div className={styles.client42} />
              <div className={styles.client43} />
              <div className={styles.client44} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client45} />
              <div className={styles.client46} />
              <div className={styles.client47} />
              <div className={styles.client48} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client49} />
              <div className={styles.client50} />
              <div className={styles.client51} />
              <div className={styles.client52} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client53} />
              <div className={styles.client54} />
              <div className={styles.client55} />
              <div className={styles.client56} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client57} />
              <div className={styles.client58} />
              <div className={styles.client59} />
              <div className={styles.client60} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client61} />
              <div className={styles.client62} />
              <div className={styles.client63} />
              <div className={styles.client64} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client65} />
              <div className={styles.client66} />
              <div className={styles.client67} />
              <div className={styles.client68} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client69} />
              <div className={styles.client70} />
              <div className={styles.client71} />
              <div className={styles.client72} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client73} />
              <div className={styles.client74} />
              <div className={styles.client75} />
              <div className={styles.client76} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client77} />
              <div className={styles.client78} />
              <div className={styles.client79} />
              <div className={styles.client80} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client81} />
              <div className={styles.client82} />
              <div className={styles.client83} />
              <div className={styles.client84} />
            </SwiperSlide>
          </Swiper>
          :
          <Swiper slidesPerView={1.7} spaceBetween={10} freeMode={true} modules={[FreeMode]} className={styles.clientsGallery}>
            <SwiperSlide>
              <div className={styles.client1} />
              <div className={styles.client2} />
              <div className={styles.client3} />
              <div className={styles.client4} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client5} />
              <div className={styles.client6} />
              <div className={styles.client7} />
              <div className={styles.client8} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client9} />
              <div className={styles.client10} />
              <div className={styles.client11} />
              <div className={styles.client12} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client13} />
              <div className={styles.client14} />
              <div className={styles.client15} />
              <div className={styles.client16} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client17} />
              <div className={styles.client18} />
              <div className={styles.client19} />
              <div className={styles.client20} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client21} />
              <div className={styles.client22} />
              <div className={styles.client23} />
              <div className={styles.client24} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client25} />
              <div className={styles.client26} />
              <div className={styles.client27} />
              <div className={styles.client28} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client29} />
              <div className={styles.client30} />
              <div className={styles.client31} />
              <div className={styles.client32} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client33} />
              <div className={styles.client34} />
              <div className={styles.client35} />
              <div className={styles.client36} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client37} />
              <div className={styles.client38} />
              <div className={styles.client39} />
              <div className={styles.client40} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client41} />
              <div className={styles.client42} />
              <div className={styles.client43} />
              <div className={styles.client44} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client45} />
              <div className={styles.client46} />
              <div className={styles.client47} />
              <div className={styles.client48} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client49} />
              <div className={styles.client50} />
              <div className={styles.client51} />
              <div className={styles.client52} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client53} />
              <div className={styles.client54} />
              <div className={styles.client55} />
              <div className={styles.client56} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client57} />
              <div className={styles.client58} />
              <div className={styles.client59} />
              <div className={styles.client60} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client61} />
              <div className={styles.client62} />
              <div className={styles.client63} />
              <div className={styles.client64} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client65} />
              <div className={styles.client66} />
              <div className={styles.client67} />
              <div className={styles.client68} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client69} />
              <div className={styles.client70} />
              <div className={styles.client71} />
              <div className={styles.client72} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client73} />
              <div className={styles.client74} />
              <div className={styles.client75} />
              <div className={styles.client76} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client77} />
              <div className={styles.client78} />
              <div className={styles.client79} />
              <div className={styles.client80} />
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.client81} />
              <div className={styles.client82} />
              <div className={styles.client83} />
              <div className={styles.client84} />
            </SwiperSlide>
          </Swiper>
          }
        </div>

        <div className={styles.footer}>
          <div className={styles.gradient5} />
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
                <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="seuemail@seudominio.com.br" className={styles.footerInput} value={email} onChange={handleInputChange} required/>
                  <div className={styles.footerButton} onClick={handleSubmit} />
                </form>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <div className={styles.footerLine} />
              <div className={styles.footerSocials}>
                <div className={styles.footerFace} onClick={faceLink} />
                <div className={styles.footerInsta} onClick={instaLink} />
                <div className={styles.footerLinkedin} onClick={linkedinLink} />
              </div>
              <div className={styles.footerLegal}>©2024 PointMedia. All Rights Reserved</div>
            </div>
        </div>
      </div>
      
    </div>
  );
}
