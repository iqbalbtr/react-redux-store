import React from 'react'
import { motion } from "framer-motion"

function CardTransition({ children, scale, index, background}) {

    const style = {
        X: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            originX: 0,
            zIndex: 4,
            position: "absolute",
            backgroundColor: background || "orange"
        },
        Y: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            originY: 0,
            zIndex: 4,
            position: "absolute",
            backgroundColor: background || "orange"
        }
    }


    const variantY = {
        slideIn: {
            hidden: {
                scaleY: 1
            },
            animate: {
                scaleY: 0,
                transition: {
                    duration: 0.65,
                    delay: index * 0.15,
                    ease: "circInOut"
                }
            }
        },
        slideOut: {
            hidden: {
                scaleY: 1
            },
            animate: {
                scaleY: 0,
                transition: {
                    duration: 0.85,
                    delay: index * 0.15 + 0.02,
                    ease: "circInOut"
                }
            }
        }
    }

    const variantX = {
        slideIn: {
            hidden: {
                scaleX: 1
            },
            animate: {
                scaleX: 0,
                transition: {
                    duration: 0.65,
                    delay: index * 0.15,
                    ease: "circInOut"
                }
            }
        },
        slideOut: {
            hidden: {
                scaleX: 1
            },
            animate: {
                scaleX: 0,
                transition: {
                    duration: 0.85,
                    delay: index * 0.20,
                    ease: "circInOut"
                }
            }
        }
    }

    return (
        <div className='relative'>
            <motion.div
                style={scale === "Y" ? style.Y : style.X}
                variants={scale === "Y" ? variantY.slideIn : variantX.slideIn || variantY.slideIn}
                initial="hidden"
                animate="animate"
                viewport={{once: true}}
            />
            <motion.div
                style={scale === "Y" ? {...style.Y, backgroundColor: "orangered", zIndex: 3} : {...style.X, backgroundColor: "orangered", zIndex: 3}}
                variants={scale === "Y" ? variantY.slideOut : variantX.slideOut || variantY.slideOut}
                initial="hidden"
                animate="animate"
                viewport={{once: true}}
            />
            {children}
        </div>
    )
}

export default CardTransition
