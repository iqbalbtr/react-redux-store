import { Form, Stack } from "react-bootstrap"
import Input from "../element/input"

const PaymentForm = () => {

    return (
        <Form>
            <Stack className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold mb-12">Billing details</h1>
                <div className="flex justify-between gap-8">
                    <Input>
                        Fist Name
                    </Input>
                    <Input>
                        Last Name
                    </Input>
                </div>
                <Input>
                    Company Name
                </Input>
                <Input>
                    Street Address
                </Input>
                <Input>
                    Town
                </Input>
                <Input>
                    Province
                </Input>
                <Input>
                    Pos Code
                </Input>
                <Input>
                    Phone
                </Input>
                <Input>
                    Email address
                </Input>
            </Stack>
        </Form>
    )
}

export default PaymentForm