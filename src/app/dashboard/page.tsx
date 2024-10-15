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
            <h1 className={`${playfairDisplay.className} text-center text-4xl font-bold text-black`}>Welcome</h1>
            <div className="flex justify-center">
                
            </div>
            <Aboutus />
            <LogoutButton />
        </main>

        </>

    )}