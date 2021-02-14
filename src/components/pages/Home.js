import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from 'jquery';
import DataTable from 'datatables.net';




const Home = () => {
    const [users, setUser] = useState([]);
    const [id, setId] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/users");
        setUser(result.data);
        if (!$.fn.DataTable.isDataTable('#myTable')) {
            $('#myTable').DataTable({ "pageLength": 5, });
        }

    };



    // const showModal = (id) => {
    //     setId(id)
    //     setIsModalVisible(true);
    // };

    // const handleOk = () => {
    //     deleteUser(id)
    //     setIsModalVisible(false);
    // };

    // const handleCancel = () => {
    //     setIsModalVisible(false);
    // };


    const deleteUser = async id => {
        await axios.delete(`http://localhost:3004/users/${id}`);
        if (!$.fn.DataTable.isDataTable('#myTable')) {
            $('#myTable').DataTable({ "pageLength": 5, });
        }

        loadUsers();
    };


    return (
        <>
            {/* { <Modal id="mdl" title="Warning!" visible={false} onOk={handleOk} onCancel={handleCancel}>
                <p>Are you sure you want to delete this user?</p>
            </Modal>} */}
            <div className="container">

                <div className="py-4">
                    <h1 className="mb-9">Users Information Table</h1>
                    <table id="myTable" class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="myTbody">
                            {users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td style={{ textAlign: "center" }} className="textAlign">{user.firstName}</td>
                                    <td style={{ textAlign: "center" }} className="textAlign">{user.lastName}</td>
                                    <td style={{ textAlign: "center" }} className="textAlign">{user.email}</td>
                                    <td style={{ textAlign: "center" }} className="textAlign">{user.city}</td>

                                    <td style={{ textAlign: "center" }} className="textAlign">
                                        <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                            View
                                    </Link>
                                        <Link class="btn btn-outline-primary mr-2"
                                            to={`/users/edit/${user.id}`}  >
                                            Edit
                                    </Link>
                                        <Link
                                            class="btn btn-danger"
                                            onClick={() => deleteUser(user.id)} >
                                            Delete
                                    </Link>

                                    </td>
                                </tr>
                            ))}
                            {/* <div class="col-md-12 text-center">
                                <ul class="pagination pagination-lg pager" id="myPager"></ul>
                            </div> */}
                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

};

export default Home;