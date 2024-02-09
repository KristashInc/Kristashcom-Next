import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Kristash | Online Marketing Agency</title>
          <meta
            name="description"
            content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
          />
          <meta
            property="og:title"
            content="Kristash | Online Marketing Agency"
          />
          <meta
            property="og:description"
            content="Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, &amp; web design."
          />
        </Head>
        <div className="home-header">
          <header
            data-thq="thq-navbar"
            className="navbarContainer home-navbar-interactive"
          >
            <a
              href="https://kristash.com"
              id="kristash logo"
              target="_blank"
              rel="noreferrer noopener"
              className="home-logo logo"
            >
              Kristash
            </a>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <Link href="/">
                  <a className="home-link bodySmall">Home</a>
                </Link>
                <Link href="/faq">
                  <a className="home-link01 bodySmall">FAQ</a>
                </Link>
                <Link href="/plans-pricing">
                  <a className="home-link02 bodySmall">Plans &amp; Pricing</a>
                </Link>
                <Link href="/portfolio">
                  <a className="home-link03 bodySmall">Portfolio</a>
                </Link>
                <Link href="/resources">
                  <a className="home-link04 bodySmall">Resources</a>
                </Link>
                <Link href="/contact">
                  <a className="home-link05 bodySmall">Contact</a>
                </Link>
              </nav>
              <div className="home-buttons">
                <button className="home-login buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="home-mobile-menu1 mobileMenu"
            >
              <div className="home-nav">
                <div className="home-top">
                  <span className="logo">ONLINE MARKETING AGENCY</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="home-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <Link href="/">
                    <a className="home-link06 bodySmall">Home</a>
                  </Link>
                  <Link href="/faq">
                    <a className="home-link07">FAQ</a>
                  </Link>
                  <Link href="/plans-pricing">
                    <a className="home-link08">Plans &amp; Pricing</a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="home-link09">Portfolio</a>
                  </Link>
                  <Link href="/resources">
                    <a className="home-link10 bodySmall">Resources</a>
                  </Link>
                  <Link href="/contact">
                    <a className="home-link11 bodySmall">Contact</a>
                  </Link>
                </nav>
                <div className="home-buttons1">
                  <button className="buttonFlat">Login</button>
                  <button className="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="home-hero1 heroContainer">
            <div className="home-container01">
              <h1
                id="welcome to our online marketing agency"
                className="home-hero-heading heading1"
              >
                Welcome to our Online Marketing Agency
              </h1>
              <span className="home-hero-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Boost your online presence with our professional services
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
              <div className="home-btn-group">
                <a
                  href="tel:+15312701723"
                  id="call us"
                  className="home-hero-button1 buttonFilled"
                >
                  Call Us
                </a>
                <Link href="/plans-pricing" id="learn more">
                  <a className="home-link12 buttonFlat">Learn More →</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container02">
          <h2 id="what's your seo score?" className="home-text14">
            What&apos;s your SEO score?
          </h2>
          <div className="home-container03">
            <div className="home-container04">
              <React.Fragment>
                <React.Fragment>
                  {/* Begin MySiteAuditor */}
                  <Script
                    src="//cdn.mysiteauditor.com/audit-tool.js"
                    type="text/javascript"
                  />

                  <div
                    id="seogroup-embed"
                    data-apikey="e3be6b3d12972592de7794d0b8bae48e0889223d"
                    data-language="english"
                    data-type="slim"
                    data-hex-color="#000000"
                    data-hex-cta-color="#566822"
                    data-hex-text="#FFFFFF"
                    data-load-bar-color="#61B13B"
                    data-font="Roboto"
                  />
                  {/* End MySiteAuditor */}
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="featuresContainer">
            <div id="services section" className="home-features1">
              <div className="home-container05">
                <span id="features" className="overline">
                  <span>features</span>
                  <br></br>
                </span>
                <h2
                  id="our services"
                  className="home-features-heading heading2"
                >
                  Our Services
                </h2>
                <span className="home-features-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span>
                        We offer a range of services to help your business
                        thrive
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div id="our services section" className="home-container06">
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
        <div className="home-pricing">
          <div className="pricingContainer home-pricing1">
            <div className="home-container07">
              <span id="pricing" className="overline">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="heading2 home-pricing-heading">
                Choose the Website for Your Business
              </h2>
              <span className="home-pricing-sub-heading bodyLarge">
                <span>
                  <span>
                    We offer flexible pricing options to meet your specific
                    needs
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container08">
              <div
                id="portfolio website"
                className="freePricingCard home-pricing-card"
              >
                <div className="home-container09">
                  <span id="portfolio site" className="home-text37 heading3">
                    Portfolio
                  </span>
                  <span>
                    A basic website for an artist or musician that wants to
                    showcase their art/music.
                  </span>
                </div>
                <div className="home-container10">
                  <span className="home-text38">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-free-plan-price">597</span>
                </div>
                <div className="home-container11">
                  <div className="home-container12">
                    <span className="home-text41">✔</span>
                    <span className="bodySmall">Website design</span>
                  </div>
                  <div className="home-container13">
                    <span className="home-text42">✔</span>
                    <span className="bodySmall">Simple Logo design</span>
                  </div>
                  <div className="home-container14">
                    <span className="home-text43">✔</span>
                    <span className="bodySmall">Mobile-friendly design</span>
                  </div>
                  <div className="home-container15">
                    <span className="home-text44">✔</span>
                    <span className="bodySmall">Basic SEO</span>
                  </div>
                  <div className="home-container16">
                    <span className="home-text45">✔</span>
                    <span className="bodySmall">
                       Headless CMS integration for adding/updating website
                      content
                    </span>
                  </div>
                  <div className="home-container17">
                    <span className="home-text46">
                      <br></br>
                      <span>✔</span>
                    </span>
                    <span className="bodySmall">
                      <br></br>
                      <span>Business Consultation</span>
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:website@kristash.com?subject=I Need a Portfolio Website"
                  className="home-link13 buttonOutline"
                >
                  Continue with a PORTFOLIO site
                </a>
              </div>
              <div
                id="professional website"
                className="basicPricingCard home-pricing-card1"
              >
                <div className="home-container18">
                  <span id="professional" className="home-text51 heading3">
                    Professional
                  </span>
                  <span>
                    An affordable SEO-optimized website for small businesses
                    that are primarily service-based. (Tattoo artists, barbers,
                    cleaners, chiropractors, holistic health practitioners;
                    etc.)
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text52">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-basic-plan-pricing">897</span>
                </div>
                <div className="home-container20">
                  <div className="home-container21">
                    <span className="home-text55">✔</span>
                    <span className="bodySmall">
                      All features of PORTFOLIO site, PLUS:
                    </span>
                  </div>
                  <div className="home-container22">
                    <span className="home-text57">✔</span>
                    <span>Take appointments via a Booking Plugin</span>
                  </div>
                  <div className="home-container23">
                    <span className="home-text58">✔</span>
                    <span>Mobile-optimized design</span>
                  </div>
                  <div className="home-container24">
                    <span className="home-text59">✔</span>
                    <span className="bodySmall">Advanced SEO</span>
                  </div>
                  <div className="home-container25">
                    <span className="home-text60">✔</span>
                    <span className="bodySmall">
                      Business coaching ZOOM session (2x)
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:website@kristash.com?subject=I Need a Professional Website"
                  className="home-link14 buttonFilledSecondary"
                >
                  Build me a PROFESSIONAL website
                </a>
              </div>
              <div
                id="e-commerce website"
                className="proPricingCard home-pricing-card2"
              >
                <div className="home-container26">
                  <span id="e-commerce" className="home-text61 heading3">
                    <span>e-commerce</span>
                    <br></br>
                  </span>
                  <span className="bodySmall">
                    A comprehensive plan for growing businesses
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text64">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-pro-plan-pricing">1497</span>
                </div>
                <div className="home-container28">
                  <div className="home-container29">
                    <span className="home-text67">✔</span>
                    <span className="bodySmall">
                       All features of PROFESSIONAL website
                    </span>
                  </div>
                  <div className="home-container30">
                    <span className="home-text69">✔</span>
                    <span>
                      Ability to Sell Unlimited # of Products or Services
                    </span>
                  </div>
                  <div className="home-container31">
                    <span className="home-text70">✔</span>
                    <span className="bodySmall">Premium Logo design</span>
                  </div>
                  <div className="home-container32">
                    <span className="home-text71">✔</span>
                    <span className="bodySmall">Premium SEO</span>
                  </div>
                  <div className="home-container33">
                    <span className="home-text72">✔</span>
                    <span className="bodySmall">
                      Extensive business coaching via ZOOM
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:website@kristash.com?subject=I Need an E-commerce Website"
                  className="home-link15 buttonFilledSecondary"
                >
                  Build me an E-COMMERCE website
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="bannerContainer home-banner1">
            <h1 className="home-banner-heading heading2">
              We Design, Optimize, and Coach for Success
            </h1>
            <span className="home-banner-sub-heading bodySmall">
              <span>
                <span>
                  <span>
                    At our online marketing agency, we offer a range of services
                    to help businesses and startups thrive in the digital world.
                    From stunning website designs to effective SEO strategies,
                    we have the expertise to elevate your brand and drive
                    results. Partner with us and take your online presence to
                    new heights.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <Link href="/contact" id="contact us">
              <a className="home-link16 buttonFilled">Contact Us</a>
            </Link>
          </div>
        </div>
        <div className="home-faq2">
          <div className="faqContainer">
            <div className="home-faq3">
              <div className="home-container34">
                <span id="faq section" className="overline">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 id="faq: common questions" className="home-text90 heading2">
                  Common Questions
                </h2>
                <span className="home-text91 bodyLarge">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div id="faq section" className="home-container35">
                <Question1
                  answer="Our online marketing agency offers website design, logo design, SEO, and business coaching services to businesses and startups."
                  question="What services does your online marketing agency offer?"
                ></Question1>
                <Question1
                  answer="You can contact our online marketing agency by visiting the 'Contact' page on our website and filling out the contact form or by calling our provided phone number."
                  question="How can I contact your online marketing agency?"
                ></Question1>
                <Question1
                  answer="Yes, we offer customized website design solutions tailored to meet the specific needs and preferences of each client."
                  question="Do you offer customized website design solutions?"
                ></Question1>
                <Question1
                  answer="To get a logo designed by our agency, you can fill out the logo design request form on our website. Our team will then contact you to discuss your requirements and provide you with design concepts."
                  question="What is the process for getting a logo designed by your agency?"
                ></Question1>
                <Question1
                  answer="Yes, we specialize in SEO (Search Engine Optimization) and can help improve your website's search engine rankings through various strategies such as keyword optimization, content creation, and link building."
                  question="Can you help improve my website's search engine rankings?"
                ></Question1>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="footerContainer home-footer1">
            <div className="home-container36">
              <a
                href="https://kristash.com"
                id="kristash"
                target="_blank"
                rel="noreferrer noopener"
                className="home-logo2"
              >
                Kristash
              </a>
              <nav className="home-nav1">
                <Link href="/" id="home">
                  <a className="home-link17 bodySmall">Home</a>
                </Link>
                <Link href="/faq" id="faq">
                  <a className="home-link18 bodySmall">FAQ</a>
                </Link>
                <Link href="/plans-pricing" id="plans &amp; pricing">
                  <a className="home-link19 bodySmall">Plans &amp; Pricing</a>
                </Link>
                <Link href="/portfolio" id="portfolio">
                  <a className="home-link20 bodySmall">Portfolio</a>
                </Link>
                <Link href="/resources" id="resources">
                  <a className="home-link21 bodySmall">Resources</a>
                </Link>
                <Link href="/contact" id="contact">
                  <a className="home-link22 bodySmall">Contact</a>
                </Link>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container37">
              <span className="home-text94">
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
                  className="home-link23"
                >
                  Kristash
                </a>
                <span className="bodySmall">. All Rights Reserved.</span>
              </span>
              <div className="home-icon-group1">
                <a
                  href="https://twitter.com/kristashinc"
                  className="home-link24"
                >
                  <svg
                    id="twitter icon"
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon10 socialIcons"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/kristashinc"
                  className="home-link25"
                >
                  <svg
                    id="instagram icon"
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12 socialIcons"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/kristashinc"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link26"
                >
                  <svg
                    id="facebook icon"
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon14 socialIcons"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            text-decoration: none;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link01 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link02 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link03 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link04 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link05 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            margin-right: 32px;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu1 {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 96px;
            align-items: flex-start;
            justify-content: center;
          }
          .home-hero1 {
            height: 378px;
          }
          .home-container01 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            width: 881px;
            max-width: 800px;
            text-align: center;
          }
          .home-hero-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero-button1 {
            text-decoration: none;
          }
          .home-link12 {
            text-decoration: none;
          }
          .home-container02 {
            width: 100%;
            height: 255px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .home-text14 {
            color: rgb(255, 255, 255);
            width: 390px;
            font-size: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            background-color: rgb(0, 0, 0);
          }
          .home-container03 {
            width: 1114px;
            height: 161px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container04 {
            display: contents;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features1 {
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
          .home-container05 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-container06 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: 1fr 1fr;
          }
          .home-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-pricing-sub-heading {
            text-align: center;
          }
          .home-container08 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text37 {
            text-transform: uppercase;
          }
          .home-container10 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text38 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container12 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text41 {
            line-height: 150%;
          }
          .home-container13 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text42 {
            line-height: 150%;
          }
          .home-container14 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text43 {
            line-height: 150%;
          }
          .home-container15 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text44 {
            line-height: 150%;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-text45 {
            line-height: 150%;
          }
          .home-container17 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text46 {
            line-height: 150%;
          }
          .home-link13 {
            width: 100%;
            text-decoration: none;
          }
          .home-container18 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text51 {
            text-transform: uppercase;
          }
          .home-container19 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text52 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container20 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container21 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text55 {
            line-height: 150%;
          }
          .home-container22 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text57 {
            line-height: 150%;
          }
          .home-container23 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text58 {
            line-height: 150%;
          }
          .home-container24 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text59 {
            line-height: 150%;
          }
          .home-container25 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text60 {
            line-height: 150%;
          }
          .home-link14 {
            width: 100%;
            text-decoration: none;
          }
          .home-container26 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text61 {
            text-transform: uppercase;
          }
          .home-container27 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text64 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container28 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text67 {
            line-height: 150%;
          }
          .home-container30 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text69 {
            line-height: 150%;
          }
          .home-container31 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text70 {
            line-height: 150%;
          }
          .home-container32 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text71 {
            line-height: 150%;
          }
          .home-container33 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text72 {
            line-height: 150%;
          }
          .home-link15 {
            width: 100%;
            animation-name: headShake;
            animation-delay: 0s;
            text-decoration: none;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-banner-heading {
            text-align: center;
          }
          .home-banner-sub-heading {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link16 {
            text-decoration: none;
          }
          .home-faq2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container34 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text90 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text91 {
            text-align: left;
          }
          .home-container35 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container36 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo2 {
            font-size: 2em;
            font-family: 'Cabin';
            font-weight: 700;
            line-height: 150%;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-link17 {
            margin-left: 0px;
            text-decoration: none;
          }
          .home-link18 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link19 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link20 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link21 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link22 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-separator {
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
          .home-container37 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text94 {
            font-size: 16px;
            font-family: 'Cabin';
            font-weight: 400;
            line-height: 150%;
          }
          .home-link23 {
            text-decoration: underline;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link24 {
            display: contents;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link25 {
            display: contents;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link26 {
            display: contents;
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container08 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text91 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-link06 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link09 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link10 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link11 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container02 {
              height: 333px;
            }
            .home-container03 {
              width: 638px;
              height: 260px;
              margin-bottom: 18px;
            }
            .home-features1 {
              height: 1123px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container06 {
              grid-template-columns: 1fr;
            }
            .home-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container08 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text55 {
              line-height: 150%;
            }
            .home-text57 {
              line-height: 150%;
            }
            .home-text58 {
              line-height: 150%;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-banner {
              height: 267px;
            }
            .home-banner1 {
              height: 313px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq3 {
              margin-top: 0px;
              flex-direction: column;
            }
            .home-container34 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text91 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container37 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text94 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu1 {
              padding: 16px;
            }
            .home-link07 {
              line-height: 150%;
            }
            .home-link08 {
              line-height: 150%;
            }
            .home-link09 {
              line-height: 150%;
              text-decoration: none;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero-heading {
              width: auto;
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-link12 {
              text-decoration: none;
            }
            .home-container03 {
              width: 429px;
              margin-right: 0px;
            }
            .home-features1 {
              height: 1250px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing1 {
              height: 2327px;
            }
            .home-pricing-heading {
              text-align: center;
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-banner1 {
              height: 100%;
              position: relative;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 13px;
            }
            .home-link16 {
              left: 165px;
              bottom: 51px;
              position: absolute;
              text-decoration: none;
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container37 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text94 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
