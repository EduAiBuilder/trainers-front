'use client';

import * as React from 'react';
import VerifyCodeForm from '@/components/VerifyCodeForm/VerifyCodeForm';
import { Endpoints } from '@/app/enums/endpoints';

const RegisterCodePage = () => {
	return <VerifyCodeForm endpointPath={Endpoints.REGISTER_VERIFY_CODE} />;
};

export default RegisterCodePage;
