import React from 'react';

const ResponseList = ({ responses = [] }) => {
  if (!responses.length) {
    return <h3>No Replies Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Replies
      </h3>
      <div className="flex-row my-4">
        {responses &&
          responses.map((response) => (
            <div key={responset._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {response.responseAuthor} responded{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {response.createdAt}
                  </span>
                </h5>
                <p className="card-body">{response.responseText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ResponseList;
