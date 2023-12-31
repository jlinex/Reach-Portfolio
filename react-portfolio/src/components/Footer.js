//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/jlinex" target="_blank" rel="noreferrer">
            Jessica Linex
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/jessica-linex-a6526154/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
