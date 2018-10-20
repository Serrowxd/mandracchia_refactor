import React from 'react';
import { MainContainer, Row, Column } from '../../styles/styles';

import charles from '../../assets/lawyerimgs/Mandracchia_0091.jpg';

const Charles = () => {
  return (
    <MainContainer>
      <Column>
        <Row attpersonal>
          <Column attpersonal width="60%">
            <img src={charles} />
          </Column>
          <Column attpersonal>
            <h1> Charles D. Mandracchia </h1>
            <Row attpersonal width="75%">
              <p>
                <span>Email:</span> fjpqoewkjrp@fpqlekjrpaek.com
              </p>
              <p>
                <span>Phone:</span> 546149845
              </p>
              <p>
                <span>Fax:</span> 5165496849
              </p>
            </Row>
          </Column>
        </Row>
        <Row attbio>
          <Column>
            <p>
              <strong>Charles D. Mandracchia</strong> is a 1988 graduate of
              Villanova School of Law. He started the law firm in 1991 with only
              a handful of clients growing it into a firm representing
              individuals and both small and large corporations. He is a
              seasoned attorney practicing in both Federal and State Courts.
            </p>
            <p>
              Mr. Mandracchia began his career representing developers in
              commercial litigation and land development along with being a
              part-time Public Defender where he learned how to be a zealous
              advocate in the courtroom. His career blossomed in commercial
              litigation where he does most of his legal work but he never lost
              his zeal for the criminal courtroom.
            </p>
            <p>
              Mr. Mandracchia understands that whether you represent an
              individual, large corporation or a small business in commercial
              matters, they are all managed by people who can find themselves or
              family members on the wrong side of the law. Therefore, he makes
              sure the firm has the experience and expertise to represent them
              with extremely qualified and zealous representation, in commercial
              law and if necessary criminal law.
            </p>
            <p>
              Mr. Mandracchia is active in his church and community and has
              served on many non-profit Boards. He has three children and one
              grandchild and enjoys his time with his family.
            </p>
            <p>
              Mandracchia Law, LLC. is a full service law firm and handles all
              of your legal needs. If you want a zealous advocate, and a
              customized legal experience then give Charles D. Mandracchia a
              call. Please visit us at www.mmattorneys.com or call 610-584-0700.
            </p>
          </Column>
        </Row>
        <Row attbiobot>
          <Column>
            <h1> Areas of Practice </h1>
            <p> Commercial Law </p>
            <p> Commercial and Civil Litigation </p>
            <p> Criminal Law </p>
            <p> Personal Injury </p>
          </Column>
          <Column>
            <h1> Admitted to Practice </h1>
            <p> Pennsylvania Supreme Court, 1988 </p>
            <p> New Jersey Supreme Court, 1990 </p>
            <p> U.S District Court of New Jersey, 1990 </p>
            <p>
              U.S District Court, Eastern & Middle Districts of Pennsylvania,
              1990
            </p>
            <p> U.S Court of Appeals, 3rd Circuit, 1992 </p>
            <p> U.S Supreme Court, 2002 </p>
          </Column>
          <Column>
            <h1> Education </h1>
            <p> B.A., Villanova University, 1985 </p>
            <p> J.D., Villanova University, 1988 </p>
          </Column>
        </Row>
      </Column>
    </MainContainer>
  );
};

export default Charles;
