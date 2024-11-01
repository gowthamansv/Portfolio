import React from 'react';
import { IoClose } from "react-icons/io5";

const Contact = ({close}) => {
    return (
        <div className="" onClick={close} id='main'>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-end'><button className='close text-2xl p-2 rounded-full' onClick={close}><IoClose /></button></div>
            <div className='flex flex-row justify-between'>
                <h2>Contact</h2>
            </div>
            <form>
									<div className="fields">
										<div className="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div className="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div className="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="4"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Send Message" className="primary" /></li>
										<li><input type="reset" value="Reset" /></li>
									</ul>
								</form>
          </div>
        </div>
    );
};

export default Contact;