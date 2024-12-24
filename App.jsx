import React from 'react'
import Card from './components/Card'
const App = () => {

const users = [
  {
    "name": "Alice Johnson",
    "city": "New York",
    "age": 28,
    "profession": "Software Engineer",
    "profilePhoto": "https://example.com/photos/alice.jpg"
  },
  {
    "name": "Michael Smith",
    "city": "Los Angeles",
    "age": 35,
    "profession": "Graphic Designer",
    "profilePhoto": "https://example.com/photos/michael.jpg"
  },
  {
    "name": "Sophia Lee",
    "city": "Chicago",
    "age": 24,
    "profession": "Data Analyst",
    "profilePhoto": "https://example.com/photos/sophia.jpg"
  },
  {
    "name": "David Brown",
    "city": "San Francisco",
    "age": 40,
    "profession": "Product Manager",
    "profilePhoto": "https://example.com/photos/david.jpg"
  },
  {
    "name": "Emily Davis",
    "city": "Seattle",
    "age": 30,
    "profession": "Digital Marketer",
    "profilePhoto": "https://example.com/photos/emily.jpg"
  }
]



  return (
    <div>
      <div className='p-10'>
        {users.map(function(e, idx){
          return <Card key={idx} username={e.name} age={e.age} city={e.city} profession={e.profession} profile={e.profilePhoto} />
        })}
      </div>
    </div>
  )
}

export default App
