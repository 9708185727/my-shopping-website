import React from 'react'
import { useForm } from 'react-hook-form'
import { addContact } from '../api/contact'
import { toast } from 'react-toastify'

const ContactForm = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
 async function submit(data){
console.log(data)
try {
  await addContact(data)
  toast("Successfully submitted your form",{
    type:"success"
  })
} catch (error) {
  console.log(error)
}}
  return (
    <>
       <form className="text-center my-4 w-auto" onSubmit={handleSubmit(submit)}>
            <div className="form-group my-4 ">
              <label htmlFor="name" className="text-1xl ">
                Name
              </label>
              <input
                className="border border-black ms-2 rounded-sm"
                type="text"
                id="name"
                {...register("name",{
                  required:"name is required"
                })}        
                      />
                        <p className="text-red-400">{errors?.name}</p>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                className="border border-black ms-2 rounded-sm"
                type="phone"
                id="phone"
                {...register("phone",{
                  required:"phone is required"
                })}  
              />
              <p className="text-red-400">{errors?.phone}</p>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="address">Address</label>
              <input
                className="border border-black ms-2 rounded-sm"
                type="address"
                id="address"
                {...register("address",{
                  required:"address is required"
                })}  
              />
              <p className="text-red-400">{errors?.address}</p>
            </div>

            <div className="form-group mt-5">
              <label htmlFor="message">Message</label>
              <textarea
                className="border border-black ms-2 rounded-sm h-5"
                id="message"
              
                {...register("message",{
                  required:"message is required"
                })}  
              ></textarea>
                <p className="text-red-400">{errors?.message}</p>
            </div>

            <button
              type="submit"
              className="px-4 my-3 py-1 bg-teal-500 rounded-md"
            >
              Submit
            </button>
          </form>
    </>
  )
}

export default ContactForm
