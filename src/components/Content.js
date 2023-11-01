const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
const sectionStyle = {
  height: "100vh",
  // Add any other CSS properties you need here
};
const borderStyle = {
  border: "3px solid green", // This sets both border style and color
};
const about_me_context = {
  border: "3px solid orange", // This sets both border style and color
  height: "175px",
};

const name_container = {
  height: "175px",
  width: "50px",
  backgroundColor: "#fe4652",
  textAlign: "center",
  position: "absolute",
};

const nickNameStyle = {
  fontWeight: "bold",
  fontSize: "30px",
  color: "white",
  marginBottom: "-15px",
};

const textColor = {
  color: "white", // This sets the text color
};

const textColorRed = {
  color: "#fe4652", // This sets the text color
  fontWeight: "bold",
};

const textColorGrey = {
  color: "#9e9e9e", // This sets the text color
};

function Content() {
  return (
    <div>
      <section id="about_me" style={sectionStyle}>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-4 gap-4">
          <div className="p-4 sm:col-span-12 md:col-span-2 lg:col-start-1 lg:col-span-2 xl:col-span-12 mainProfilePicture "></div>

          <div className="p-4 sm:col-span-12 md:col-span-2 md:col-start-4 lg:col-span-3 lg:col-start-4  xl:col-span-12 mr-5 introDataMain">
            <div className="introDataSection">
              <div className="mt-2" style={name_container}>
                <p className="mt-3" style={nickNameStyle}>
                  J
                </p>
                <p style={nickNameStyle}>E</p>
                <p style={nickNameStyle}>A</p>
                <p style={nickNameStyle}>N</p>
              </div>
            </div>

            <div className="col-start-2 col-end-12 ml-3 mt-5">
              <p className="textColorRed" style={textColorRed}>
                Hello Im Jean-Louis Mendoza
              </p>
              <p style={textColor}>Web Developer</p>

              <span style={textColorGrey}>
                Innovative, task-driven professional with 3+ years of experience
                in web development with a strong emphasis on "Progressive
                Enhancement", as I look for creative ways to push the boundaries
                of website without compromise
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-4 gap-4 stats">
          <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-12 mr-5 ">
            <div className="btnContainer ">
              <button className="btn btn--light ">
                <span className="btn__inner">
                  <span className="btn__slide"></span>
                  <span className="btn__content flex items-center justify-center ">
                    <div className="flex flex-col contentItems">
                      <p>06/Freelance</p>
                      <p>05/Corporate</p>
                      <p>Clients</p>
                    </div>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-12 mr-5 ">
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


          <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-12 mr-5 ">
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
      </section>
    </div>
  );
}

export default Content;
