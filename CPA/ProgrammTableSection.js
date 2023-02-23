import Image from 'next/image'

const ProgrammTableSection = () => {
  return (
    <>
      <section className="table-section">
        <div className="container-l">
          <div className="table-container">
            <table className="table" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th>US CPA for CA’s <br /> (Chartered Accountants) in India</th>
                  <th>US CPA for CS’s <br/> (Company Secretaries) in India</th>
                  <th>US CPA for CMA’s <br /> (Certified Management Accountant) in India</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="US CPA for CA’s">
                    <p>A few state boards of US have an MoU with the ICAI which allows the chartered accountants to take the US CPA exam without pursuing any additional degree in accounting, commerce or other streams, which are usually required for non-CA’s. India CA and US CPA are similar in a few ways, <a href="javascript:;" className='read-more'>Read More</a></p>
                  </td>
                  <td data-label="US CPA for CA’s">
                    <p>Like the CA’s, a few state boards of US have an MoU with the ICSI which allows the company secretaries (CS) to take the US CPA exam. However, it varies with the state board of accountancy. <a href="javascript:;" className='read-more'>Read More</a></p>
                  </td>
                  <td data-label="US CPA for CA’s">
                    <p>
                    <span>CMA is a popular professional credential in India. Thousands of CMA's pursue CPA for various reasons.</span>
                    

                      <span>
                      <strong>Career shift from Cost Accounting to Other accounting:</strong>
                      <br />
                      While CPA focuses on all parts of accounting, CMA focuses on Cost Accounting. <a href="javascript:;" className='read-more'>Read More</a>
                      </span>
                      </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
export default ProgrammTableSection;