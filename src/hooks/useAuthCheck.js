import { useEffect } from "react";
import { useQueryClient } from "react-query";

export const useAuthCheck = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const principalData = queryClient.getQueryData("principalQuery");
        console.log(principalData);
        if (!principalData) {
            alert("로그인이 필요합니다");
            window.location.replace("/auth/signin");
        }
    }, []);
};
