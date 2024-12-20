// import Section from "./Section";
// import Heading from "./Heading";
// import { service1, service2, service3, check } from "../assets";
// import { brainwaveServices, brainwaveServicesIcons } from "../constants/data";
// import {
//   PhotoChatMessage,
//   Gradient,
//   VideoBar,
//   VideoChatMessage,
// } from "./design/Services";

// import Generating from "./Generating";

// const Services = () => {
//   return (
//     <Section id="how-to-use">
//       <div className="container">
//         {/* <Heading
//           title="Generative AI made for creators."
//           text=""
//         /> */}

//         <div className="relative">
//           <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
//             <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
//               <img
//                 className="w-full h-full object-cover md:object-right"
//                 width={800}
//                 alt="Smartest AI"
//                 height={730}
//                 src={service1}
//               />
//             </div>

//             <div className="relative z-1 max-w-[17rem] ml-auto">
//               <h4 className="h4 mb-4">Lock-Safe</h4>
//               <p className="body-2 mb-[3rem] text-n-3">
//                 Chen-Hokan  is blockchain locker powered by AI to make your folder & files managing look like a game!
//               </p>
//               <ul className="body-2">
//                 {brainwaveServices.map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-start py-4 border-t border-n-6"
//                   >
//                     <img width={24} height={24} src={check} />
//                     <p className="ml-4">{item}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
//           </div>

//           <div className="relative z-1 grid gap-5 lg:grid-cols-2">
//             <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
//               <div className="absolute inset-2">
//                 <img
//                   src={service2}
//                   className="h-full w-full object-cover"
//                   width={630}
//                   height={750}
//                   alt="robot"
//                 />
//               </div>

//               <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
//                 <h4 className="h4 mb-4">Gamifying your media management experience</h4>
//                 {/* <p className="body-2 mb-[3rem] text-n-3">
//                   Ever saw Iron-Man  and wanted to have something like his Desk ,where using hands you can move files here and there and keep them ultra safe !
//                 </p> */}
//               </div>

//               {/* <PhotoChatMessage /> */}
//             </div>

//             <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
//               <div className="py-12 px-4 xl:px-8">
//                 <h4 className="h4 mb-4"></h4>
//                 <p className="body-2 mb-[2rem] text-n-3">
//                   A platform to help you manage your media files in a fun and interactive way.
//                 </p>

//                 <ul className="flex items-center justify-between">
//                   {brainwaveServicesIcons.map((item, index) => (
//                     <li
//                       key={index}
//                       className={`rounded-2xl flex items-center justify-center ${
//                         index === 2
//                           ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
//                           : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
//                       }`}
//                     >
//                       <div
//                         className={
//                           index === 2
//                             ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
//                             : ""
//                         }
//                       >
//                         <img src={item} width={24} height={24} alt={item} />
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
//                 <img
//                   src={service3}
//                   className="w-full h-full object-cover"
//                   width={520}
//                   height={400}The worlds most powerful locker for your files and folders
//                   alt="Scary robot"
//                 />

//                 {/* <VideoChatMessage /> */}
//                 {/* <VideoBar /> */}
//               </div>
//             </div>
//           </div>

//           <Gradient />
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Services;











import Section from "./Section";
import qrImage from "../assets/roadmap/qrImage.jpg"; // Assuming you have a QR image asset
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id="download-apk">
      <div className="container flex justify-center items-center h-[39rem]">
        <div className="relative text-center p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          {/* Heading */}
          <h4 className="h4 mb-6">Download Our Apk</h4>

          {/* QR Code */}
          <div className="relative flex justify-center items-center">
            <img
              src={qrImage} // Use the correct path to your QR code image
              alt="Download QR Code"
              width={250}
              height={250}
              className="w-60 h-60 object-cover"
            />
          </div>
        </div>

        {/* Background Gradient */}
        <Gradient />
      </div>
    </Section>
  );
};

export default Services;
