import React, { Fragment } from 'react';
import { Row, Column } from '../../styles/styles';

import jeff from '../../assets/lawyerimgs/Soderberg_0107.jpg';

const Jeff = () => {
  return (
    <Fragment>
      <Column>
        <Row attpersonal>
          <Column attpersonal width="60%">
            <img src={jeff} />
          </Column>
          <Column attpersonal>
            <h1> Jeffrey W. Soderberg </h1>
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
              Jeffrey Soderberg is an experienced attorney who handles a wide
              range of legal matters, including civil litigation, real estate
              matters and estate planning and administration.
            </p>
            <p>
              Mr. Soderberg has experience in a wide range of civil litigation
              cases in both federal and state courts. He has represented
              numerous businesses in complex commercial litigation matters
              ranging from small matters to multimillion-dollar disputes. Mr.
              Soderberg has represented businesses and individuals in
              significant contract disputes, commercial loan workouts and
              foreclosures, construction cases, real estate matters, insurance
              disputes, defamation cases, and securities fraud, antitrust and
              employment discrimination claims.
            </p>
            <p>
              Mr. Soderberg has also successfully represented clients in
              significant personal injury litigation matters, including medical
              malpractice, product liability, premises liability and other tort
              cases. Mr. Soderberg also represents businesses and individuals in
              real estate and loan transactions and represents clients in will
              probate and estate administration matters.
            </p>
            <p>
              Mr. Soderberg began his career serving as a federal judicial clerk
              for the Honorable James McGirr Kelly in the United States District
              Court for the Eastern District of Pennsylvania. He spent several
              years handling complex commercial litigation matters at a large
              firm in Philadelphia. Before joining Mandracchia Law, LLC, Mr.
              Soderberg practiced law at a small firm in the Philadelphia
              suburbs where he managed a broad range of litigation matters.
            </p>
            <p>
              Mr. Soderberg graduated with honors from Pennsylvania State
              University, and graduated summa cum laude from Villanova
              University School of Law where he was a member of the Order of the
              Coif and a managing editor of the Law Review. He is admitted to
              practice in the Commonwealth of Pennsylvania, U.S. District Court
              for the Eastern District of Pennsylvania, U.S. District Court for
              the Middle District of Pennsylvania and the U.S. Court of Appeals
              for the Third Circuit.
            </p>
            <p>
              Mr. Soderberg is active in his church and his community, including
              serving on several non-profit Boards.
            </p>
          </Column>
        </Row>
        <Row attbiobot>
          <Column>
            <code> Update These </code>
            <h1> Areas of Practice </h1>
            <p> Commercial Law </p>
            <p> Commercial and Civil Litigation </p>
            <p> Criminal Law </p>
            <p> Personal Injury </p>
          </Column>
          <Column>
            <code> Update These </code>
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
            <code> Update These </code>
            <h1> Education </h1>
            <p> B.A., Villanova University, 1985 </p>
            <p> J.D., Villanova University, 1988 </p>
          </Column>
        </Row>
      </Column>
    </Fragment>
  );
};

export default Jeff;
