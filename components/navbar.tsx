'use client'
import { useState, useEffect } from "react";
import DesktopNavbar from "@/components/desktop_navbar";
import MobileNavbar from "@/components/mobile_navbar";

const navbarItems = [
    {
        label: "About Us",
        dropdown: [
            { label: "The Vivota Oath", href: "/vivota-oath" },
            { label: "The Vivota Learning System", href: "/vivota-system" },
            { label: "Our Content Experts", href: "/our-content-experts" },
            { label: "Our Spaces", href: "/our-spaces" },
            { label: "Sample Notes", href: "/sample-notes" },
            { label: "FAQs", href: "/faqs" },
        ],
    },
    {
        label: "Subjects",
        dropdown: [
            { label: "JC Biology", href: "/biology" },
            { label: "JC Chemistry", href: "/chemistry" },
            { label: "JC Economics", href: "/economics" },
            { label: "JC Math", href: "/math" },
            { label: "JC Physics", href: "/physics" },
            { label: "JC General Paper", href: "/general-paper" },
        ],
    },
    {
        label: "Pricing and Aid",
        href: "/pricing-and-aid",
    },
    {
        label: "Class Schedule",
        href: "/class-schedule",
    },
    {
        label: "Contact Us",
        href: "/contact-us",
    }
];

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? (
        <MobileNavbar navbarItems={navbarItems} />
    ) : (
        <DesktopNavbar navbarItems={navbarItems} />
    );
}
