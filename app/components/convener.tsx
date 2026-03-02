"use client";

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FollowingPointer } from "./FollowingPointer";
import Team from "./team";

const teachers = [
  {
    name: "Dr. Varun Bhandari",
    role: "Convener",
    image: "/teachers/varun.jpeg",
    about:
      "A finance expert with a Ph.D. from Delhi School of Economics, Dr. Bhandari specializes in Corporate Governance and Green Investing. An internationally recognized researcher, he bridges advanced financial research with industry practice and, as TPC Convenor, creates high-impact career opportunities for SLC students.",
  },
  {
    name: "Dr. Megha Jain",
    role: "Faculty",
    image: "/teachers/Megha.jpg",
    about:
      "An FMS alumna with over a decade of industry experience, Dr. Megha Jain specializes in Climate Finance and Sustainability. She connects academic research with real-world policy and industry practice, serving as a strong mentor for students aspiring to impactful careers in finance and think tanks.",
  },
  {
    name: "Dr. Nidhi Jain",
    role: "Faculty",
    image: "/teachers/nidhijain.jpg",
    about:
      "A tech-driven finance expert with a Ph.D. in Behavioral Biases, Dr. Nidhi Jain holds two patents in Supply Chain and Banking. With 17+ international publications and a background in Computer Applications, she mentors students in navigating data-driven, modern financial systems through insights into investor psychology.",
  },
  {
    name: "Ms. Richa Tyagi",
    role: "Faculty",
    image: "/teachers/richa.jpeg",
    about:
      "An HR strategist and consumer behaviour researcher, Ms. Richa Tyagi brings strong management and counselling expertise to the TPC. With a background as a Senior Counsellor, she excels at identifying student potential and aligning it with industry demands, making her a key mentor for navigating today's competitive corporate landscape.",
  },
  {
    name: "Dr. Pawan Kumar Adewa",
    role: "Faculty",
    image: "/teachers/pawan.jpg",
    about:
      "A dedicated academician strengthening industry-academia collaboration and student employability. He actively guides students in professional skill development and career planning, ensuring they are well-prepared for the evolving global workforce.",
  },
  {
    name: "Dr. Kanika Solanki",
    role: "Faculty",
    image: "/teachers/kanika.jpg",
    about:
      "Specialising in student engagement, Dr. Kanika mentors students to align academic learning with professional goals. Her focus is on ensuring a smooth and confident transition from campus to corporate careers.",
  },
  {
    name: "Dr. Pranav Das",
    role: "Faculty",
    image: "/teachers/pranav.jpg",
    about:
      "A core member of the placement team, Dr. Pranav mentors students on career-specific strategies and niche opportunities. His guidance builds confidence and prepares students for high-stakes interviews",
  },
  {
    name: "Dr. Ankit Mittal",
    role: "Faculty",
    image: "/teachers/ankit.jpg",
    about:
      "He brings strong academic rigour to the placement process, helping students apply analytical and research skills to real industry needs. He also works closely with corporate partners to create diverse recruitment opportunities, guiding students toward long-term career growth.",
  },
  {
    name: "Ms. Shraddha Aggarwal",
    role: "Faculty",
    image: "/teachers/shraddha.jpeg",
    about:
      "She focuses on student outreach and coordinating recruitment drives, ensuring smooth placement operations. Her work connects student aspirations with corporate requirements, maximizing opportunities across campus.",
  },
  {
    name: "Ms. Radha Bhola",
    role: "Faculty",
    image: "/profilepic.png",// yet to be added 
    about:
      "She specialises in soft-skills training and interview preparation, helping students refine communication, presentation, and group discussion skills. Her mentorship enables students to stand out in competitive recruitment processes.",
  },
  {
    name: "Ms. Ashani Dhar",
    role: "Faculty",
    image: "/teachers/ashani.jpg",
    about:
      "She strengthens corporate relations and expands the TPC's recruiter network, focusing on emerging industry trends to prepare students for future roles and ensure diverse internship and placement opportunities.",
  },
  {
    name: "Dr. Ravinder Kumar", // not found
    role: "Faculty",
    image: "/profilepic.png", // not found
    about:
      "He provides strategic career guidance, helping students build strong personal brands and confidently communicate their value to potential employers.",
  },
  {
    name: "Dr. Dipak Shukla", //not found 
    role: "Faculty",
    image: "/teachers/dipak.jpeg",
    about:
      "He supports the smooth execution of placement activities and student mentorship programs, ensuring initiatives remain accessible and effective for the entire student community.",
  },
  {
    name: "Dr. Rohit Jahari",
    role: "Faculty",
    image: "/teachers/rohit.jpg", // found
    about:
      "Contributes to career counseling and training initiatives for student placements.", // notfound
  },
  {
    name: "Dr. Nidhi Mishra", 
    role: "Faculty",
    image: "/teachers/nidhi.jpg", //found
    about:
      "Contributes to mentorship and placement support activities for students.", //not found 
  },
];

export default function Convener() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const getTeacher = (index: number) => {
    return teachers[index] ?? null;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll
    const lenis = new Lenis({ smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          "#card-1, #card-2, #card-3",
        );

        // INITIAL STATE
        gsap.set(cards, {
          rotateY: 0,
          transformOrigin: "50% 50%",
        });

        // GAP OPENING
        const gapTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#cards-wrapper",
            start: "top center",
            end: "+=240",
            scrub: true,
          },
        });

        gapTl
          .to("#card-1", { xPercent: -12 }, 0)
          .to("#card-3", { xPercent: 12 }, 0);

        // FLIP ANIMATION
        const flipTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#cards-wrapper",
            start: "top+=300 center",
            end: "+=360",
            scrub: true,
          },
        });

        flipTl
          .to(cards, {
            rotateY: -180,
            stagger: 0.12,
            ease: "power2.inOut",
          })
          .to(
            cards,
            {
              z: 80,
              stagger: 0.12,
            },
            "<",
          );

        flipTl.eventCallback("onComplete", () => {
          const progress = document.querySelector("#teacher-progress");
          if (progress) {
            progress.textContent = `3 / ${teachers.length}`;
          }
        });


        // NEW HORIZONTAL SCROLL TIMELINE
        const track = document.querySelector(
          "#horizontal-track",
        ) as HTMLElement;
        if (!track) return;

        const totalSteps = Math.ceil(teachers.length / 3) - 1;

        const DEAD_ZONE = 0.09; // 15% scroll before data advances

        const horizontalTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".sticky",
            start: "top top",
            end: () => `+=${totalSteps * 300 + 1000}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // onUpdate:(self)=>{
            //     const progress = self.progress;
            //     if(progress >= 0.1 && progress <=0.25){
            //         const headerProgress = gsap.utils.mapRange(0.1,0.25,0,1,progress);
            //         const yValue = gsap.utils.mapRange(0,1,40,0,headerProgress);
            //         const opacityValue = gsap.utils.mapRange(0,1,0,1,headerProgress);
            //         gsap.set(".sticky-header",{
            //             y: yValue,
            //             opacity: opacityValue
            //        });

            //     }else if(progress <0.1){
            //         gsap.set(".sticky-header",{
            //             y: 40,
            //             opacity: 0
            //        });
            //     }else if(progress >0.25){
            //         gsap.set(".sticky-header",{
            //             y: 0,
            //             opacity: 1
            //        });
            //     }

            // }
            // snap: {
            //   snapTo: 1 / totalSteps,
            //   duration: { min: 1, max: 1 },
            //   ease: "power1.inOut",

            // },
          },
        });

        // PHASE 1 — horizontal scrolling (cards browsing)
        horizontalTl.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
        });

        horizontalTl.addPause("+=0.05");

        horizontalTl.to({}, { duration: 0.2 });

        // Removed outro fade-out tween for cards
        // horizontalTl.to('#cards-wrapper', {
        //   opacity: 0,
        //   scale: 0.94,
        //   y: -20,
        //   duration: 1.4,
        //   ease: 'power3.out',
        // });

        // Fade in outro section
        horizontalTl.fromTo(
          ".outro-section",
          { opacity: 0.5, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: "power3.inOut",
          },
        );

        // horizontalTl.to('#horizontal-track', {
        //   backgroundColor: 'rgba(0,0,0,0.02)',
        // },'<0.5');

        // Remove conflicting ScrollTriggers on parallax (deleted)

        // Safe parallax using quickSetter
        const setX1 = gsap.quickSetter("#card-1", "x", "px");
        const setX3 = gsap.quickSetter("#card-3", "x", "px");

        horizontalTl.eventCallback("onUpdate", () => {
          const p = horizontalTl.progress();
          setX1(-20 * p);
          setX3(20 * p);

          let step = 0;

          if (p > DEAD_ZONE) {
            const adjusted = (p - DEAD_ZONE) / (1 - DEAD_ZONE);
            step = Math.min(totalSteps, Math.round(adjusted * totalSteps));
          }

          const baseIndex = step * 3;

          setActiveIndex(baseIndex);

          // Progress text update remains
          const progressText = document.querySelector("#teacher-progress");
          if (progressText) {
            progressText.textContent = `${Math.min(baseIndex + 3, teachers.length)} / ${teachers.length}`;
          }
        });

        // Ensure cards stay in place after scroll
        gsap.set("#cards-wrapper", { clearProps: "transform" });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* INTRO */}
      <section className="relative w-full min-h-screen flex items-center  justify-center bg-transparent">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">
          {/* LEFT — Content */}
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-widest text-black dark:text-white">
              Training & Placement Cell
            </span>

            <h1 className="text-5xl lg:text-7xl leading-tight text-gray-900">
              Faculty guiding
              <br />
              every placement journey
            </h1>

            <p className="text-lg text-black dark:text-white max-w-xl">
              Meet the academic leadership behind internships, placements,
              industry engagement, and career guidance at Shyam Lal College.
            </p>

            <div className="pt-6 flex items-center gap-6">
              <span className="text-sm text-black dark:text-gray-100">
                Scroll to explore faculty
              </span>
              <div className="h-px w-24 bg-gray-300" />
            </div>
          </div>

          {/* RIGHT — Visual anchor */}
          <div className="hidden lg:block">
            <div className="h-[420px] w-full rounded-2xl bg-gray-200 flex items-center justify-center">
              <div className="relative w-full h-full px-5">
                <Image src="/team.png" alt="Team" fill style={{ objectFit: 'contain', padding: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SECTION */}
      <section className="relative w-full min-h-[300vh] ">
        <div className="sticky top-0 h-screen overflow-hidden justify-center">
          <div className="sticky-header text-6xl absolute top-[20%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <h1 className="relative text-center will-change-transform translate-y-[40px] opacity-0">
              this is the heading
            </h1>
          </div>
          <div
            id="horizontal-track"
            className="flex h-full items-center gap-40 justify-center will-change-transform"
          >
            <div
              id="cards-wrapper"
              className="relative w-[1200px] max-w-none flex flex-row gap-0 perspective-[1200px] overflow-visible justify-center"
            >
              {/* CARD 1 */}
              <div
                id="card-1"
                className="relative w-[360px] aspect-[5/7] rounded-3xl lg:rounded-l-3xl transform-style-preserve-3d lg:rotate-y-0 rotate-y-180 scale-[0.95] xl:scale-100"
              >
                <div className="absolute inset-0 backface-hidden rotate-y-0 overflow-hidden rounded-l-3xl">
                  <div
                    className="w-full h-full bg-cover bg-no-repeat backface-hidden"
                    style={{
                      backgroundImage: "url(/carouselmaker_image_1.png)",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-3xl">
                  {getTeacher(activeIndex) && (
                    <FollowingPointer
                      teacher={getTeacher(activeIndex)!}
                    ></FollowingPointer>
                  )}
                </div>
              </div>

              {/* CARD 2 */}
              <div
                id="card-2"
                className="relative w-[360px] aspect-[5/7] rounded-3xl transform-style-preserve-3d lg:rotate-y-0 rotate-y-180 scale-[0.95] xl:scale-100"
              >
                <div className="absolute inset-0 backface-hidden rotate-y-0 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-no-repeat backface-hidden"
                    style={{
                      backgroundImage: "url(/carouselmaker_image_2.png)",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-3x ">
                  {getTeacher(activeIndex + 1) && (
                    <FollowingPointer
                      teacher={getTeacher(activeIndex + 1)!}
                    ></FollowingPointer>
                  )}
                </div>
              </div>

              {/* CARD 3 */}
              <div
                id="card-3"
                className="relative w-[360px] aspect-[5/7] rounded-3xl lg:rounded-r-3xl transform-style-preserve-3d lg:rotate-y-0 rotate-y-180 scale-[0.95] xl:scale-100"
              >
                <div className="absolute inset-0 backface-hidden rotate-y-0 rounded-r-3xl overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: "url(/carouselmaker_image_3.png)",
                      backgroundPosition: "right center",
                    }}
                  />
                  {/* <div className="relative inset-0 bg-black bg-opacity-50 rounded-r-3xl text-white">hi this is hardik</div> */}
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-3xl">
                  {getTeacher(activeIndex + 2) && (
                    <FollowingPointer
                      teacher={getTeacher(activeIndex + 2)!}
                    ></FollowingPointer>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-sm tracking-wide text-black">
              <span id="teacher-progress">3 / 17</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full h-[48vh] " /> */}
      {/* OUTRO */}
      <section className="outro-section relative  flex items-center justify-center p-8  ">
        {/* <div className="max-w-4xl text-center space-y-8"> */}
        {/* <h2 className="text-4xl lg:text-5xl font-medium">
            Behind Every Transition
          </h2>

          <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
            The Training & Placement Cell is guided by experienced faculty
            members who ensure that every opportunity is structured,
            transparent, and student-focused.
          </p>

          <p className="text-base lg:text-lg text-white/60">
            From guidance to outcomes, each step is designed to support growth,
            confidence, and long-term career clarity.
          </p>

          <div className="pt-6">
            <span className="inline-block text-sm tracking-widest uppercase text-white/50">
              Shyam Lal College · University of Delhi
            </span>
          </div>
        </div> */}
        {/* <Team /> */}
      </section>
    </div>
  );
}
