import { Container } from "react-bootstrap"
import { MainLayout } from "../layouts"
import Title from "../components/title/title"
import MainHeader from "../components/header"
import { PageTransition } from "../components/transition"
import { motion } from "framer-motion"

const AboutPage = () => {
    const parent = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.25
            }
        }
    }
    const child = {
        hidden: {
            opacity: 0,
            x: "50%"
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.75,
            }
        }
    }
    return (
        <MainLayout>
            <PageTransition />
            <Container>
                <MainHeader>
                    <Title>
                        About
                    </Title>
                    <MainHeader.Path>
                        about
                    </MainHeader.Path>
                </MainHeader>
                <motion.div
                    variants={parent}
                    initial="hidden"
                    whileInView="show"
                    className="px-12 md:px-24 py-12 flex flex-col items-center justify-center gap-6">
                    <Title>Funiro</Title>
                    <motion.p variants={child} className="max-w-4xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quia necessitatibus hic laborum, expedita ut totam temporibus autem eius dicta, iste esse similique delectus omnis sunt modi? Illo minima, porro sit quia accusamus quas quo architecto assumenda eos veritatis a pariatur atque nemo est veniam eaque rem! Natus debitis ea sunt est aperiam nemo quibusdam quae tempore deserunt praesentium. Repudiandae, accusantium assumenda?</motion.p>
                    <motion.p variants={child} className="max-w-4xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto ipsam officia adipisci nisi qui animi. Reprehenderit quis maiores, explicabo, nulla delectus consequatur fuga hic repellat laborum optio dolores iste temporibus eius aperiam natus officiis tempore. Libero delectus quam debitis at a.</motion.p>
                    <motion.p variants={child} className="max-w-4xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, cumque assumenda quae porro mollitia ipsa incidunt similique maiores officia, dolorem provident reiciendis.</motion.p>
                    <motion.h3 variants={child}  className="font-bold text-xl">Lorem, ipsum dolor.</motion.h3>
                    <motion.p variants={child}  className="max-w-4xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quia necessitatibus hic laborum, expedita ut totam temporibus autem eius dicta, iste esse similique delectus omnis sunt modi? Illo minima, porro sit quia accusamus quas quo architecto assumenda eos veritatis a pariatur atque nemo est veniam eaque rem! Natus debitis ea sunt est aperiam nemo quibusdam quae tempore deserunt praesentium. Repudiandae, accusantium assumenda?</motion.p>
                    <motion.h3 variants={child}  className="font-bold text-xl">Lorem dolor.</motion.h3>
                    <motion.p variants={child}  className="max-w-4xl text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore delectus, harum autem incidunt recusandae rem quos esse eius sequi ea cumque itaque deserunt? Earum veniam expedita dignissimos hic fuga voluptates excepturi. Obcaecati iure dolorum cupiditate necessitatibus perferendis vero, autem eaque optio ipsam aliquid, omnis esse veniam quisquam. Ratione reprehenderit quos esse, nulla, similique architecto necessitatibus aut molestias rerum consectetur omnis maiores distinctio eum magni quisquam. Quam reprehenderit tenetur dolorem eaque nihil! Dicta suscipit sint soluta necessitatibus voluptates?</motion.p>
                </motion.div>
            </Container>
        </MainLayout>
    )
}

export default AboutPage