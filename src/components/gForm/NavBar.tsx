import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../../redux/types';

const NavBar = ({ userInfo, currentState, setCurrentState, createNewForm }: {
  userInfo?: IUser,
  currentState?: "Edit" | "Preview" | "Res",
  setCurrentState?: React.Dispatch<React.SetStateAction<"Edit" | "Preview" | "Res">>,
  createNewForm?: () => void
}) => {
  const [dropdownToggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <header className="d-flex px-3 py-2 bg-white align-items-center w-100 justify-content-between">
      <Link to="/" className="d-flex align-items-center">
        <img src={'/google-form.svg'} className="me-2" style={{ width: '48px', height: '48px' }} alt="Logo" />
        <span className="fw-bold fs-5 text-secondary">Form</span>
      </Link>

      {currentState && setCurrentState && (
        <div className="d-flex mx-auto">
          <button
            className={`btn ${currentState === 'Edit' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={(event) => { event.preventDefault(); setCurrentState('Edit') }}
          >
            Questions
          </button>
          <button
            className={`btn ms-2 ${currentState === 'Res' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={(event) => { event.preventDefault(); setCurrentState('Res') }}
          >
            Responses
          </button>
          <button
            className={`btn ms-2 d-flex align-items-center ${currentState === 'Preview' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={(event) => { event.preventDefault(); setCurrentState('Preview') }}
          >
            Preview
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="ms-2" style={{ width: '16px', height: '16px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      )}

      <div className="d-flex align-items-center">
        {createNewForm && (
          <button
            className="btn btn-outline-primary me-3"
            onClick={(event) => { event.preventDefault(); createNewForm() }}
          >
            <span className="me-1">+</span>
            Create Form
          </button>
        )}

        <div className="position-relative">
          <button
            className="btn btn-link p-0"
            onClick={(event) => { event.preventDefault(); setToggle((prev) => !prev) }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="me-2" style={{ width: '40px', height: '40px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {userInfo && dropdownToggle && (
            <div id="dropdownAvatar" className="dropdown-menu dropdown-menu-end show">
              <div className="dropdown-header">
                <strong>{userInfo.name}</strong>
                {userInfo.email && <div className="text-muted">{userInfo.email}</div>}
              </div>
              <Link to="/" className="dropdown-item">Dashboard</Link>
              <Link to="/settings/profile" className="dropdown-item">View Profile</Link>
              <Link to="/settings" className="dropdown-item">Settings</Link>
              <div className="dropdown-divider"></div>
              <button
                className="dropdown-item"
                onClick={(event) => {
                  event.preventDefault();
                  axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })
                    .then((res) => {
                      if (res.data) {
                        window.location.href = `${import.meta.env.BASE_URL}`;
                      }
                    });
                }}
              >
                Logout
              </button>
            </div>
          )}

          {!userInfo && dropdownToggle && (
            <div id="dropdownAvatar" className="dropdown-menu dropdown-menu-end show">
              <Link to="/login" className="dropdown-item">Login</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
