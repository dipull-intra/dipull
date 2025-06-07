import React from "react";

const Dp = () => {
  return (
    <div
      className="w-full bg-stone-200 dark:bg-stone-700 py-20 px-12 max-sm:px-6 max-sm:py-12 flex flex-col gap-4 items-start justify-start"
      id="about"
    >
      <div className="flex flex-col gap-2 w-full">
        <p className="text-4xl">Development Philosophy</p>
        <p className="text-xl">저는 이렇게 생각하고 개발해요</p>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-6">
        <div className="bg-stone-50 dark:bg-stone-600 rounded-2xl p-6 w-full flex flex-col gap-2">
          <p className="text-xl">1. <b>사용자에게 자연스러운 흐름</b>을 추구해요</p>
          <div>
            <p>기능보다 먼저 보는 건, 사용자가 어디서 불편을 느낄지예요.</p>
            <p>디자인 그대로 구현하는 건 기본이고, 그 안에서 복잡함을 걷어내고 누구나 쉽게 쓸 수 있게 만드는 걸 중요하게 생각해요.</p>
            <p>그래서 저는 늘, <b>설명하지 않아도 쓸 수 있는 서비스</b>를 만드는 걸 목표로 해요.</p>
          </div>
        </div>
        <div className="bg-stone-50 dark:bg-stone-600 rounded-2xl p-6 w-full flex flex-col gap-2">
          <p className="text-xl">2. <b>느껴지는 속도</b>를 중요하게 생각해요</p>
          <div>
            <p>기술 스택이나 구조보다 먼저, <b>사용자가 실제로 체감하는 쾌적함</b>에 집중해요.</p>
            <p>그래서 불필요한 API 호출을 줄이고, 캐싱 전략을 조정하고, 페이지 로딩 시간을 직접 줄이는 데 힘을 써요.</p>
            <p>빠른 웹은 단순한 성능이 아니라, <b>유저의 시간에 대한 예의</b>라고 생각해요.</p>
          </div>
        </div>
        <div className="bg-stone-50 dark:bg-stone-600 rounded-2xl p-6 w-full flex flex-col gap-2">
          <p className="text-xl">3. <b>불필요한 고민을 줄이는 구조</b>를 추구해요</p>
          <div>
            <p>Next.js 프로젝트를 짤 때는, <b>읽기 쉽고 확장하기 편한 구조</b>를 먼저 고민해요.</p>
            <p>App Router 도입과 폴더 구조 정리를 통해 컴포넌트 흐름을 명확히 하고, API와 UI 레이어를 구분해 유지보수를 편하게 만들어요.</p>
            <p><b>어디에 코드를 넣을지 고민하지 않아도 되는 구조</b>, 그게 제가 추구하는 편의성이에요.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dp;