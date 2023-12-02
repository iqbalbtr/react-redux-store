import { Card, Container, Row } from "react-bootstrap"
import Title from "../title/title"

const RangeBrowser = () => {
    return (
        <div className="my-12 flex justify-center mx-4 md:mx-32">
            <Container>
                <Row>
                    <Title>
                        Browse The Range
                    </Title>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque?</p>
                </Row>
                <Row className="flex md:flex-row flex-col gap-6 mt-16 px-8 md:px-0">
                    <Card>
                        <Card.Img variant="top" src="/assets/img/range-1.png" />
                        <Card.Body>
                            <Card.Title className="text-center font-semibold mt-4 text-xl">Bedroom</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/assets/img/range-2.png" />
                        <Card.Body>
                            <Card.Title className="text-center font-semibold mt-4 text-xl">Living</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/assets/img/range-3.png" />
                        <Card.Body className="text-center font-semibold mt-4 text-xl">
                            <Card.Title>Dining</Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
export default RangeBrowser