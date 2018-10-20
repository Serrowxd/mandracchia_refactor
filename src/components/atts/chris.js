import React, { Fragment } from 'react';
import { Row, Column } from '../../styles/styles';

import chris from '../../assets/headshots/unnamednew.jpg';

const Chris = () => {
  return (
    <Fragment>
      <Column>
        <Row attpersonal>
          <Column attpersonal width="60%">
            <img src={chris} />
          </Column>
          <Column attpersonal>
            <h1> Christopher D. Mandracchia </h1>
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
              A zealous advocate and former prosecutor employed with a full
              service law firm. Mr. Mandracchia is a lifelong resident of
              Montgomery County, PA and was born in Norristown, PA. He is a
              graduate of The Hill School, Duke University and St. Thomas
              University School of Law. Christopher D. Mandracchia, Esq. was
              admitted to practice in Pennsylvania in 2010 and in The United
              States District Court for the Eastern District of Pennsylvania on
              June 04, 2015. He is a successful trial attorney with the
              experience and skills to handle all of your litigation needs.
            </p>
            <p>
              Mr. Mandracchia handles Criminal Defense, DUI’s/DWI’s, Family Law,
              Personal Injury, Wills/Trusts, Traffic Violations, License
              Suspensions issues, and all of your litigation needs. Mr.
              Mandracchia strives to communicate, listen, and interact with his
              clients in order to give each client personalized representation.
              Each client will receive a unique and custom legal experience
              tailored to your individual case.
            </p>
            <p>
              After graduating from the Hill School, Mr. Mandracchia went to
              Duke University where he received his B.A. in English with a minor
              in History and was a member of the Duke University Varsity
              Wrestling Team. Mr. Mandracchia went on to attend St. Thomas
              University School of Law in Miami, Florida where he was an intern
              for a Criminal Defense Firm and graduated in 2010.
            </p>
            <p>
              Attorney Mandracchia was an Assistant District Attorney in Berks
              County, PA from 2010 to 2015 where he gained valuable knowledge
              and experience of the criminal justice system. Mr. Mandracchia
              prosecuted and managed many cases from inception to trial. Mr.
              Mandracchia continued to expand his knowledge through specialized
              training while employed as a Prosecutor. He is a graduate of Top
              Gun at the Northeast Counterdrug Training Center in Ft. Indiantown
              Gap, PA. He gained valuable knowledge and training in various
              fields of criminal law and has specialized training dealing with
              Sex Crimes, Drug Crimes, Gang Crimes, as well as DUI/DWI matters.
            </p>
            <p>
              Mandracchia Law, LLC. is a full service law firm and handles all
              of your legal needs. If you want a zealous advocate, and a
              customized legal experience then give Christopher D. Mandracchia,
              Esquire a call. Please visit us at www.mmattorneys.com or call
              610-584-0700.
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

export default Chris;
