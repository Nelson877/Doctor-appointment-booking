function Contact() {
  return (
    <section>
      <div className='mx-auto px-4 max-w-screen-md'>
        <h2 className='heading text-center'>
          Contact <span className='text-primaryColor'>Us</span>
        </h2>
        <p className='text-center mb-8 lg:mb-16 font-light text__para'>
          Got a technical issue? Want to send feedback about a bate feature? Let
          us know
        </p>
        <form action='#' className='space-y-8'>
          {/* email start  */}
          <div>
            <label htmlFor='email' className='form__label'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              className='form__input mt-1'
              placeholder='example@gmail.com'
            />
          </div>
          {/* email end  */}
          {/* sujet start  */}
          <div>
            <label htmlFor='email' className='form__label'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='form__input mt-1'
              placeholder='Let us know we can help you ...'
            />
          </div>
          {/* sujet end  */}
          {/* message start  */}
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='form__label'>
              Your Message
            </label>
            <textarea
            rows='6'
              type='text'
              id='message'
              className='form__input mt-1'
              placeholder='Leave a comment...'
            />
          </div>
          {/* message end  */}
          <button type="submit" className="btn sm:w-fit rounded">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
