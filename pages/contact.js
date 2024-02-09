import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact | Kristash</title>
          <meta
            name="description"
            content="Kristash, your digital partner in Omaha. Our Contact page offers expert services in web design, SEO, local SEO, content creation, logo design, branding, &amp; business coaching."
          />
          <meta property="og:title" content="Contact | Kristash" />
          <meta
            property="og:description"
            content="Kristash, your digital partner in Omaha. Our Contact page offers expert services in web design, SEO, local SEO, content creation, logo design, branding, &amp; business coaching."
          />
        </Head>
        <div className="contact-header">
          <header
            data-thq="thq-navbar"
            className="navbarContainer contact-navbar-interactive"
          >
            <a
              href="https://kristash.com"
              id="kristash logo"
              target="_blank"
              rel="noreferrer noopener"
              className="contact-logo logo"
            >
              Kristash
            </a>
            <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
              <nav className="contact-links">
                <Link href="/">
                  <a className="contact-link bodySmall">Home</a>
                </Link>
                <Link href="/faq">
                  <a className="contact-link01 bodySmall">FAQ</a>
                </Link>
                <Link href="/plans-pricing">
                  <a className="contact-link02 bodySmall">
                    Plans &amp; Pricing
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="contact-link03 bodySmall">Portfolio</a>
                </Link>
                <Link href="/resources">
                  <a className="contact-link04 bodySmall">Resources</a>
                </Link>
                <Link href="/contact">
                  <a className="contact-link05 bodySmall">Contact</a>
                </Link>
              </nav>
              <div className="contact-buttons">
                <button className="contact-login buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="contact-burger-menu">
              <svg viewBox="0 0 1024 1024" className="contact-icon socialIcons">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="contact-mobile-menu1 mobileMenu"
            >
              <div className="contact-nav">
                <div className="contact-top">
                  <span className="logo">ONLINE MARKETING AGENCY</span>
                  <div data-thq="thq-close-menu" className="contact-close-menu">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="contact-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="contact-links1">
                  <Link href="/">
                    <a className="contact-link06 bodySmall">Home</a>
                  </Link>
                  <Link href="/faq">
                    <a className="contact-link07 bodySmall">FAQ</a>
                  </Link>
                  <Link href="/plans-pricing">
                    <a className="contact-link08 bodySmall">
                      Plans &amp; Pricing
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="contact-link09 bodySmall">Portfolio</a>
                  </Link>
                  <Link href="/resources">
                    <a className="contact-link10 bodySmall">Resources</a>
                  </Link>
                  <Link href="/contact">
                    <a className="contact-link11 bodySmall">Contact</a>
                  </Link>
                </nav>
                <div className="contact-buttons1">
                  <button className="buttonFlat">Login</button>
                  <button className="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="contact-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="contact-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="contact-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="contact-hero">
          <div className="contact-hero1 heroContainer">
            <div className="contact-container1">
              <h1 id="contact page" className="contact-hero-heading heading1">
                Contact
              </h1>
            </div>
          </div>
        </div>
        <div className="contact-faq1">
          <div className="faqContainer">
            <div className="contact-faq2">
              <form
                id="contact form for kristash"
                name="contact-form"
                enctype="multipart/form-data"
                autoComplete="on"
                className="contact-contact-form"
              >
                <label id="name">Name</label>
                <input
                  type="text"
                  name="Name"
                  required="true"
                  placeholder="Name*"
                  autoComplete="name"
                  className="input"
                />
                <label id="company name">
                  <br></br>
                  <span>Company Name</span>
                  <br></br>
                </label>
                <input
                  type="text"
                  name="Company Name"
                  placeholder="Company Name"
                  autoComplete="organization"
                  className="input"
                />
                <label id="phone number">
                  <br></br>
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone number"
                  maxlength="12"
                  minlength="10"
                  placeholder="555-555-5555"
                  autoComplete="tel"
                  className="input"
                />
                <label id="email">
                  <br></br>
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="Email*"
                  required="true"
                  placeholder="Email*"
                  autoComplete="email"
                  className="input"
                />
                <label id="website">
                  <br></br>
                  <span>Website</span>
                </label>
                <input
                  type="text"
                  name="Website"
                  placeholder="Website"
                  autoComplete="url"
                  className="input"
                />
                <label
                  id="pick the service or services you're interested in"
                  htmlFor="kristash logo"
                >
                  <br></br>
                  <span>Service(s) Interested In:</span>
                  <br></br>
                </label>
                <select
                  multiple="true"
                  required="true"
                  autoComplete="off"
                  className="contact-select-services"
                >
                  <option value="Web Design">Web Design</option>
                  <option
                    value="SEO/Local SEO"
                    className="contact-seo-local-seo"
                  >
                    SEO/Local SEO
                  </option>
                  <option
                    value="Content Creation"
                    className="contact-content-creation"
                  >
                    Content Creation
                  </option>
                  <option value="Logo Design" className="contact-logo-design">
                    Logo Design
                  </option>
                  <option value="Branding">Branding</option>
                  <option value="Business Coaching">Business Coaching</option>
                </select>
                <label id="more info">
                  <br></br>
                  <span>More Info</span>
                  <br></br>
                </label>
                <textarea
                  name="More Info"
                  placeholder="Write here."
                  autoComplete="off"
                  className="contact-textarea textarea"
                ></textarea>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <footer className="footerContainer contact-footer1">
            <div className="contact-container2">
              <a
                href="https://kristash.com"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-logo2"
              >
                Kristash
              </a>
              <nav className="contact-nav1">
                <Link href="/">
                  <a className="contact-link12 bodySmall">Home</a>
                </Link>
                <Link href="/faq">
                  <a className="contact-link13 bodySmall">FAQ</a>
                </Link>
                <Link href="/plans-pricing">
                  <a className="contact-link14 bodySmall">
                    Plans &amp; Pricing
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="contact-link15 bodySmall">Portfolio</a>
                </Link>
                <Link href="/resources">
                  <a className="contact-link16 bodySmall">Resources</a>
                </Link>
                <Link href="/contact">
                  <a className="contact-link17 bodySmall">Contact</a>
                </Link>
              </nav>
            </div>
            <div className="contact-separator"></div>
            <div className="contact-container3">
              <span className="contact-text22">
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
                  className="contact-link18"
                >
                  Kristash
                </a>
                <span className="bodySmall">. All Rights Reserved.</span>
              </span>
              <div className="contact-icon-group1">
                <a
                  href="https://twitter.com/kristashinc"
                  className="contact-link19"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="contact-icon10 socialIcons"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/kristashinc"
                  className="contact-link20"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon12 socialIcons"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/kristashinc"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link21"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="contact-icon14 socialIcons"
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
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-header {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .contact-logo {
            text-decoration: none;
          }
          .contact-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .contact-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-link {
            transition: 0.3s;
            text-decoration: none;
          }
          .contact-link01 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link02 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link03 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link04 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link05 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-login {
            margin-right: 32px;
          }
          .contact-burger-menu {
            display: none;
          }
          .contact-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .contact-mobile-menu1 {
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
          .contact-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .contact-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-icon02 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .contact-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 96px;
            align-items: flex-start;
            justify-content: center;
          }
          .contact-hero1 {
            height: 47px;
          }
          .contact-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-hero-heading {
            max-width: 800px;
            text-align: center;
          }
          .contact-faq1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-faq2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 875px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .contact-contact-form {
            width: 453px;
            height: 712px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-select-services {
            width: 253px;
            height: 104px;
          }
          .contact-seo-local-seo {
            width: 235px;
            height: 0px;
          }
          .contact-content-creation {
            width: 357px;
          }
          .contact-logo-design {
            width: 283px;
            padding-right: var(--dl-space-space-unit);
          }
          .contact-textarea {
            width: 253px;
            height: 187px;
          }
          .contact-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-container2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-logo2 {
            font-size: 2em;
            font-family: 'Cabin';
            font-weight: 700;
            line-height: 150%;
            text-transform: uppercase;
            text-decoration: none;
          }
          .contact-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .contact-link12 {
            margin-left: 0px;
            text-decoration: none;
          }
          .contact-link13 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link14 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link15 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link16 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link17 {
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-separator {
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
          .contact-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-text22 {
            font-size: 16px;
            font-family: 'Cabin';
            font-weight: 400;
            line-height: 150%;
          }
          .contact-link18 {
            text-decoration: underline;
          }
          .contact-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-link19 {
            display: contents;
          }
          .contact-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link20 {
            display: contents;
          }
          .contact-icon12 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contact-link21 {
            display: contents;
          }
          .contact-icon14 {
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .contact-hero1 {
              flex-direction: column;
            }
            .contact-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .contact-hero-heading {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .contact-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-desktop-menu {
              display: none;
            }
            .contact-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .contact-link06 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-link07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-link08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-link09 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-link10 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-link11 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-faq2 {
              flex-direction: column;
            }
            .contact-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-container3 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .contact-text22 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .contact-navbar-interactive {
              height: 100px;
              padding: var(--dl-space-space-unit);
            }
            .contact-mobile-menu1 {
              padding: 16px;
            }
            .contact-hero1 {
              height: 125px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-faq2 {
              height: 811px;
            }
            .contact-contact-form {
              width: 479px;
            }
            .contact-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .contact-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-container3 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .contact-text22 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
