import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.3 } }
};

const SideBar = ({ menuOpen, setMenuOpen }) => {
    return (
        <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg z-50 p-6"
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            variants={sidebarVariants}
        >
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-black"
                onClick={() => setMenuOpen(false)}
            >
                <IoClose className="w-6 h-6" />
            </button>

            {/* Sidebar Content */}
            <ul className="mt-8 space-y-1">
                <li className="hover:bg-gray-200/60 p-2 rounded">Home</li>
                <li className="hover:bg-gray-200/60 p-2 rounded">About</li>
                <li className="hover:bg-gray-200/60 p-2 rounded">Services</li>
                <li className="hover:bg-gray-200/60 p-2 rounded">Contact</li>
            </ul>
        </motion.div>
    );
};

export default SideBar;
