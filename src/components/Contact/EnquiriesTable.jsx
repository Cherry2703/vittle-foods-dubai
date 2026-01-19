import './Contact.css'

const EnquiriesTable = ({ enquiries }) => {
  if (!enquiries || enquiries.length === 0) return null;

  return (
    <div className="table-wrapper">
      <h3>Enquiries</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Country</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.company}</td>
              <td>{e.email}</td>
              <td>{e.country}</td>
              <td>{e.message}</td>
              <td>{e.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnquiriesTable;
