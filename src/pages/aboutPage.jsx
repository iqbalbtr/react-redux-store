import { Container } from "react-bootstrap"
import MainLayout from "../layouts/mainLayout"
import Title from "../components/title/title"
import MainHeader from "../components/header"

const AboutPage = () => {
    return(
        <MainLayout>
            <Container>
                <MainHeader>
                    <Title>
                        About
                    </Title>
                    <MainHeader.Path>
                        about
                    </MainHeader.Path>
                </MainHeader>
                <div className="px-12 md:px-24 py-12 flex flex-col items-center justify-center gap-6">
                    <Title>Funiro</Title>
                    <p className="max-w-4xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quia necessitatibus hic laborum, expedita ut totam temporibus autem eius dicta, iste esse similique delectus omnis sunt modi? Illo minima, porro sit quia accusamus quas quo architecto assumenda eos veritatis a pariatur atque nemo est veniam eaque rem! Natus debitis ea sunt est aperiam nemo quibusdam quae tempore deserunt praesentium. Repudiandae, accusantium assumenda?</p>
                    <p className="max-w-4xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto ipsam officia adipisci nisi qui animi. Reprehenderit quis maiores, explicabo, nulla delectus consequatur fuga hic repellat laborum optio dolores iste temporibus eius aperiam natus officiis tempore. Libero delectus quam debitis at a.</p>
                    <p className="max-w-4xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, cumque assumenda quae porro mollitia ipsa incidunt similique maiores officia, dolorem provident reiciendis.</p>
                    <h3 className="font-bold text-xl">Lorem, ipsum dolor.</h3>
                    <p className="max-w-4xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quia necessitatibus hic laborum, expedita ut totam temporibus autem eius dicta, iste esse similique delectus omnis sunt modi? Illo minima, porro sit quia accusamus quas quo architecto assumenda eos veritatis a pariatur atque nemo est veniam eaque rem! Natus debitis ea sunt est aperiam nemo quibusdam quae tempore deserunt praesentium. Repudiandae, accusantium assumenda?</p>
                    <h3 className="font-bold text-xl">Lorem dolor.</h3>
                    <p className="max-w-4xl text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore delectus, harum autem incidunt recusandae rem quos esse eius sequi ea cumque itaque deserunt? Earum veniam expedita dignissimos hic fuga voluptates excepturi. Obcaecati iure dolorum cupiditate necessitatibus perferendis vero, autem eaque optio ipsam aliquid, omnis esse veniam quisquam. Ratione reprehenderit quos esse, nulla, similique architecto necessitatibus aut molestias rerum consectetur omnis maiores distinctio eum magni quisquam. Quam reprehenderit tenetur dolorem eaque nihil! Dicta suscipit sint soluta necessitatibus voluptates?</p>
                </div>
            </Container>
        </MainLayout>
    )
}

export default AboutPage