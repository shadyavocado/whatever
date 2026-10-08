import React from 'react'
import Model from './Model'
import './About.css'
function About(prop) {
  return (
    <>
        <div class="text-center justify-content-center row mt-5">
    <h2 class="heading">{prop.title}</h2>
<p class="container col-lg-10">
    PHP (Hypertext Processor) is a general-purpose scripting language and interpreter that is freely available and widely used for web development. The language is used primarily for server-side scripting, although it can also be used for command-line scripting and, to a limited degree, desktop applications. The acronym PHP was originally derived from Personal Home Page Tools, but it now stands for PHP: Hypertext Preprocessor, which the PHP Group's documentation describes as a "recursive acronym."

When used for server-side scripting, PHP is added to a webpage for the purpose of generating dynamic content when the page is accessed through a client browser. The web server runs the script before transmitting the page to the browser. To support this process, the web server requires PHP to be installed on the server, along with a PHP parser -- either a Common Gateway Interface (CGI) parser or a server module.

When a user requests a webpage from the server, the parser interprets the PHP portion of the page, performs the operations called for in the PHP script, and generates the Hypertext Markup Language (HTML) that results from those operations. The HTML is then sent to the client browser, along with any other HTML on the page, providing a seamless rendering of the content. Webpages that contain PHP script are considered to be dynamic HTML pages because content varies based on the results of interpreting the script.
</p></div>
{/* <!-- Modal --> */}
{<Model />}
  </>
  )
}

export default About  