import React from 'react';
import Link from 'next/link';
import Text from 'reusecore/src/elements/Text';
import CopyrightWrapper from './copyright.style';

const Copyright = ({ data }) => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {data.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <Link href="#1">
              <a>
                <i className={profile.icon} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Text content="Copyrights 2019 @RedQ Inc" />
    </CopyrightWrapper>
  );
};

export default Copyright;
