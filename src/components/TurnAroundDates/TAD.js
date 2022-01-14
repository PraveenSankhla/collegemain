import React, { useEffect } from "react";
import "./TAD.css";

const TAD = ({ setShowSideBar }) => {
  useEffect(() => {
    setShowSideBar(false);
    return () => {
      setShowSideBar(true);
    };
  }, []);
  
  return (
    <div className="body-block">
      <div className="main-block">
        <div className="main-block-2">
          <figure className="figure">
            <table className="table-main" border="1">
              <thead>
                <tr>
                  <th className="has-row" data-align="left">
                    Title of Paper
                  </th>
                  <th className="has-row" data-align="left">
                    Author
                  </th>
                  <th className="has-row" data-align="left">
                    Affiliation
                  </th>
                  <th className="has-row" data-align="left">
                    Date of Receipt
                  </th>
                  <th className="has-row-2" data-align="center">
                    Date of Acceptance
                  </th>
                  <th className="has-row-2" data-align="center">
                    Date of Publication
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="has-row" data-align="left">
                    Myanmar General Election (2020) and Rohingya Crisis: A Dark
                    Road to&nbsp; Democracy
                  </td>
                  <td className="has-row" data-align="left">
                    Muhammad Faridul Alam&nbsp; &nbsp; &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Associate Professor in the Department of International
                    Relations, University of Chittagong. Bangladesh
                  </td>
                  <td className="has-row" data-align="left">
                    12 Dec 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    14 Jan 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    25 Mar 2021
                  </td>
                </tr>

                {/* <tr>
                  <td className="has-row" data-align="left">
                    Happiness of College Teachers&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Dipankar Das, Md. Kutubuddin Halder&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    (i)Ph.D. Scholar at the Department of Education, University
                    of Calcutta. Kolkata (ii)Professor, Department of Education,
                    University of Calcutta. Kolkata
                  </td>
                  <td className="has-row" data-align="left">
                    18 Feb 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    11 Mar&nbsp; 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    25 Mar 2021
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    A Study on Emotions of Women at Workplace with Respect to
                    School&nbsp; Teachers in Selected Districts of Telangana
                    State
                  </td>
                  <td className="has-row" data-align="left">
                    Jyoti Mishra&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Research Scholar at Mewar University, Gangrar
                  </td>
                  <td className="has-row" data-align="left">
                    5 Jan 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    12 Mar&nbsp; 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    25 Mar 2021
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Teacher Development and Teacher Education&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Parul Agarwal, Dr. Ishrat Naaz&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    (i)School of Education, Galgotias University, Greater Noida
                    (ii)Assistant Professor, School of Education, Galgotias
                    University
                  </td>
                  <td className="has-row" data-align="left">
                    31 Dec 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    18 Feb 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    25 Mar 2021
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Anthropometric Study of Lower Extremity of Men of Delhi Ncr
                    For Footwear Last Modelling
                  </td>
                  <td className="has-row" data-align="left">
                    Sivasakthi Ekambaram, Chitra Arora&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Research Scholar with the Department of Fine &amp;
                    Performing Arts, Mewar University.
                  </td>
                  <td className="has-row" data-align="left">
                    6 Jan 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    12 Mar 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    25 Mar 2021
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    BOOK REVIEW
                  </td>
                  <td className="has-row" data-align="left">
                    Dr. Manisha Bose&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Lecturer, &nbsp;Institute of English Language Education,{" "}
                    <a href="https://www.researchgate.net/institution/Assumption_University_of_Thailand">
                      Assumption University of&nbsp; Thailand. &nbsp;
                    </a>
                  </td>
                  <td className="has-row" data-align="left">
                    20 Feb 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    22 Feb 2021
                  </td>
                  <td className="has-row-2" data-align="center">
                    25 Mar 2021
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Gender and Livelihoods in Rural Kashmir: A Study in
                    Baramulla and Bandipora Districts in North Kashmir
                  </td>
                  <td className="has-row" data-align="left">
                    Afsana Rashid
                  </td>
                  <td className="has-row" data-align="left">
                    Assistant Professor, University of Kashmir, Srinagar
                  </td>
                  <td className="has-row" data-align="left">
                    28 Jun 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    15 Oct 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    30 Nov 2020
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Protest Politics of Rural Crisis
                  </td>
                  <td className="has-row" data-align="left">
                    Annavajhula J.C. Bose, Surendra Pratap
                  </td>
                  <td className="has-row" data-align="left">
                    (i)Associate Professor
                    <br />
                    Department of Economics
                    <br />
                    Shri Ram College of Commerce
                    <br />
                    University of Delhi (ii)Director, centre for Workers
                    Education, New Delhi
                  </td>
                  <td className="has-row" data-align="left">
                    23&nbsp; Sept 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    1 Oct 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    30 Nov 2020
                  </td>
                </tr> */}

                {/* <tr>
                  <td className="has-row" data-align="left">
                    Role of Social Media in Teaching and Learning Process: An
                    Overview of Lockdown Period due to Covid-19 Pandemic
                  </td>
                  <td className="has-row" data-align="left">
                    Ali Abdulrahman Saad, Dr. Pooja Gupta
                  </td>
                  <td className="has-row" data-align="left">
                    Department of Education, Mewar University Department of
                    Education, Mewar University
                  </td>
                  <td className="has-row" data-align="left">
                    13 July 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    16 Oct 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    30 Nov 2020
                  </td>
                </tr> */}

                <tr>
                  <td className="has-row" data-align="left">
                    An Application of Student Data to Forecast Education Results
                    of Student by Using Classification Techniques
                  </td>
                  <td className="has-row" data-align="left">
                    Abhilasha Dangi, Dr. Sumit Srivastava
                  </td>
                  <td className="has-row" data-align="left">
                    (i) Research Scholar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mewar
                    University (ii)Associate Professor, Dept of Computer
                    Engneering, Manipal university, Jaipur &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    7 Aug 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    19 Oct 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    30 Nov 2020
                  </td>
                </tr>

                {/* <tr>
                  <td className="has-row" data-align="left">
                    Sustainable Construction: From Pre-Engineered to
                    Prefabricated Prefinished Volumetric Construction
                    (PPVC)&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    H. L. Chawla, Dr. P. R. Swarup
                  </td>
                  <td className="has-row" data-align="left">
                    (i) Research Scholar, Mewar University (ii) Director
                    General, Construction Industry Development Council( CIDC),
                    New Delhi
                  </td>
                  <td className="has-row" data-align="left">
                    5 Sept 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    20 Oct 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    30 Nov 2020
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Assessment of Tissue Damage to Surroundings after
                    Implantation of Liquid Embolic System&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Archana Kumari, Dr. M.L.Aggarwal, Dr. Binu Bhat
                  </td>
                  <td className="has-row" data-align="left">
                    Scientist, Shriram Institute for Industrial Research(SIIR),
                    University Road, New Delhi Deputy Director, SIIR Senior
                    Assistant Director, SIIR
                  </td>
                  <td className="has-row" data-align="left">
                    28 Sept 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    21 Oct 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    30Nov 2020
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Trends in Social Sector Expenditure in India (2005-2019)
                  </td>
                  <td className="has-row" data-align="left">
                    Mukul Kumar
                  </td>
                  <td className="has-row" data-align="left">
                    Department of Economics, Shri Ram College of Commerce,
                    University of Delhi
                  </td>
                  <td className="has-row" data-align="left">
                    9 May 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    27 June 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    22 July 2020
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Role of India’s Technological Innovations to Mitigate
                    Covid-19 Pandemic
                  </td>
                  <td className="has-row" data-align="left">
                    Dr. Manish Mohan Gore
                  </td>
                  <td className="has-row" data-align="left">
                    Scientist, CSIR-National Institute of Science Communication
                    and Information Resources (NISCAIR), New Delhi
                  </td>
                  <td className="has-row" data-align="left">
                    18 May 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    6 July 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    22 July 2020
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Covid-19 Pandemic: Tracing the Beginning of Corona Virus
                    Outbreak?
                  </td>
                  <td className="has-row" data-align="left">
                    Priyanka Dhargave
                  </td>
                  <td className="has-row" data-align="left">
                    Center for Chinese Studies, School of Language, Literature
                    and Cultural Studies, Central University of Gujarat
                  </td>
                  <td className="has-row" data-align="left">
                    29 Apr2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    6 July 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    22 July 2020
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Abnormalities of Blood Circulation Through Narrowed Artery
                    in the Existence of Some Parameters
                  </td>
                  <td className="has-row" data-align="left">
                    Sanjeev Kumar Sharma, Jyoti Singh Raghav, Pramod Mehta
                  </td>
                  <td className="has-row" data-align="left">
                    Department of Mathematics, Mewar UniversityDepartment of
                    Mathematics, Mewar UniversityDepartment of Mathematics,
                    Mewar University
                  </td>
                  <td className="has-row" data-align="left">
                    17 Mar 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    2 July 2020
                  </td>
                  <td className="has-row-2" data-align="center">
                    22 July 2020
                  </td>
                </tr> */}

                <tr>
                  <td className="has-row" data-align="left">
                    Synthetic Routes, Characterization and Biological
                    Significance of 1, 2, 4-Triazine Derivatives: Comprehensive
                    Review
                  </td>
                  <td className="has-row" data-align="left">
                    Aarfah Majid, A. M. Lawal, M.Ashid, B.K.Sarma, Ajit Joshi
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                </tr>

                <tr>
                  <td className="has-row" data-align="left">
                    Cyclic Peptides as Therapeutic Agents and Biochemical
                    Tools&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Deepshikha Verma, V.N. Rajasekharan Pillai
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                </tr>

                {/* <tr>
                  <td className="has-row" data-align="left">
                    Hypoxic Mechanisms in the Carbon Monoxide – Induced Injury
                    to Cardiac &amp; Other Tissues in Acute Poisoning : A Note
                    on the Role&nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    Sunder S Samuel, Mayadhar Barik
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                </tr> */}

                {/* <tr>
                  <td className="has-row" data-align="left">
                    Incubation Centres: Impact on Research and Entrepreneurship
                    Aspirants
                  </td>
                  <td className="has-row" data-align="left">
                    Manoj Varghese
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row" data-align="left">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                  <td className="has-row-2" data-align="center">
                    &nbsp;
                  </td>
                </tr> */}
              </tbody>
            </table>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default TAD;
