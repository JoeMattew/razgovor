import React from 'react';

const Form = () => {
  return (
    <div>
      {/* Replace the action URL and inputs with the one provided by Loops */}
      <form action="https://app.loops.so/api/newsletter-form/your-form-id" method="POST">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          style={{ padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3498db', color: '#fff' }}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Form;
