import React, { useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import { data, id, users } from "jquery";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        pincode: "",
        phone: "",
        description: ""
    });
    const [match, setMatch] = useState(false)
    const { firstName, lastName, email, city, pincode, phone, description } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const [emailError, setEmailError] = useState('');





    const onSubmitUser = async e => {
        e.preventDefault();

        // validator.isEmail(value)



        let matching = false

        // const result = await axios.get("http://localhost:4005/getUsers");

        // result.data.data.map((users) => {
        //     if (users.email == user.email) {

        //         setMatch(true)
        //         matching = true

        //     }

        // })

        if (!matching) {
            await axios.post("https://users-informations.herokuapp.com/addUser", user);
            history.push("/");


        }

    }



    return (
        <div className="container">
            <Link className="btn btn-dark float-left mt-4" to="/">
                Back
      </Link>

            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmitUser(e)}  >
                    <div className="form-group"   >

                        <input
                            minLength="3"
                            maxLength="15"
                            pattern="[a-z, A-Z]+"
                            type="firstName"
                            className="form-control form-control-lg"
                            placeholder="Enter Your First Name"
                            name="firstName"
                            value={firstName}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                    <div style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }} className="form-group">
                        <input
                            minLength="1"
                            maxLength="10"
                            pattern="[a-z, A-Z]+"

                            type="lastName"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                    <div className=" form-group ">
                        <div class="alert alert-warning" role="alert" style={{ color: "red", display: match ? "block" : "none" }}>Email is already present</div>
                        <input
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            pattern="[a-z, A-Z]+"
                            type="test"
                            className="form-control form-control-lg"
                            placeholder="Enter Your City"
                            name="city"
                            value={city}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            minLength="6"
                            maxLength="6"
                            pattern="[0-9]+"
                            type="pincode"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Pincode"
                            name="pincode"
                            value={pincode}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            minLength="10"
                            maxLength="10"
                            pattern="[0-9]+"
                            type="phone"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">

                        <input
                            minLength="6"
                            maxLength="50"
                            type="description"
                            className="form-control form-control-lg"
                            placeholder="Enter Description"
                            name="description"
                            value={description}
                            onChange={e => onInputChange(e)}
                            required
                        />

                    </div>

                    <button className="btn btn-success btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
}


export default AddUser;