import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'

const PlansPricing = (props) => {
  return (
    <>
      <div className="plans-pricing-container">
        <Head>
          <title>Plans & Pricing | Kristash</title>
          <meta
            name="description"
            content="Strategic digital success with Kristash in Omaha. Explore our Plans &amp; Pricing for expert web design, SEO (local), content creation, logo design, branding, &amp; business coaching."
          />
          <meta property="og:title" content="Plans &amp; Pricing | Kristash" />
          <meta
            property="og:description"
            content="Strategic digital success with Kristash in Omaha. Explore our Plans &amp; Pricing for expert web design, SEO (local), content creation, logo design, branding, &amp; business coaching."
          />
        </Head>
        <div className="plans-pricing-header">
          <header
            data-thq="thq-navbar"
            className="navbarContainer plans-pricing-navbar-interactive"
          >
            <a
              href="https://kristash.com"
              id="kristash logo"
              target="_blank"
              rel="noreferrer noopener"
              className="plans-pricing-logo logo"
            >
              Kristash
            </a>
            <div
              data-thq="thq-navbar-nav"
              className="plans-pricing-desktop-menu"
            >
              <nav className="plans-pricing-links">
                <Link href="/">
                  <a className="plans-pricing-link bodySmall">Home</a>
                </Link>
                <Link href="/faq">
                  <a className="plans-pricing-link01 bodySmall">FAQ</a>
                </Link>
                <Link href="/plans-pricing">
                  <a className="plans-pricing-link02 bodySmall">
                    Plans &amp; Pricing
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="plans-pricing-link03 bodySmall">Portfolio</a>
                </Link>
                <Link href="/resources">
                  <a className="plans-pricing-link04 bodySmall">Resources</a>
                </Link>
                <span className="plans-pricing-contact bodySmall">Contact</span>
              </nav>
              <div className="plans-pricing-buttons">
                <button className="plans-pricing-login buttonFlat">
                  Login
                </button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="plans-pricing-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="plans-pricing-icon socialIcons"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="plans-pricing-mobile-menu1 mobileMenu"
            >
              <div className="plans-pricing-nav">
                <div className="plans-pricing-top">
                  <span className="logo">ONLINE MARKETING AGENCY</span>
                  <div
                    data-thq="thq-close-menu"
                    className="plans-pricing-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="plans-pricing-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="plans-pricing-links1">
                  <Link href="/">
                    <a className="plans-pricing-link05 bodySmall">Home</a>
                  </Link>
                  <Link href="/faq">
                    <a className="plans-pricing-link06 bodySmall">FAQ</a>
                  </Link>
                  <Link href="/plans-pricing">
                    <a className="plans-pricing-link07 bodySmall">
                      Plans &amp; Pricing
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="plans-pricing-link08 bodySmall">Portfolio</a>
                  </Link>
                  <Link href="/resources">
                    <a className="plans-pricing-link09 bodySmall">Resources</a>
                  </Link>
                  <Link href="/contact">
                    <a className="plans-pricing-link10 bodySmall">Contact</a>
                  </Link>
                </nav>
                <div className="plans-pricing-buttons1">
                  <button className="buttonFlat">Login</button>
                  <button className="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="plans-pricing-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="plans-pricing-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="plans-pricing-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="plans-pricing-hero">
          <div className="plans-pricing-hero1 heroContainer">
            <div className="plans-pricing-container01">
              <h1
                id="plans &amp; pricing page"
                className="plans-pricing-hero-heading heading1"
              >
                Plans &amp; Pricing
              </h1>
            </div>
          </div>
        </div>
        <div className="plans-pricing-pricing pricingContainer">
          <div className="plans-pricing-container02">
            <h2
              id="a custom website for your business"
              className="heading2 plans-pricing-pricing-heading"
            >
              A Custom Website for Your Business
            </h2>
            <span className="plans-pricing-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  We offer flexible pricing options to meet your specific needs
                </span>
              </span>
            </span>
          </div>
          <div className="plans-pricing-container03">
            <div
              id="portfolio website"
              className="freePricingCard plans-pricing-pricing-card"
            >
              <div className="plans-pricing-container04">
                <span
                  id="portfolio site"
                  className="plans-pricing-text02 heading3"
                >
                  Portfolio
                </span>
                <span className="bodySmall">
                  A basic website for an artist or musician that wants to
                  showcase their art/music.
                </span>
              </div>
              <div className="plans-pricing-container05">
                <span className="plans-pricing-text03">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="plans-pricing-free-plan-price">597</span>
              </div>
              <div className="plans-pricing-container06">
                <span className="plans-pricing-text06">✔</span>
                <div className="plans-pricing-container07">
                  <div className="plans-pricing-container08">
                    <span className="plans-pricing-text07">✔</span>
                    <span className="bodySmall">Base Website design</span>
                  </div>
                  <div className="plans-pricing-container09">
                    <span className="plans-pricing-text08">✔</span>
                    <span className="bodySmall">Basic Logo design</span>
                  </div>
                  <div className="plans-pricing-container10">
                    <span className="plans-pricing-text09">✔</span>
                    <span className="bodySmall">Mobile-friendly design</span>
                  </div>
                  <div className="plans-pricing-container11">
                    <span className="plans-pricing-text10">✔</span>
                    <span className="bodySmall">Basic SEO</span>
                  </div>
                  <span className="bodySmall">
                    Headless CMS integration for adding/updating website content
                  </span>
                  <div className="plans-pricing-container12">
                    <span className="plans-pricing-text11">✔</span>
                    <span className="bodySmall">Business Consultation</span>
                  </div>
                </div>
              </div>
              <a
                href="mailto:website@kristash.com?subject=I Need a Portfolio Website"
                className="plans-pricing-link11 buttonOutline"
              >
                Continue with a PORTFOLIO site
              </a>
            </div>
            <div
              id="professional website"
              className="basicPricingCard plans-pricing-pricing-card1"
            >
              <div className="plans-pricing-container13">
                <span
                  id="professional"
                  className="plans-pricing-text12 heading3"
                >
                  Professional
                </span>
                <span className="bodySmall">
                  An affordable SEO-optimized website for small businesses that
                  are primarily service-based. (Tattoo artists, barbers,
                  cleaners, chiropractors, holistic health practitioners; etc.)
                </span>
              </div>
              <div className="plans-pricing-container14">
                <span className="plans-pricing-text13">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="plans-pricing-basic-plan-pricing">897</span>
              </div>
              <div className="plans-pricing-container15">
                <div className="plans-pricing-container16">
                  <span className="plans-pricing-text16">✔</span>
                  <span className="bodySmall">
                    All features of PORTFOLIO site, PLUS:
                  </span>
                </div>
                <div className="plans-pricing-container17">
                  <span className="plans-pricing-text18">✔</span>
                  <span>Take appointments via a Booking Plugin</span>
                </div>
                <div className="plans-pricing-container18">
                  <span className="plans-pricing-text19">✔</span>
                  <span>Mobile-optimized design</span>
                </div>
                <div className="plans-pricing-container19">
                  <span className="plans-pricing-text20">✔</span>
                  <span className="bodySmall">Advanced SEO</span>
                </div>
                <div className="plans-pricing-container20">
                  <span className="plans-pricing-text21">✔</span>
                  <span className="bodySmall">
                    Business coaching ZOOM session (2x)
                  </span>
                </div>
              </div>
              <a
                href="mailto:website@kristash.com?subject=I Need a Professional Website"
                className="plans-pricing-link12 buttonFilledSecondary"
              >
                Build me a PROFESSIONAL website
              </a>
            </div>
            <div
              id="e-commerce website"
              className="proPricingCard plans-pricing-pricing-card2"
            >
              <div className="plans-pricing-container21">
                <span id="e-commerce" className="plans-pricing-text22 heading3">
                  <span>e-commerce</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  A comprehensive website for growing businesses that 
                </span>
              </div>
              <div className="plans-pricing-container22">
                <span className="plans-pricing-text25">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="plans-pricing-pro-plan-pricing">1497</span>
              </div>
              <div className="plans-pricing-container23">
                <div className="plans-pricing-container24">
                  <span className="plans-pricing-text28">✔</span>
                  <span className="bodySmall">
                     All features of PROFESSIONAL website
                  </span>
                </div>
                <div className="plans-pricing-container25">
                  <span className="plans-pricing-text30">✔</span>
                  <span className="bodySmall">
                    Ability to Sell Unlimited # of Products or Services
                  </span>
                </div>
                <div className="plans-pricing-container26">
                  <span className="plans-pricing-text31">✔</span>
                  <span className="bodySmall">Premium Logo design</span>
                </div>
                <div className="plans-pricing-container27">
                  <span className="plans-pricing-text32">✔</span>
                  <span className="bodySmall">Premium SEO</span>
                </div>
                <div className="plans-pricing-container28">
                  <span className="plans-pricing-text33">✔</span>
                  <span className="bodySmall">
                    Extensive business coaching via ZOOM
                  </span>
                </div>
              </div>
              <a
                href="mailto:website@kristash.com?subject=I Need an E-commerce Website"
                className="plans-pricing-link13 buttonFilledSecondary"
              >
                Build me an E-COMMERCE website
              </a>
            </div>
          </div>
        </div>
        <div className="plans-pricing-features">
          <div className="plans-pricing-features-container featuresContainer">
            <div id="services section" className="plans-pricing-features1">
              <h2
                id="our services"
                className="plans-pricing-features-heading heading2"
              >
                Our Services
              </h2>
              <div
                id="our services section"
                className="plans-pricing-our-services-container"
              >
                <FeatureCard
                  heading="Website Design"
                  subHeading="Custom and responsive website designs that showcase your brand."
                ></FeatureCard>
                <FeatureCard
                  heading="Content Creation"
                  subHeading="Creative content when &amp; where you need it. Ex: blog articles, social media posts, or product descriptions; etc."
                ></FeatureCard>
                <FeatureCard
                  heading="Logo Design"
                  subHeading="Unique and memorable logo designs that represent your business."
                ></FeatureCard>
                <FeatureCard
                  heading="Company Branding"
                  subHeading="Establish yourself online &amp; offline with custom business cards, social media handles, and more!"
                ></FeatureCard>
                <FeatureCard
                  heading="SEO &amp; Local SEO"
                  subHeading="Optimize your website to improve search engine rankings and increase organic traffic both generally &amp; locally in your area."
                ></FeatureCard>
                <FeatureCard
                  heading="Business Coaching"
                  subHeading="Expert guidance and strategies to help your business grow and succeed."
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="plans-pricing-footer">
          <footer id="footer" className="footerContainer plans-pricing-footer1">
            <div className="plans-pricing-container29">
              <div className="plans-pricing-container30">
                <a
                  href="https://kristash.com"
                  id="kristash"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="plans-pricing-logo2"
                >
                  Kristash
                </a>
              </div>
            </div>
            <nav className="plans-pricing-nav1">
              <Link href="/" id="home">
                <a className="plans-pricing-link14 bodySmall">Home</a>
              </Link>
              <Link href="/faq" id="faq">
                <a className="plans-pricing-link15 bodySmall">FAQ</a>
              </Link>
              <Link href="/plans-pricing" id="plans &amp; pricing">
                <a className="plans-pricing-link16 bodySmall">
                  Plans &amp; Pricing
                </a>
              </Link>
              <Link href="/portfolio" id="portfolio">
                <a className="plans-pricing-link17 bodySmall">Portfolio</a>
              </Link>
              <Link href="/resources" id="resources">
                <a className="plans-pricing-link18 bodySmall">Resources</a>
              </Link>
              <span id="contact" className="plans-pricing-contact1 bodySmall">
                Contact
              </span>
            </nav>
            <div className="plans-pricing-separator"></div>
            <span className="plans-pricing-text34">
              <span className="bodySmall">
                Copyright © 2024,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://kristash.com"
                target="_blank"
                rel="noreferrer noopener"
                className="plans-pricing-link19"
              >
                Kristash
              </a>
              <span className="bodySmall">. All Rights Reserved.</span>
            </span>
            <div className="plans-pricing-icon-group1">
              <a
                href="https://twitter.com/kristashinc"
                className="plans-pricing-link20"
              >
                <svg
                  id="twitter icon"
                  viewBox="0 0 950.8571428571428 1024"
                  className="plans-pricing-twitter-icon socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/kristashinc"
                className="plans-pricing-link21"
              >
                <svg
                  id="instagram icon"
                  viewBox="0 0 877.7142857142857 1024"
                  className="plans-pricing-instagram-icon socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com/KristashInc"
                target="_blank"
                rel="noreferrer noopener"
                className="plans-pricing-link22"
              >
                <svg
                  id="facebook icon"
                  viewBox="0 0 602.2582857142856 1024"
                  className="plans-pricing-facebook-icon socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
            <div className="plans-pricing-container31"></div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .plans-pricing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .plans-pricing-header {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .plans-pricing-logo {
            text-decoration: none;
          }
          .plans-pricing-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .plans-pricing-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .plans-pricing-link {
            transition: 0.3s;
            text-decoration: none;
          }
          .plans-pricing-link01 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .plans-pricing-link02 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .plans-pricing-link03 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .plans-pricing-link04 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .plans-pricing-contact {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .plans-pricing-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-pricing-login {
            margin-right: 32px;
          }
          .plans-pricing-burger-menu {
            display: none;
          }
          .plans-pricing-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .plans-pricing-mobile-menu1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
          }
          .plans-pricing-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plans-pricing-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .plans-pricing-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .plans-pricing-icon02 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .plans-pricing-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .plans-pricing-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-pricing-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .plans-pricing-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .plans-pricing-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .plans-pricing-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 96px;
            align-items: flex-start;
            justify-content: center;
          }
          .plans-pricing-hero1 {
            height: 176px;
          }
          .plans-pricing-container01 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-pricing-hero-heading {
            max-width: 800px;
            text-align: center;
          }
          .plans-pricing-pricing {
            background-color: #252f12;
          }
          .plans-pricing-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-pricing-pricing-sub-heading {
            text-align: center;
          }
          .plans-pricing-container03 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .plans-pricing-container04 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-pricing-text02 {
            text-transform: uppercase;
          }
          .plans-pricing-container05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .plans-pricing-text03 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .plans-pricing-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .plans-pricing-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .plans-pricing-text06 {
            line-height: 150%;
          }
          .plans-pricing-container07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .plans-pricing-container08 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text07 {
            line-height: 150%;
          }
          .plans-pricing-container09 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text08 {
            line-height: 150%;
          }
          .plans-pricing-container10 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text09 {
            line-height: 150%;
          }
          .plans-pricing-container11 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text10 {
            line-height: 150%;
          }
          .plans-pricing-container12 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text11 {
            line-height: 150%;
          }
          .plans-pricing-link11 {
            width: 100%;
            text-decoration: none;
          }
          .plans-pricing-container13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-pricing-text12 {
            text-transform: uppercase;
          }
          .plans-pricing-container14 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .plans-pricing-text13 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .plans-pricing-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .plans-pricing-container15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .plans-pricing-container16 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text16 {
            line-height: 150%;
          }
          .plans-pricing-container17 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text18 {
            line-height: 150%;
          }
          .plans-pricing-container18 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text19 {
            line-height: 150%;
          }
          .plans-pricing-container19 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text20 {
            line-height: 150%;
          }
          .plans-pricing-container20 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text21 {
            line-height: 150%;
          }
          .plans-pricing-link12 {
            width: 100%;
            text-decoration: none;
          }
          .plans-pricing-container21 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .plans-pricing-text22 {
            text-transform: uppercase;
          }
          .plans-pricing-container22 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .plans-pricing-text25 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .plans-pricing-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .plans-pricing-container23 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .plans-pricing-container24 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text28 {
            line-height: 150%;
          }
          .plans-pricing-container25 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text30 {
            line-height: 150%;
          }
          .plans-pricing-container26 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text31 {
            line-height: 150%;
          }
          .plans-pricing-container27 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text32 {
            line-height: 150%;
          }
          .plans-pricing-container28 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .plans-pricing-text33 {
            line-height: 150%;
          }
          .plans-pricing-link13 {
            width: 100%;
            animation-name: headShake;
            animation-delay: 0s;
            text-decoration: none;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .plans-pricing-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .plans-pricing-features-container {
            align-items: center;
            justify-content: center;
          }
          .plans-pricing-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 819px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .plans-pricing-features-heading {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .plans-pricing-our-services-container {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: 1fr 1fr;
          }
          .plans-pricing-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .plans-pricing-container29 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .plans-pricing-container30 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .plans-pricing-logo2 {
            font-size: 2em;
            font-family: 'Cabin';
            font-weight: 700;
            line-height: 150%;
            text-transform: uppercase;
            text-decoration: none;
          }
          .plans-pricing-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .plans-pricing-link14 {
            margin-left: 0px;
            text-decoration: none;
          }
          .plans-pricing-link15 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link16 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link17 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-link18 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .plans-pricing-contact1 {
            margin-left: var(--dl-space-space-unit);
          }
          .plans-pricing-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .plans-pricing-text34 {
            font-size: 16px;
            font-family: 'Cabin';
            font-weight: 400;
            line-height: 150%;
          }
          .plans-pricing-link19 {
            text-decoration: underline;
          }
          .plans-pricing-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .plans-pricing-link20 {
            display: contents;
          }
          .plans-pricing-twitter-icon {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .plans-pricing-link21 {
            display: contents;
          }
          .plans-pricing-instagram-icon {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .plans-pricing-link22 {
            display: contents;
          }
          .plans-pricing-facebook-icon {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .plans-pricing-container31 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .plans-pricing-hero1 {
              flex-direction: column;
            }
            .plans-pricing-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .plans-pricing-hero-heading {
              text-align: center;
            }
            .plans-pricing-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .plans-pricing-container03 {
              align-items: center;
              flex-direction: column;
            }
            .plans-pricing-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .plans-pricing-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .plans-pricing-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
          }
          @media (max-width: 767px) {
            .plans-pricing-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .plans-pricing-desktop-menu {
              display: none;
            }
            .plans-pricing-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .plans-pricing-link05 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .plans-pricing-link06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .plans-pricing-link07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .plans-pricing-link08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .plans-pricing-link09 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .plans-pricing-link10 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .plans-pricing-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .plans-pricing-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .plans-pricing-container03 {
              align-items: center;
              flex-direction: column;
            }
            .plans-pricing-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .plans-pricing-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .plans-pricing-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .plans-pricing-features1 {
              height: 1115px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .plans-pricing-our-services-container {
              grid-template-columns: 1fr;
            }
            .plans-pricing-footer {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .plans-pricing-footer1 {
              height: 245px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .plans-pricing-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .plans-pricing-text34 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .plans-pricing-facebook-icon {
              fill: #d9d9d9;
            }
          }
          @media (max-width: 479px) {
            .plans-pricing-navbar-interactive {
              height: 100px;
              padding: var(--dl-space-space-unit);
              padding-right: 16px;
            }
            .plans-pricing-mobile-menu1 {
              padding: 16px;
            }
            .plans-pricing-hero1 {
              height: 128px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .plans-pricing-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .plans-pricing-pricing-heading {
              text-align: center;
            }
            .plans-pricing-basic-plan-pricing {
              font-size: 4rem;
              font-weight: 700;
            }
            .plans-pricing-pricing-card2 {
              margin-bottom: 0px;
            }
            .plans-pricing-features1 {
              height: 1200px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .plans-pricing-footer1 {
              height: 253px;
              padding: var(--dl-space-space-unit);
            }
            .plans-pricing-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .plans-pricing-text34 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default PlansPricing
