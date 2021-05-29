import React from 'react'
import { motion } from "framer-motion";

const Fouter = () => {
    const modules = [
        { name: "Home", url: "" },
        { name: "About", url: "about" },
        { name: "Options", url: "options" },
        { name: "Setting", url: "setting" },
        { name: "Account", url: "account" }
    ]

    const follow = [
        {
            name: 'Instagram',
            url: 'insta'
        },
        {
            name: 'Facebook',
            url: 'insta'
        },
        {
            name: 'Twitter',
            url: 'insta'
        },
        {
            name: 'LinkedIn',
            url: 'insta'
        },
        {
            name: 'GitHUB',
            url: 'insta'
        },
    ]

    const terms = [
        {
            name: 'Terms'
        },
        {
            name: 'Privacy'
        }
    ]

    const projects = [
        "Project Managemnent", "Schedular", "Calender", "Flask", "Multi-Theme", "Vue.js", "Bot"
    ]
    return (
        <React.Fragment>
            <div className="h-64 bg-yellow-200  absolute bottom-0  w-full">
                <div className="flex p-4 justify-around">
                    <motion.div className="flex flex-col space-x-2 "
                        transition={{ type: 'spring', stiffness: 120 }}
                        whileHover={{ scale: 1.1, originX: 0, color: '#121212' }}
                    >
                        <span className="text-4xl">WOLF</span>
                        <span>Its My Startup</span>
                        <span>IN Here I will Update All project</span>
                    </motion.div>
                    <div className="flex flex-col space-x-2">
                        <span className="text-2xl">Explore</span>

                        {
                            modules.map(a => (
                                <motion.div
                                    transition={{ type: 'spring', stiffness: 120 }}
                                    whileHover={{ scale: 1.2, originX: 0, color: '#121212' }}
                                >{a.name}</motion.div>
                            ))
                        }
                    </div>
                    <motion.div className="flex flex-col space-x-2 "
                        transition={{ type: 'spring', stiffness: 120 }}
                        whileHover={{ scale: 1.1, originX: 0, color: '#121212' }}
                    >
                        <span className="text-2xl">Vist</span>
                        <span>Flat no 410 Sanman Belmor</span>
                        <span>Pet-basheerabad kompally</span>
                        <span>Hyderabad ts-500067</span>
                        <span>INDIA</span>
                    </motion.div>
                    <div className="flex flex-col space-x-2">
                        <span className="text-2xl">Follow</span>
                        {
                            follow.map(a => (
                                <motion.div
                                    transition={{ type: 'spring', stiffness: 120 }}
                                    whileHover={{ scale: 1.2, originX: 0, color: '#121212' }}
                                >{a.name}</motion.div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col space-x-2">
                        <span className="text-2xl">Legal</span>
                        {
                            terms.map(a => (
                                <motion.div
                                    transition={{ type: 'spring', stiffness: 120 }}
                                    whileHover={{ scale: 1.2, originX: 0, color: '#121212' }}
                                >{a.name}</motion.div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col space-x-2">
                        <span className="text-2xl">UpComing</span>
                        {
                            projects.map(a => (
                                <motion.div
                                    transition={{ type: 'spring', stiffness: 120 }}
                                    whileHover={{ scale: 1.2, originX: 0, color: '#121212' }}
                                >{a}</motion.div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full border-t-2 text-center  p-8">
                    © Copyrights: 2021 All rights are reserved
                </div>
            </div>

        </React.Fragment>
    )
}

export default Fouter
