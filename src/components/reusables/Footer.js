
function Footer() {

  return (
    <div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12 gap-4 stats">
        <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3 mr-5 xl:col-start-3 ">
          <div className="btnContainer ">
            <button className="btn btn--light ">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content flex items-center justify-center ">
                  <div className="flex flex-col contentItems">
                    <p>06 / Freelance</p>
                    <p>05 / Corporate</p>
                    <p>Clients</p>
                  </div>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3 mr-5 ">
          <div className="btnContainer ">
            <button className="btn ">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content flex items-center justify-center ">
                  <div className="flex flex-col contentItems">
                    <p>05</p>
                    <p>Years</p>
                    <p>Experience</p>
                  </div>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-4 mr-5 ">
          <div className="btnContainer ">
            <button className="btn btn--light ">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content flex items-center justify-center ">
                  <div className="flex flex-col contentItems">
                    <p>13</p>
                    <p>Projects</p>
                    <p>Handled</p>
                  </div>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
