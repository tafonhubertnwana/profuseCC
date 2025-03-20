import * as React from 'react';

export default function ConsultationEmail({ firstName, lastName, phoneNumber, email, company, interest, date, time, comments }) {
  return (
    <div>
      <h1>New Consultation Request</h1>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Phone Number:</strong> {phoneNumber}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Area of Interest:</strong> {interest}</p>
      <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Comments:</strong> {comments}</p>
    </div>
  );
}