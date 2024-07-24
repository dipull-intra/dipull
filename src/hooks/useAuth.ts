import { useRouter } from "next/navigation";

import { useConfirmModalDispatch } from "@/components/ConfirmModal";

const useAuth = () => { 
  const router = useRouter();
  const confirmModalDispatch = useConfirmModalDispatch();
  const login = () => {
    router.push(`${process.env.NEXT_PUBLIC_DIMIGOIN_URI}/oauth?client=${process.env.NEXT_PUBLIC_DIMIGOIN_KEY}&redirect=${window.location.origin}/auth`);
  };
  const logout = () => { 
    window.location.href = "/auth/logout";
  };
  const needLogin = () => {
    confirmModalDispatch({
      type: "show",
      data: {
        title: "로그인이 필요합니다.",
        description: "로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?",
        onConfirm: () => {
          login();
        }
      }
    });
  };

  return { needLogin, login, logout };
};

export default useAuth;