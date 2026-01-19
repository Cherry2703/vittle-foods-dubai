import { useState } from "react";
import Contact from "../Contact/Contact";
import EnquiriesTable from "../Contact/EnquiriesTable";

const ContactPage = () => {
  const [enquiries, setEnquiries] = useState(() => {
    return JSON.parse(localStorage.getItem("vitalfoods_enquiries") || "[]");
  });

  return (
    <>
      <Contact enquiries={enquiries} setEnquiries={setEnquiries} />
      <EnquiriesTable enquiries={enquiries} />
    </>
  );
};

export default ContactPage;
