import { motion } from "motion/react"
import { div } from "motion/react-client";

const CurvedLine = ({ right }) => {

    return (
        <>
            {!right ? (
                <div>
                    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute md:-top-20">
                        <motion.path
                            d="M -100 800 C 100 700, 200 450, 450 600 S 700 850, 750 500 C 780 250, 680 150, 850 350   C 950 480, 1100 400, 1500 200 "
                            stroke="#F37021"
                            strokeWidth="3"
                            strokeLineCap="round"
                            initial={{
                                pathLength: 0,
                            }}
                            whileInView={{
                                pathLength: [0, 0.2, 0.5, 0.8, 1],
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 2,
                                ease: "easeInOut",
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                        />
                    </svg>
                </div>
            ) : (
                <div>
                    <svg width="100%" height="auto" viewBox="0 0 800 400" version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute top-40 md:top-0">

                        <motion.path d="M -50 350
             C 150 50, 350 50, 450 300
             C 500 200, 580 200, 620 350
             C 640 420, 600 420, 650 320
             C 700 250, 750 250, 850 300"
                            stroke="#FF8C00"
                            strokeWidth="3"
                            fill="none"
                            strokeLineCap="round"
                            strokeLineJoin="round"
                            initial={{
                                pathLength: 0,
                                pathOffset: 1,
                            }}
                            whileInView={{
                                pathLength: 1,
                                pathOffset: 0,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 2,
                                ease: "easeInOut",
                            }}
                             />
                    </svg>
                </div>
            )

            }
        </>
    )
}

export default CurvedLine