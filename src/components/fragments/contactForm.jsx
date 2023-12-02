import Input from "../element/input"
import { Form } from "react-bootstrap"


const ContactForm = () => {

    return(
        <Form className="flex gap-6 flex-col">
                                <Input
                                    name="name"
                                    placeholder="jhon dea"
                                >
                                    Your Name
                                </Input>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="..@gmail.com"
                                >
                                    Email address
                                </Input>
                                <Input
                                    name="subject"
                                    placeholder="..."
                                >
                                    Subject
                                </Input>
                                <div className="flex flex-col gap-6 w-full">
                                    <span>Massage</span>
                                    <textarea rows={8} type="text" placeholder="Hi.. " name="massage" required className="p-4 border border-slate-600 rounded-lg"> </textarea>
                                </div>
                                <button type="submit" className="py-4 px-12 w-fit bg-primary text-white">Submit</button>
                            </Form>
    )
}

export default ContactForm