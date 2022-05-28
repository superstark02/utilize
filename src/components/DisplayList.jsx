import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername, updateEmail, updateProduct, updateQty } from "./Users";
import React, {useState} from "react";

export default function DisplayList({ userList }) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newMail, setNewMail] = useState("");
    const [newProduct, setNewProduct] = useState("");
    const [newQty, setNewQty] = useState("");

    return (
        <div>
            <table className="table" >
                <tr>
                    <th>
                        customer_name
                    </th>
                    <th>
                        customer_email
                    </th>
                    <th>
                        product
                    </th>
                    <th>
                        quantity
                    </th>
                </tr>
                <tr>
                    <th>
                        <input
                            type="text"
                            placeholder="Name..."
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                    </th>
                    <th>
                        <input
                            type="text"
                            placeholder="Mail..."
                            onChange={(event) => {
                                setNewMail(event.target.value);
                            }}
                        />
                    </th>
                    <th>
                        <input
                            type="text"
                            placeholder="Product..."
                            onChange={(event) => {
                                setNewProduct(event.target.value);
                            }}
                        />
                    </th>
                    <th>
                        <input
                            type="text"
                            placeholder="Qty..."
                            onChange={(event) => {
                                setNewQty(event.target.value);
                            }}
                        />
                    </th>
                    <td>
                        <td>
                            <button
                                onClick={() => {
                                    dispatch(
                                        addUser({
                                            id: userList[userList.length - 1].id + 1,
                                            customer_name: username,
                                            customer_email: newMail,
                                            product: newProduct,
                                            quantity: newQty
                                        })
                                    );
                                }}
                            >
                                Create Order
                            </button>
                        </td>
                    </td>
                </tr>
                {userList.map((user) => {
                    return (
                        <tr key={user.id} >
                            <td>
                                {user.customer_name}
                            </td>
                            <td>
                                {user.customer_email}
                            </td>
                            <td>
                                {user.product}
                            </td>
                            <td>
                                {user.quantity}
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="New Data..."
                                    onChange={(event) => {
                                        setNewUsername(event.target.value);
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        dispatch(
                                            updateUsername({ id: user.id, customer_name: newUsername })
                                        );
                                    }}
                                >
                                    Update Username
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            updateEmail({ id: user.id, customer_email: newUsername })
                                        );
                                    }}
                                >
                                    Update Email
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            updateProduct({ id: user.id, product: newUsername })
                                        );
                                    }}
                                >
                                    Update Product
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            updateQty({ id: user.id, quantity: newUsername })
                                        );
                                    }}
                                >
                                    Update Qty
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(deleteUser({ id: user.id }));
                                    }}
                                >
                                    Delete User
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}