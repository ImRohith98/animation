import React from 'react'
import { motion } from "framer-motion";

const Header = () => {
    const modules = [{ name: "Home", url: "" }, { name: "About", url: "about" }, { name: "Options", url: "options" }, { name: "Setting", url: "setting" }, { name: "Account", url: "account" }]

    return (
        <React.Fragment>
            <React.StrictMode>
                <div className="w-full flex justify-end border-b-2">
                    {
                        modules.map(a => (
                            <motion.div key={a.name} className="p-8 text-2xl"
                                initial={{ y: -350 }}
                                animate={{ y: 0 }}
                                transition={{ type: 'spring', stiffness: 120 }}
                                whileHover={{ scale: 1.1, originX: 1, color: '#f8e112' }}

                            >
                                {a.name}
                            </motion.div>
                        ))
                    }
                </div>
            </React.StrictMode>
        </React.Fragment>
    )
}

export default Header
