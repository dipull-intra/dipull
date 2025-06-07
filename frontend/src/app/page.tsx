"use client";

import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

import type { Award, Project, Team } from "@common/types/db";

import instance from "@front/utils/instance";
import { dynamicSizeAtom, headerHeightAtom } from "@front/utils/states";

import About from "./about";
import Awards from "./awards";
import Dp from "./dp";
import Projects from "./projects";

const greetings = [
  "안녕하세요!",      // 한국어
  "Hello!",          // 영어
  "こんにちは！",       // 일본어
  "你好！",           // 중국어 (간체)
  "您好！",           // 중국어 (정체)
  "Hola!",           // 스페인어
  "Bonjour !",       // 프랑스어
  "Hallo!",          // 독일어
  "Ciao!",           // 이탈리아어
  "Olá!",            // 포르투갈어
  "Здравствуйте!",   // 러시아어
  "नमस्ते!",         // 힌디어
  "سلام!",           // 아랍어
  "Merhaba!",        // 터키어
  "Xin chào!",       // 베트남어
  "Sawubona!",       // 줄루어
  "Halo!",           // 인도네시아어
  "Hej!",            // 스웨덴어
  "Selam!",          // 암하라어
  "Shalom!",         // 히브리어
  "Szia!",           // 헝가리어
  "Hallo!",          // 네덜란드어
  "Kamusta!",        // 타갈로그어 (필리핀)
  "Sawa dee!",       // 태국어
  "Salve!",          // 라틴어
  "Habari!",         // 스와힐리어
];

const Home = () => {
  const dynamicSize = useAtomValue(dynamicSizeAtom);
  const headerHeight = useAtomValue(headerHeightAtom);
  const [greetId, setGreetId] = React.useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  React.useEffect(() => {
    let interval = setInterval(() => {
      setGreetId((prev) => (prev + 1) % greetings.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { data: awards } = useQuery({
    queryKey: ["awards"],
    queryFn: async () => {
      const response = await instance.get<Award[]>("/awards");
      return response.data;
    },
    initialData: []
  });
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await instance.get<Project[]>("/projects");
      return response.data;
    },
    initialData: []
  });
  const { data: teams } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const response = await instance.get<Team[]>("/teams");
      return response.data;
    },
    initialData: []
  });

  return (
    <div className="w-full">
      <div
        className="px-10 relative flex flex-col items-start justify-start max-md:h-screen"
        style={isDesktop ? dynamicSize : {}}
      >
        <div className="h-full w-full flex flex-col items-start justify-between gap-16 py-20">
          <div />
          <div className="max-sm:hidden" />
          <div className="flex flex-row items-center gap-10 max-sm:gap-5">
            <button>
              <div className="flex flex-col items-start gap-1">
                <p className="text-5xl max-sm:text-3xl font-extralight">+{projects.length}</p>
                <p className="text-start max-sm:text-sm">프로젝트 서비스</p>
              </div>
            </button>
            <button>
              <div className="flex flex-col items-start gap-1">
                <p className="text-5xl max-sm:text-3xl font-extralight">+{teams.length}</p>
                <p className="text-start max-sm:text-sm">관련 활동 경험</p>
              </div>
            </button>
            <button>
              <div className="flex flex-col items-start gap-1">
                <p className="text-5xl max-sm:text-3xl font-extralight">+{awards.length}</p>
                <p className="text-start max-sm:text-sm">수상 및 인증</p>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-9xl font-extralight max-sm:text-5xl max-md:text-7xl">{greetings[greetId]}</p>
            <p className="text-2xl max-sm:text-xl">— 행복한 개발자, 최재민입니다!</p>
          </div>
          <div />
          <div />
          <button
            className="flex flex-row items-center justify-center gap-2 max-md:hidden"
            onClick={() => {
              const _this = document.getElementById("about");
              if (!_this) return;
              window.scrollTo({
                top: _this.offsetTop - headerHeight,
                behavior: "smooth",
              });
            }}
          >
            <p>Scroll Down</p>
            <svg className="w-3 h-3" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-stone-700 dark:fill-stone-50" d="M6.50201 12.4747V1.09766C6.50201 0.884823 6.57384 0.706656 6.71751 0.563156C6.86101 0.419489 7.03917 0.347656 7.25201 0.347656C7.46484 0.347656 7.64301 0.419489 7.78651 0.563156C7.93017 0.706656 8.00201 0.884823 8.00201 1.09766V12.4747L13.1713 7.30541C13.3199 7.15674 13.4939 7.08332 13.6933 7.08516C13.8926 7.08716 14.0698 7.16566 14.225 7.32066C14.3698 7.47582 14.4448 7.65149 14.45 7.84766C14.4552 8.04382 14.3802 8.21949 14.225 8.37466L7.88476 14.7149C7.79109 14.8086 7.69234 14.8746 7.58851 14.9129C7.48467 14.9514 7.37251 14.9707 7.25201 14.9707C7.13151 14.9707 7.01934 14.9514 6.91551 14.9129C6.81167 14.8746 6.71293 14.8086 6.61926 14.7149L0.279008 8.37466C0.140508 8.23616 0.0696745 8.06466 0.0665079 7.86016C0.0633412 7.65566 0.134175 7.47582 0.279008 7.32066C0.434175 7.16566 0.612341 7.08816 0.813508 7.08816C1.01484 7.08816 1.19309 7.16566 1.34826 7.32066L6.50201 12.4747Z" />
            </svg>
          </button>
        </div>
        <img
          src="/jeamxn.png"
          alt="Jeamxn pic"
          className="grayscale-100 w-5xl absolute bottom-0 right-0 max-xl:w-3xl max-lg:w-2xl max-md:w-xl"
        />
      </div>
      
      <About />
      <Awards awards={awards} />
      <Dp />
      <Projects projects={projects} />

      <div className="w-full px-[7vw] py-[5vw] bg-stone-800 dark:bg-stone-300 flex flex-row justify-between">
        <p className="text-[5vw] whitespace-nowrap !text-stone-300 dark:!text-stone-700">Contact</p>
        <p className="flex-grow mx-4 text-[5vw] !text-stone-600 dark:!text-stone-400 whitespace-nowrap overflow-hidden">
          ..........................................................................................
        </p>
        <Link href="mailto:me@jeamxn.dev">
          <p className="hover:underline text-[5vw] whitespace-nowrap !text-stone-300 dark:!text-stone-700">me@jeamxn.dev</p>
        </Link>
      </div> 
    </div>
  );
};

export default Home;