"use strict";

//Getting the Data from our Database
const getDataSet = () => ({
  "Jane Doe": "jdoe@babbel.com",
  "Jay Arun": "jayarun@linkedin.com",
  "David Stein": "davidstein@google.com",
  "Mat Lee": "matlee@google.com",
  "Marta Dahl": "mdahl@babbel.com",
  "Vanessa Boom": "vboom@babbel.com",
});

//Constants for Email Formats
const emailFormats = {
  FORMAT_ONE: "format1",
  FORMAT_TWO: "format2",
  BOTH: "both",
};

//This function will generate email address based on the name and domain
const generateEmails = (name, domain, format = emailFormats.BOTH) => {
  const [firstName, lastName] = name.toLowerCase().split(" ");
  switch (format) {
    case emailFormats.FORMAT_ONE: {
      return `${firstName}${lastName}@${domain}`;
    }
    case emailFormats.FORMAT_TWO: {
      return `${firstName.charAt(0)}${lastName}@${domain}`;
    }
    case emailFormats.BOTH: {
      return {
        emailOne: `${firstName}${lastName}@${domain}`,
        emailTwo: `${firstName.charAt(0)}${lastName}@${domain}`,
      };
    }
  }
};

//This function will determine the email format for the organization
const getOrganizationFormat = (domain) => {
  let emailFormat = emailFormats.BOTH;
  const emailDb = getDataSet();
  for (const key in emailDb) {
    const completeEmail = emailDb[key];
    const DomainInEmail = completeEmail.substring(
      completeEmail.lastIndexOf("@") + 1
    );

    if (DomainInEmail === domain) {
      const generatedEmails = generateEmails(key, domain);
      if (generatedEmails.emailOne === completeEmail) {
        emailFormat = emailFormats.FORMAT_ONE;
      } else {
        emailFormat = emailFormats.FORMAT_TWO;
      }
      break;
    }
  }
  return emailFormat;
};

module.exports.getEmail = (event, context, callback) => {
  // name, domain;
  try {
    const { name, domain } = JSON.parse(event.body);
    // Determine the Organization Format
    const orgFormat = getOrganizationFormat(domain);
    //Generated the both types of emails
    const email = generateEmails(name, domain, orgFormat);

    const response = {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ email }),
    };
    callback(null, response);
  } catch (err) {
    const response = {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
    callback(null, response);
  }
};
