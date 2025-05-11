import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import { axiosInstance } from "../lib/axios";

const useHome = () => {
  const router = useRouter();
  const [cookies, ,removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState("");

  useEffect(() => {

    const verifyCookie = async () => {

        if (!cookies.token) {
            router.push("/auth/login");
        }

        const { data } = await axiosInstance.post(
            "/",
            {},
            { withCredentials: true }
        );

        const { status, user } = data;

        setUsername(user);

        return status
            ? toast(`Hello ${user}`, {
                position: "top-right",
            })
            : (removeCookie("token"), router.push("/auth/login"));
        };
            verifyCookie();
        }, [cookies, router, removeCookie]);

    // const Logout = () => {
    //     removeCookie("token");
    //     router.push("/signup");
    // };
}