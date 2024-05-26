"use client";

import * as React from "react";
import VerifyCodeForm from "@/components/VerifyCodeForm/VerifyCodeForm";
import {Endpoints} from "@/app/enums/endpoints";

const LoginCodePage = () => {
    return <VerifyCodeForm endpointPath={Endpoints.LOGIN_VERIFY_CODE}/>
}

export default LoginCodePage;
