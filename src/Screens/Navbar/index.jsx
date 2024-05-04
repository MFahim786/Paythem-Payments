// Dashboard.js

import React from 'react';
import { Link,useNavigate} from 'react-router-dom';

import '../../Css/navbar.css';
const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/dashboard/Onboarding">Onbording</Link>
          </li>
          <li>
            <Link to="/dashboard/PayPortal">Pay Portal</Link>
          </li>
          <li>
            <Link to="/dashboard/show-videos">Notification</Link>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

    </div>
  );
};
export default Dashboard;
