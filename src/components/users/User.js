import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        pincode: "",
        phone: "",
        description: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4 ">
            <Link className="btn btn-dark float-left ml-2 " to="/">
                Back
      </Link>
            <h4 className="display-4"><b>Name: {user.firstName + user.lastName}</b></h4>
            <hr />
            <ul className="list-group w-10">
                <li className="list-group-item"><b>User ID: </b>  {user.id}</li>
                <li className="list-group-item"><b>Email: </b> {user.email}</li>
                <li className="list-group-item"><b>City: </b> {user.city}</li>
                <li className="list-group-item"><b>Pincode: </b>{user.pincode}</li>
                <li className="list-group-item"><b>Phone: </b>{user.phone}</li>
                <li className="list-group-item"><b>Description: </b> {user.description}</li>
            </ul>
        </div>
    );
};

export default User;