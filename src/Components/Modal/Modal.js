import React from 'react';

const Modal = ({ rights, wrongs, total }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className="font-bold text-2xl text-purple-600 my-5 underline">Dynamic Quiz Contest</h1>
                    <h3 className="font-bold text-lg text-white">Total Quiz Questions: {total.length}</h3>
                    <h3 className="font-bold text-lg text-green-600">Total Correct Answers: {rights.length}</h3>
                    <h3 className="font-bold text-lg text-red-600">Total Wrong Answers: {wrongs.length}</h3>
                    <p className="py-4">{rights.length > 6 ? "You have done well!!!" : "Go and work hard!!!"}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Thank You</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;