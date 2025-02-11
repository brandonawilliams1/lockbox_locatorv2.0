import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/examples");
        setAddress(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Property Information</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="list-group">
          {address.map((address) => (
            <li key={address._id} className="list-group-item">
              <h5>{address.title}</h5>
              <p>{address.content}</p>
            </li>
          ))}
        </ul>
      )}
      <Link to="/create" className="btn btn-primary mt-3">
        Create New
      </Link>
    </div>
  );
};
