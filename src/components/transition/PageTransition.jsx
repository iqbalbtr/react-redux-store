import { useIsPresent, motion } from 'framer-motion'
import React from 'react'

function PageTransition() {
    const isPresent = useIsPresent()

    return (
        <>
            <motion.div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 8,
                    originX: isPresent ? 0 : 1,
                    backgroundColor: "#fb923c"
                }}
                initial={{
                    scaleX: 1
                }}
                animate={{
                    scaleX: 0,
                    transition: {
                        duration: 0.5,
                        ease: "circOut",
                        delay: 0.3
                    }
                }}
                exit={{
                    scaleX: 1,
                    transition: {
                        duration: 0.5,
                        ease: "circIn",
                        edlat: 0.3
                    }
                }}
            />
            <motion.div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9,
                    originX: isPresent ? 0 : 1,
                    backgroundColor: "#f87171"
                }}
                initial={{
                    scaleX: 1
                }}
                animate={{
                    scaleX: 0,
                    transition: {
                        duration: 0.5,
                        ease: "circOut",
                        delay: 0.25
                    }
                }}
                exit={{
                    scaleX: 1,
                    transition: {
                        duration: 0.5,
                        ease: "circIn",
                        delay: 0.25
                    }
                }}
            />
            <motion.div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10,
                    originX: isPresent ? 0 : 1,
                    backgroundColor: "#fde047"
                }}
                initial={{
                    scaleX: 1
                }}
                animate={{
                    scaleX: 0,
                    transition: {
                        duration: 0.5,
                        ease: "circOut",
                        delay: 0.15
                    }
                }}
                exit={{
                    scaleX: 1,
                    transition: {
                        duration: 0.5,
                        ease: "circIn",
                        delay: 0.15
                    }
                }}
            />
        </>
    )
}

export default PageTransition
