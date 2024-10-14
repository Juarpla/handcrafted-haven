/* eslint-disable */

import LogoutButton from "../ui/logoutbutton";

import React from 'react';
import Navigation from '../ui/Navigation';
import Aboutus from './aboutUs';
import { playfairDisplay, raleway } from '@/app/ui/fonts';


export default function Page() {
    return (
        <>
        <main>
            <Navigation />
            <h1 className={`${playfairDisplay.className} text-center text-4xl font-bold`}>Welcome</h1>
            <div className="flex justify-center">
                <LogoutButton />
            </div>
            <Aboutus />
        </main>

        </>

    )}