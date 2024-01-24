import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-4xl mb-20 mt-10">
        <h1>Phishing Scams</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          className="h-[600px] w-full px-10 object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-xl mb-10 mt-10">
        <p>
          <b>Email Phishing</b>: Fraudulent emails that imitate legitimate
          sources to trick recipients into revealing personal information, such
          as passwords or financial details.
        </p>
        <p>
          <b>Smishing:</b>Similar to phishing, but conducted through text messages (SMS).
        </p>
      </div>
    </div>
  );
}

export default page;
