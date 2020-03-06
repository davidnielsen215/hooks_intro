import React, {useState} from 'react'

export default function App(){
  const [inputData, setInputData] = useState({firstName:'', lastName: ''})
  const [contact, setContact] = useState([])

  function handleChange(e){
    const {name, value} = e.target
    setInputData(prevState => ({...prevState, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    setContact(prevContact => [...prevContact, inputData])
  }

  const addContact = contact.map(contact => <h3>{contact.firstName} {contact.lastName}</h3>)
  
  console.log(inputData)
  console.log(contact)

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder="first name"
        name="firstName"
        value={inputData.firstName}
        onChange={handleChange}/>
        <input
        placeholder="last name"
        name="lastName"
        value={inputData.lastName}
        onChange={handleChange}/>
        <button>add contact</button>
      </form>
      {addContact}
    </div>
  )
}