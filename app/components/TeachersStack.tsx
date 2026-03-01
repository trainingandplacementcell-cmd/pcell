"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

const teachers = [
  { id: 1, name: "Dr. Anil Sharma", role: "Convener, TPC", image: "/teachers/1.jpg" },
  { id: 2, name: "Dr. Bhavna Gupta", role: "Co-Convener", image: "/teachers/2.jpg" },
  { id: 3, name: "Dr. Rakesh Verma", role: "Faculty Advisor", image: "/teachers/3.jpg" },
  { id: 4, name: "Dr. Neha Arora", role: "Faculty Member", image: "/teachers/4.jpg" },
  { id: 5, name: "Dr. Sandeep Jain", role: "Faculty Member", image: "/teachers/5.jpg" },
  { id: 6, name: "Dr. Pooja Mehta", role: "Faculty Member", image: "/teachers/6.jpg" },
  { id: 7, name: "Dr. Amit Khurana", role: "Faculty Member", image: "/teachers/7.jpg" },
  { id: 8, name: "Dr. Ritu Malhotra", role: "Faculty Member", image: "/teachers/8.jpg" },
  { id: 9, name: "Dr. Kunal Aggarwal", role: "Faculty Member", image: "/teachers/9.jpg" },
  { id: 10, name: "Dr. Swati Bansal", role: "Faculty Member", image: "/teachers/10.jpg" },
  { id: 11, name: "Dr. Nitin Kapoor", role: "Faculty Member", image: "/teachers/11.jpg" },
  { id: 12, name: "Dr. Garima Singh", role: "Faculty Member", image: "/teachers/12.jpg" },
  { id: 13, name: "Dr. Manoj Tiwari", role: "Faculty Member", image: "/teachers/13.jpg" },
  { id: 14, name: "Dr. Ayesha Khan", role: "Faculty Member", image: "/teachers/14.jpg" },
  { id: 15, name: "Dr. Rohit Saxena", role: "Faculty Member", image: "/teachers/15.jpg" },
  { id: 16, name: "Dr. Priyanka Joshi", role: "Faculty Member", image: "/teachers/16.jpg" },
  { id: 17, name: "Dr. Vikas Mishra", role: "Faculty Member", image: "/teachers/17.jpg" },
];

export default function TeachersSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const moveCard = () => {
      const last = slider.querySelector<HTMLDivElement>(".item:last-child");
      if (!last) return;

      const clone = last.cloneNode(true) as HTMLDivElement;
      slider.insertBefore(clone, slider.firstChild);
      slider.removeChild(last);
    };

    const runFlip = () => {
      const state = Flip.getState('.item');

      moveCard();

      Flip.from(state, {
        targets: '.item',
        absolute: true,
        ease: 'sine.inOut',
        onEnter: (elements) =>
          gsap.from(elements, {
            duration: 0.35,
            yPercent: 20,
            opacity: 0,
            ease: 'expo.out',
          }),
        onLeave: (elements) =>
          gsap.to(elements, {
            duration: 0.35,
            yPercent: 5,
            xPercent: -5,
            opacity: 0,
            ease: 'expo.out',
          }),
      });
    };

    ScrollTrigger.create({
      trigger: slider,
      start: 'top top',
      end: '+=1000',
      pin: true,
      scrub: false,
      onEnter: runFlip,
      onLeaveBack: runFlip,
    });
  }, []);

  return (
    <section className="relative min-h-[200vh] flex items-center justify-center bg-[#F7F1E8]">
      <div
        ref={sliderRef}
        className="relative w-[300px] h-[420px] perspective-[100px]"
      >
        {teachers.slice(0, 5).map((t, i) => (
          <div
            key={t.id}
            className="item absolute w-[300px] h-[420px] rounded-2xl shadow-xl overflow-hidden bg-white"
            style={{
              transform: `translate(${i * 18}px, ${-i * 18}px) scale(${1 - i * 0.04})`,
              zIndex: 20 - i,
            }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md p-4">
              <h3 className="text-base font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-600">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}