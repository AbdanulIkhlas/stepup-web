import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import SectionHead from "../components/Elements/SectionHead";
import TeamCard from "../components/Fragments/TeamCard";
import { teamLists } from "../data/teams.js";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import useVerifyUser from "../hooks/useVerifyUser";
import FloatWhatsapp from "../components/Fragments/FloatWhatsapp";
import { Link } from "react-router-dom";

AOS.init();

const Beranda = () => {
  const user = useVerifyUser();
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    setTeams(teamLists);
  }, [teams]);

  const services = [
    {
      title: "Aplikasi Web",
      images: "./images/layanan-website.png",
      value:
        "Step Up Project adalah mitra terpercaya dalam pembuatan dan pengelolaan website. Developer kami siap mewujudkan ide Anda menjadi aplikasi yang fungsional, menarik, dan sesuai kebutuhan bisnis.",
      // classname: "ps-5",
    },
    {
      title: "Edukasi IT",
      images: "./images/layanan-edukasi.png",
      value:
        "Step Up Project menyediakan layanan edukasi IT, termasuk kursus, artikel, dan konten digital untuk mengembangkan keterampilan dan pengetahuan teknologi terupdate.",
      // classname: "ps-20",
    },
  ];
  const portfolios = [
    {
      id: 1,
      title: "Mini Course UI UX #1",
      desc: "24 - 25 Mei 2024",
      image: "./images/Mini Course UIUX 1.png",
      image2: "./images/Mini Course UIUX desc.png",
    },
    {
      id: 2,
      title: "ONE HOME",
      desc: "SMA Negeri 2 Raha",
      image: "./images/ONE HOME.png",
      image2: "./images/ONE HOME desc.png",
    },
  ];
  const customers = [
    {
      id: 1,
      image: "./images/partner-1.png",
    },
  ];
  // const testimonies = [
  //   {
  //     id: 1,
  //     image: "./images/testimoni/pp-1.png",
  //     reviewer: "Al Ikhsan",
  //     review:
  //       "Saya sangat senang dengan jasa yang diberikan oleh StepUp Project, proses penggunaannya sangat mudah dan cepat. Selamat kerja dan terus membantu klien-klien yang membutuhkan bantuan.",
  //     longReview:
  //       "StepUp Project sudah membantu saya dan keluarga dalam berbagai kebutuhan, dari konsultasi bisnis, hingga konsultasi teknis. Proses yang dilakukannya sangat mudah dan cepat. Saya sangat puas dengan layanan yang diberikan dan akan selalu menggunakan jasa StepUp Project.",
  //   },
  //   {
  //     id: 2,
  //     image: "./images/testimoni/pp-2.png",
  //     reviewer: "Ikhlas",
  //     review:
  //       "Layanan StepUp Project sangat membantu saya dalam konsultasi bisnis, jasa yang diberikan sangat bagus dan sesuai dengan kebutuhan.",
  //     longReview:
  //       "Saya sangat puas dengan layanan yang diberikan oleh StepUp Project, proses penggunaannya sangat mudah dan cepat. Jasa yang diberikan sangat sesuai dengan kebutuhan dan kami sangat senang dengan pelayanan yang diberikan. Kami akan terus menggunakan jasa StepUp Project.",
  //   },
  //   {
  //     id: 3,
  //     image: "./images/testimoni/pp-3.png",
  //     reviewer: "Yoga",
  //     review:
  //       "Layanan StepUp Project sangat membantu saya dalam konsultasi teknis, jasa yang diberikan sangat bagus dan sesuai dengan kebutuhan.",
  //     longReview:
  //       "Saya sangat puas dengan layanan yang diberikan oleh StepUp Project, proses penggunaannya sangat mudah dan cepat. Jasa yang diberikan sangat sesuai dengan kebutuhan dan kami sangat senang dengan pelayanan yang diberikan. Kami akan terus menggunakan jasa StepUp Project.",
  //   },
  // ];

  const testimonies = [
    {
      id: 1,
      image: "./images/testimoni/testimoni-1.jpg",
      reviewer: "Rio Rivaldo Sinuhaji",
      review:
        "Salah satu hal yang saya dapatkan setelah Mini Course ini adalah menambah pengetahuan tentang desain UI/UX yang sebelumnya saya tidak tahu. Semoga Step Up terus membagi ilmu seperti ini",
    },
    {
      id: 2,
      image: "./images/testimoni/testimoni-2.png",
      reviewer: "Bayu Prasetya Wijaya",
      review:
        "Adanya Mini Course : UI/UX For Beginner membuat saya bisa tahu dan belajar skill baru dalam desain aplikasi. Harapan saya, semoga Step Up melanjutkan untuk terus berbagi ilmu",
    },
    {
      id: 3,
      image: "./images/testimoni/dummy-profile.png",
      reviewer: "Alfat Rahman",
      review:
        "Kegiatan Mini Course ini sangat seru. Berbagi ilmunya tetaplah dilanjutkan",
    },
    {
      id: 4,
      image: "./images/testimoni/dummy-profile.png",
      reviewer: "Annas Sovianto",
      review:
        "Pengalaman saya setelah mengikuti Mini Course : UI/UX For Beginner ini adalah menambah wawasan, upgrade skill, upgrade relasi serta menumbuhkan potensi. Semoga berbagi ilmunya tidak pernah berhenti",
    },
    {
      id: 5,
      image: "./images/testimoni/dummy-profile.png",
      reviewer: "Dea Reigina",
      review:
        "Mini Course ini membuat saya jadi tahu tools Figma yang sebelumnya saya belum tahu",
    },
  ];

  return (
    <div className="pt-16">
      <NavBar user={user} />
      <section className="h-auto md">
        <div className="relative md:flex md:flex-row md:h-screen">
          <div className=" relative flex flex-col items-center pt-16 px-9 lg:px-[289px] md:pt-32 w-full h-[503px] md:h-[600px] lg:h-[700px] bg-gradient-to-t from-[#FFEDC6]">
            <div className="px-[10px] ">
              <SectionHead
                classname="md:text-start"
                content={[
                  {
                    title: "Solusi dan Edukasi IT Terdepan Bersama ",
                    classname: "",
                  },
                  { title: "Step Up.", classname: "text-primary" },
                ]}
              />
            </div>
            <p className="mt-6 w-[311px] md:w-10/12 text-sm md:text-base lg:text-xl text-center px-4">
              Step Up Project hadir sebagai digitalisasi bisnis dan organisasi
              dengan pengembangan dan pengelolaan website. Kami juga hadir
              sebagai pionir terdepan edukasi seputar dunia IT.
            </p>
            <Link to="/konsultasi">
              <button className="flex flex-row justify-center gap-4 items-center w-[190px] h-[50px] text-sm font-normal mt-8 text-white bg-primary rounded-full">
                Konsultasi{" "}
                <span className="p-1 rounded-full bg-slate-200/50">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
            <div className="absolute px-6 -bottom-24 md:-bottom-40 lg:-bottom-44 md:h-[50%] md:px-[120px] lg:px-[260px] ">
              <img src="./images/mockup-beranda.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="w-full ps-4 md:px-4 bg-light mt-48 lg:mt-96 lg:pt-20 pb-8 lg:pb-20">
          <SectionHead
            subsec={true}
            classname="md:text-start md:text-3xl"
            content={[
              { title: "Solusi ", classname: "text-primary" },
              {
                title: "Digital yang ",
                classname: "",
              },
              { title: "Terbaik ", classname: "text-primary" },
              { title: "untuk Anda", classname: "" },
            ]}
          />
          <div className="flex flex-col md:col-span-2 lg:flex-row md:gap-14 md:ps-32 md:w-11/12 md:items-center md:justify-center items-center mt-7 lg:mt-12">
            {services.map((service) => (
              <CardLayanan key={service.title} {...service}></CardLayanan>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto md:pb-24">
        <div className="w-full px-6 py-8 bg-gradient-to-l from-[#FFEDC6]">
          <div className="flex flex-col md:col-span-2 md:gap-4 md:ps-32 md:w-11/12 md:items-center md:justify-center items-center">
            <SectionHead
              subsec={true}
              classname="md:text-start md:text-3xl"
              content={[
                { title: "Solusi ", classname: "text-primary" },
                {
                  title: "Kami yang Dengan Senang Kami Tunjukkan Kepada Anda ",
                  classname: "",
                },
              ]}
            />
            <Link to="/portfolio">
              <button className="flex flex-row justify-center gap-4 items-center w-[190px] h-[50px] md:w-[251px] md:h-[70px] text-sm md:text-xl font-normal mt-8 text-white bg-primary rounded-full">
                Selengkapnya{" "}
                <span className="p-1 rounded-full bg-slate-200/50">
                  <FaArrowRight/>
                </span>
              </button>
            </Link>
          </div>
          <div className="mt-8 lg:flex lg:flex-row lg:gap-28 md:ps-44 md:pe-28 lg:px-36">
            {portfolios.map((item) => (
              <Portfolio key={item.id} {...item}></Portfolio>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="w-full px-4 py-8 md:py-10 bg-light">
          <SectionHead
            subsec={true}
            content={[
              { title: "Partner ", classname: "text-primary" },
              {
                title: "Kami dalam Kesuksesan Digital",
                classname: "",
              },
            ]}
          />
          <div className="w-full flex justify-center items-center mt-8 gap-4 overflow-x-scroll no-scrollbar">
            {customers.map((item) => (
              <div key={item.id} className="md:h-[152px]">
                <img src={item.image} alt="" className="w-full h-full"/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="w-full ps-6 pb-9 bg-light flex items-center justify-start flex-col">
          <SectionHead
            subsec={true}
            content={[
              {
                title: "Dukungan dan Kepercayaan Pelanggan",
                classname: "",
              },
            ]}
          />
          <div className="flex flex-row  w-[320px] md:w-[700px] lg:w-[1172px] md:h-[385px] gap-4 md:gap-8 lg:gap-12 overflow-x-scroll no-scrollbar mt-9">
            {testimonies.map((item) => (
              <ReviewCard key={item.id} {...item}></ReviewCard>
            ))}
          </div>
        </div>
      </section>

      <section className="h-auto">
        <div className="w-full px-2 pt-4 pb-12 bg-white">
          <SectionHead
            subsec={true}
            content={[
              { title: "Tim ", classname: "text-primary" },
              {
                title: "Kami yang Luar Biasa",
                classname: "",
              },
            ]}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 place-items-center mt-10">
            {teams.map((item) => (
              <TeamCard key={item.id} {...item}></TeamCard>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatWhatsapp />
    </div>
  );
};

const CardLayanan = (props) => {
  const { title, images, classname, value } = props;

  return (
    <div
      className={`flex justify-center items-center w-[312px] h-[205px] md:w-[450px] md:h-[260px] lg:w-[500px] lg:h-[333px] mt-16`}
    >
      <div className="flex flex-col items-center h-full w-full px-5 pt-12 lg:pt-[70px] lg:px-8 rounded-2xl mb-8 border-[1px] border-slate-300 relative">
        <img
          src={images}
          alt={title}
          className="w-[66px] h-[66px] md:w-[78px] md:h-[78px] lg:w-[91px] lg:h-[91px] mb-3 absolute left-[50%] -top-8 md:-top-10 lg:-top-12 translate-x-[-50%]"
        />
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sm md:text-lg lg:text-xl text-center">{value}</p>
      </div>
    </div>
  );
};
const Portfolio = (props) => {
  const { desc, title, image, image2 } = props;
  return (
    <div className="flex flex-col mt-5">
      <div className="relative">
        <img src={image} alt="mockup" className="" />
      </div>
      <h2 className="text-xs md:text-xl font-semibold text-slate-400 mt-1">{desc}</h2>
      <h1 className="text-base md:text-2xl font-semibold">{title}</h1>
    </div>
  );
};
const ReviewCard = ({ image, reviewer, review, longReview }) => {
  return (
    <div className="bg-white min-w-[233px] h-[264px] md:min-w-[332px] lg:min-w-[332px] md:h-[380px] lg:h-[345px] rounded-2xl border-2 border-slate-300">
      <div className="flex flex-col px-5 pt-5">
        <img src="./images/quotation.png" alt="" className="h-4 w-4" />
        <p className="h-[122px] md:h-[220px] lg:h-[180px] pe-1 md:pe-5 text-xs md:text-base text-dark mb-3 overflow-y-hidden mt-4 text-justify">
          {review}
        </p>
        <div className="flex items-center gap-2 mt-4 ">
          <img
            src={image}
            alt=""
            className="h-[39px] w-[39px] rounded-full md:h-[63px] md:w-[63px]"
          />
          <p className="text-sm md:text-xl font-semibold">{reviewer}</p>
        </div>
      </div>
    </div>
  );
};
export default Beranda;
