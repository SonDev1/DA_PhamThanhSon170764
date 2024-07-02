import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";

export const SocialRedirect = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const token = {
            access_token: accessToken || "",
            refresh_token: refreshToken || "",
        };
        localStorage.setItem("access_token", token.access_token);
        enqueueSnackbar("Chào mừng trở lại ", { variant: '' });
        navigate("/")
    }, []);
    return <div>Hello window!</div>;
};