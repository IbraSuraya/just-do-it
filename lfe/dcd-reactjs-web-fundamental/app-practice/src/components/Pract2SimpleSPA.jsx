import React from 'react';
import HomePage from './SimpleSPA/HomePage.jsx'
import AboutPage from './SimpleSPA/AboutPage.jsx'
import FAQPage from './SimpleSPA/FAQPage.jsx'
import Link from './SimpleSPA/Link.jsx'
 
class SimpleSPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '/'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return { page: target };
    });
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link target="/" navigate={this.navigate}>
                  Home
                </Link>
              </li>
              <li>
                <Link target="/about" navigate={this.navigate}>
                  About
                </Link>
              </li>
              <li>
                <Link target="/faq" navigate={this.navigate}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.page === '/' && <HomePage />}
          {this.state.page === '/about' && <AboutPage />}
          {this.state.page === '/faq' && <FAQPage />}
        </main>
      </>
    );
  }
}

export default SimpleSPA