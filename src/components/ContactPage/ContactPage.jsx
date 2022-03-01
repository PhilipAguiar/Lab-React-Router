import React from 'react'

function ContactPage({username}) {
  return (
    <section>
      <h1>Contact</h1>
      <p>Sorry, {username}. We are not accepting at this time.</p>
    </section>
  )
}

export default ContactPage