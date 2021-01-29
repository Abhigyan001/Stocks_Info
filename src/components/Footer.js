import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container bg-dark p-3 text-center mt-4">
        <span className="text-light">
          &copy;
          { ` ${(new Date()).getFullYear()} All rights reserved | site by Abhigyan Mahanta.`}
        </span>
      </div>
    </footer>
  );
}
