import './App.css';
import { useState } from "react"
import axios from "axios"
import { nanoid } from 'nanoid'

const INITIAL_STATE = {email:'',name:'',textArea:'',subject:''}
const VALIDATION = {
    email: [
      {
        isValid: (value) => !!value,
        message: 'Is required.',
      },
      {
        isValid: (value) => /\S+@\S+\.\S+/.test(value),
        message: 'Needs to be an email.',
      },
    ],
    name: [
      {
        isValid: (value) => !!value,
        message: 'Is required.',
      },
    ],
    textArea: [
        {
          isValid: (value) => !!value,
          message: 'Is required.',
        },
      ],
  };
  
  const getErrorFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key]) return acc;
  
      const errorsPerField = VALIDATION[key]
        // get a list of potential errors for each field
        // by running through all the checks
        .map((validation) => ({
          isValid: validation.isValid(form[key]),
          message: validation.message,
        }))
        // only keep the errors
        .filter((errorPerField) => !errorPerField.isValid);
  
      return { ...acc, [key]: errorsPerField };
    }, {});
  
  

const ContactForm =() =>{
    const [form,setForm] =useState(INITIAL_STATE)
    const errorFields = getErrorFields(form);
    console.log(errorFields);



    const handleChange = (event) =>{
        const updatedForm ={...form,[event.target.id]:event.target.value}
        console.log(updatedForm)
        setForm(updatedForm)
    }
    const handleSubmit = (event) => {
        event.preventDefault() 
        axios.post('https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries',{
            id: nanoid(),
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.textArea

        }) 
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return;



        console.log('email is ' + form.email)
        console.log('password is ' + form.name)
        console.log('subject is ' + form.subject)
        console.log('message is ' + form.textArea)
        setForm(INITIAL_STATE)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{padding:'8px'}}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' placeholder="enter name" value={form.name} onChange={handleChange}/>
                    {errorFields.name?.length ? (
                    <span style={{ color: 'red' }}>
                        {errorFields.name[0].message}
                    </span>
                    ) : null} 
                    

                </div>
                <div style={{padding:'8px'}}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email'placeholder='example@email.com' value={form.email} onChange={handleChange}/>
                    {errorFields.email?.length ? (
                    <span style={{ color: 'red' }}>
                        {errorFields.email[0].message}
                    </span>
                    ) : null}
                    

                </div>
                <div style={{padding:'8px'}}>                
                    <label htmlFor='subject'>subject</label>
                    <input id='subject' type='text' value={form.subject} onChange={handleChange}/>
                    {errorFields.subject?.length ? (
                    <span style={{ color: 'red' }}>
                        {errorFields.subject[0].message}
                    </span>
                    ) : null}

                </div>
                <div style={{padding:'8px'}}>
                    <label htmlFor='textArea'>Message</label>
                    <textarea id='textArea' type='text' rows='10' value={form.textArea} onChange={handleChange}/>
                    {errorFields.textArea?.length ? (
                    <span style={{ color: 'red' }}>
                        {errorFields.textArea[0].message}
                    </span>
                    ) : null}
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
export default ContactForm