import { useRef } from "react"

export const ProjectForm = () => {
    const inputFirstName = useRef<HTMLInputElement>(null)
    const inputLastName = useRef<HTMLInputElement>(null)
    const inputAge = useRef<HTMLInputElement>(null)

    const formData = {firstName: "", lastName: "", age: ""}

    const onSubmitHandler = (event) => {
        event.preventDefault();
        formData.firstName = inputFirstName?.current?.value||""
        formData.lastName = inputLastName?.current?.value||""
        formData.age = inputAge?.current?.value||""
        console.log(formData)
	//Form submission happens here
    }


    return(
        <form onSubmit={onSubmitHandler}>
            <div><label htmlFor="first_name">First Name</label></div>
            <div><input id="first_name" ref={inputFirstName} type="text"/></div>
            <div><label htmlFor="last_name">Last Name</label></div>
            <div><input id="last_name" ref={inputLastName} type="text"/></div>
            <div><label htmlFor="age">Age</label></div>
            <div><input id="age" ref={inputAge} type="number"/></div>
            <input type="submit"/>
        </form>
    )
}