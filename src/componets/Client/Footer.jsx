import React from "react";
// import Nav from "./Navbar";
function Footer() {
  return (
    <div aria-label="Site Footer" className="bg-gray-900">
      {/* <Nav /> */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-6 lg:gap-y-16">
            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <p className="font-bold text-white">About us</p>

              <nav
                aria-label="Footer Nav"
                className="mt-6 flex flex-col space-y-4 text-sm text-gray-300"
              >
              
             
              
                <a className="inline-block" href="">
                  {" "}
                  CBE Profile{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Board of Directors{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Executive Management{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Organizational Structure{" "}
                </a>
              </nav>
            </div>
            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <p className="font-bold text-white">Company</p>

              <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  About{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  History{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <p className="font-bold text-white">Helpful Links</p>

              <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  Contact{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  FAQs{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>
            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <p className="font-bold text-white">Legal</p>

              <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  Accessibility{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Refund Policy{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  Hiring Statistics{" "}
                </a>
              </nav>
            </div>
            <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
              <p className="font-bold text-white">Downloads</p>

              <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
                <a className="inline-block" href="">
                  {" "}
                  Marketing Calendar{" "}
                </a>
                <a className="inline-block" href="">
                  {" "}
                  SEO Infographics{" "}
                </a>
              </nav>
            </div>
            
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <p className="text-center text-xs text-gray-400 lg:text-left">
              Copyright &copy; 2022. Company Name. All rights reserved.
            </p>

            <nav className="flex justify-center gap-4 text-xs text-gray-400 lg:justify-end">
              <a href=""> Terms & Conditions </a>
              <a href=""> Privacy Policy </a>
              <a href=""> Cookies </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
