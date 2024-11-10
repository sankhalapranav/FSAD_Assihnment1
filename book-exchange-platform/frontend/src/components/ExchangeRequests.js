import React, { useEffect, useState } from "react";
import { fetchExchangeRequests } from "../services/api";

const ExchangeRequests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const getRequests = async () => {
            try {
                const response = await fetchExchangeRequests();
                setRequests(response.data);
            } catch (error) {
                alert("Failed to fetch exchange requests");
            }
        };
        getRequests();
    }, []);

    return (
        <div>
            <h2>Your Exchange Requests</h2>
            <ul>
                {requests.map((request) => (
                    <li key={request._id}>
                        <p>Book Title: {request.book.title}</p>
                        <p>Status: {request.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExchangeRequests;
