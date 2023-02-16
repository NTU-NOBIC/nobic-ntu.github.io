class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="topnav" id="topnav">
      <div class="dropdown"> <button class="dropbtn"><a href="index.html" id = "Home">Home</a></button></div>
      <div class="dropdown"> <button class="dropbtn"><a href="Expertise.html" id = "Expert">Our
            Expertise</a></button>
        <div class="dropdown-content"> <a href="Expertise.html#Instrument">Optical
            Imaging Instrumentation</a> <a href="Expertise.html#Software">Software
            &amp; Image Processing</a> <a href="Expertise.html#Experiment">Microscopy
            Applications &amp; Sample Preparation</a></div>
      </div>
      <div class="dropdown"> <button class="dropbtn"><a id = "Res">Research</a></button>
        <div class="dropdown-content"> <a href="Projects.html" id = "Proj">Current
            Projects</a> <a href="ProjectsPast.html" id = "PastP">Past Projects</a> <a href="Publications.html" id = "Pub">Publications</a>
        </div>
      </div>
      <div class="dropdown"> <button class="dropbtn"><a href="Facilities.html" id = "Fac">Imaging
            Facilities</a></button>
        <div class="dropdown-content"> <a href="Facilities.html#Users">For New
            Users</a> <a href="Facilities.html#Microscopes">Microscopes</a> <a

            href="https://ppms.asia/singascope/login/?pf=8" title="PPMS for SingaScope"

            target="_blank">Booking System</a> <a href="Facilities.html#MicroFluor">Microscope
            Selector</a><a href="FIJI/FIJIntro.html" target="_blank">Introduction
            to FIJI</a><a href="MicroscopyCourse/MicroCourse22.html" target="_blank">Microscopy
            Course</a><a href="MicroTalks.html" id = "uTalk">μ-Talks</a></div>
      </div>
      <div class="dropdown"> <button class="dropbtn"><a href="Team.html" id = "Team">Our
            Team</a></button></div>
      <div class="dropdown"> <button class="dropbtn"><a href="index.html#About">About
            Us</a></button>
        <div class="dropdown-content"> <a href="Lab.html" id = "Lab">NOBIC Laboratory</a>
          <a href="Lab.html#workshop">Prototyping Workshop</a><a href="https://www.youtube.com/channel/UCwka5W-n2mfAqLUz8L5eorA"

            target="blank">YouTube Channel</a></div>
      </div>
      <div class="dropdown"> <button class="dropbtn"><a href="Contact.html" id = "Cont">Contact</a></button></div>
	  <div class="dropdown"> <button class="dropbtn"><a href="Links.html" id = "Links">Useful Links</a></button></div>
      <a href="javascript:void(0);" class="icon" onclick="TopnavFunction()">Menu</a>
    </div>
    `;
  }
}class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
      <footer>            
        <div class="footer"> <a href="https://www.ntu.edu.sg/medicine" target="_blank">LKCMedicine</a>
        | <a href="http://www.scelse.sg/Home" target="_blank">SCELSE</a> | <a

          href="https://www.ntu.edu.sg/Pages/home.aspx" target="_blank">NTU</a>
        <p>© NOBIC, last modified: <span id="datemod"></span></p>
      </div>         
      </footer>     
    `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

