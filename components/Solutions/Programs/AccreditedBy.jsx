// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const accreditors = [
//   {
//     id: 1,
//     name: "European Council for Business Education",
//     logo: "/images/solutions/strategic-hr/1.png",
//   },
//   {
//     id: 2,
//     name: "QS Stars Rating System - Online Learning",
//     logo: "/images/solutions/strategic-hr/2.png",
//   },
//   {
//     id: 3,
//     name: "ACBSP Global Business Accreditation",
//     logo: "/images/solutions/strategic-hr/3.png",
//   },
//   {
//     id: 4,
//     name: "ASIC Accreditation Service for International Colleges",
//     logo: "/images/solutions/strategic-hr/4.png",
//   },
//   {
//     id: 5,
//     name: "Business Graduates Association Member",
//     logo: "/images/solutions/strategic-hr/5.png",
//   },
//   // {
//   //   id: 6,
//   //   name: "AACSB Accredited",
//   //   logo: "/images/solutions/strategic-hr/2.png",
//   // },
//   // {
//   //   id: 7,
//   //   name: "AACSB Accredited",
//   //   logo: "/images/solutions/strategic-hr/1.png",
//   // },
//   // {
//   //   id: 8,
//   //   name: "AACSB Accredited",
//   //   logo: "/images/solutions/strategic-hr/3.png",
//   // },
//   // {
//   //   id: 9,
//   //   name: "AACSB Accredited",
//   //   logo: "/images/solutions/strategic-hr/4.png",
//   // },
// ];

// export default function AccreditedBy() {
//   const scrollRef = useRef(null);

//   const scroll = (dir) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -240 : 240,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-white py-12 sm:py-16 border-t border-slate-100">
//       <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

//         {/* Header Row */}
//         <div className="flex items-center justify-between mb-8 sm:mb-10">
//           {/* Title */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143]">
//             Accredited By
//           </h2>

//           {/* Arrows */}
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => scroll("left")}
//               className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
//               aria-label="Next"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Logos Strip */}
//         <div
//           ref={scrollRef}
//           className="flex items-center justify-center flex-wrap gap-10 sm:gap-14 overflow-x-auto scrollbar-hide pb-2"
//         >
//           {accreditors.map((a) => (
//             <div
//               key={a.id}
//               className="flex-shrink-0 flex items-center justify-center h-20 sm:h-24 grayscale-0 hover:scale-105 transition-transform duration-200"
//               style={{ minWidth: "180px" }}
//             >
//               <Image
//                 src={a.logo}
//                 alt={a.name}
//                 width={160}
//                 height={80}
//                 className="object-contain max-h-16 sm:max-h-20 w-auto"
//               />
//             </div>
//           ))}
//         </div>

//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//         .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const accreditors = [
  {
    id: 1,
    name: "European Council for Business Education",
    logo: "/images/solutions/strategic-hr/1.png",
  },
  {
    id: 2,
    name: "QS Stars Rating System - Online Learning",
    logo: "/images/solutions/strategic-hr/2.png",
  },
  {
    id: 3,
    name: "ACBSP Global Business Accreditation",
    logo: "/images/solutions/strategic-hr/3.png",
  },
  {
    id: 4,
    name: "ASIC Accreditation Service for International Colleges",
    logo: "/images/solutions/strategic-hr/4.png",
  },
  {
    id: 5,
    name: "Business Graduates Association Member",
    logo: "/images/solutions/strategic-hr/5.png",
  },
];

export default function AccreditedBy() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless looping
  const logos = [...accreditors, ...accreditors];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const animate = () => {
      if (!isPaused) {
        container.scrollLeft += 1;

        // Infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-12 sm:py-16 border-t border-slate-100">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="ml-10 text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143]">
            Accredited By
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Logos */}
        {/* <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-10 sm:gap-14 overflow-x-auto scrollbar-hide pb-2"
        >
          {logos.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-20 sm:h-24"
              style={{ minWidth: "180px" }}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={160}
                height={80}
                className="object-contain max-h-16 sm:max-h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div> */}

        {/* Logos Strip */}
        <div
          ref={scrollRef}
          className="flex items-center justify-center flex-wrap gap-10 sm:gap-14 overflow-x-auto scrollbar-hide pb-2"
        >
          {accreditors.map((a) => (
            <div
              key={a.id}
              className="flex-shrink-0 flex items-center justify-center h-20 sm:h-24 grayscale-0 hover:scale-105 transition-transform duration-200"
              style={{ minWidth: "190px" }}
            >
              <Image
                src={a.logo}
                alt={a.name}
                width={160}
                height={80}
                className="object-contain max-h-16 sm:max-h-20 w-auto"
              />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}