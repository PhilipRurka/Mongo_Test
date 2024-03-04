'use client';

import { ReactNode } from 'react';

import AuthProvider from '../src/providers/nextAuth';

type ProviderProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProviderProps) => <AuthProvider>{children}</AuthProvider>;

export default Providers;
