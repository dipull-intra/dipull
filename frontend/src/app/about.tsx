import React from "react";

const About = () => { 
  return (
    <div
      className="w-full bg-stone-200 dark:bg-stone-900 py-20 px-12 max-sm:px-6 max-sm:py-12 flex flex-col gap-2 items-start justify-start"
      id="about"
    >
      <p className="text-4xl">About Me</p>
      <p className="text-xl">웹 서비스를 통해 더 많은 사람들을 행복하게 만들고 싶은 개발자</p>
      <p className="break-words">
          기술은 결국 <b>누군가의 불편을 덜어주고, 삶을 조금 더 나아지게 해주는 도구</b>라는 생각이 들어요.<br />
      </p>
      <p className="break-words">
          그래서 저는 친환경 플랫폼 ZERO, 전화 소통 훈련 서비스 띠리링, 그리고 수백 명이 사용하는 교내 인트라넷 Dipull 같은 프로젝트를 만들며,<br />
        <b>기술이 어떻게 사람을 도울 수 있을까</b>를 계속 고민해왔어요.<br />
      </p>
      <p className="break-words">
          성능 개선, 사용자 경험, 보안, 커뮤니티 운영까지. 결국엔 사람을 위한 기술이어야 의미가 있다고 느껴요.<br />
          앞으로도 <b>조금 더 따뜻한 웹 서비스, 조금 더 웃음이 남는 경험</b>을 만들고 싶어요.
      </p>
    </div>
  );
};

export default About;
