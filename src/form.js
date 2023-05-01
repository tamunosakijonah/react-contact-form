import { useRef , useState} from 'react'

const UncontrolledFormWithUseRef = () =>{
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log('email is ' + email)
        console.log('email is ' + password)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{padding:'8px'}}> 
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' ref={emailRef}/>
                </div>
                <div style={{padding:'8px'}}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' ref={passwordRef}/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}


const UncontrolledFormFromEvent = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        
        console.log('email is ' + email)
        console.log('email is ' + password)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{padding:'8px'}}> 
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text'/>
                </div>
                <div style={{padding:'8px'}}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password'/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
const ControlledForm =() =>{
    const [email,setEmail] =useState('')
    const[password,setPassword] =useState('')

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()        
        console.log('email is ' + email)
        console.log('email is ' + password)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{padding:'8px'}}> 
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' value={email} onChange={handleEmail}/>
                </div>
                <div style={{padding:'8px'}}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' value={password} onChange={handlePassword}/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

const OptimizedControlledForm =() =>{
    const [form,setForm] =useState({emai:'',password:''})

    const handleChange = (event) =>{
        const updatedForm ={...form,[event.target.id]:event.target.value}
        console.log(updatedForm)
        setForm(updatedForm)
    }
    const handleSubmit = (event) => {
        event.preventDefault()        
        console.log('email is ' + form.email)
        console.log('email is ' + form.password)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{padding:'8px'}}> 
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' value={form.email} onChange={handleChange}/>
                </div>
                <div style={{padding:'8px'}}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' value={form.password} onChange={handleChange}/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
export {UncontrolledFormFromEvent,UncontrolledFormWithUseRef,ControlledForm,OptimizedControlledForm}