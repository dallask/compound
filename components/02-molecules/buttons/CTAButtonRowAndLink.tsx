import React from 'react';
import CTAButton from '../01-atoms/buttons/CTAButton';
import LinkAtom from '../01-atoms/links/LinkAtom';

interface CTAButtonRowAndLinkProps {
  buttonTexts: string[];
  linkText: string;
  linkUrl: string;
  onClicks: (() => void)[];
  buttonClassNames?: string[];
  linkClassName?: string;
}

const CTAButtonRowAndLink: React.FC<CTAButtonRowAndLinkProps> = ({
  buttonTexts,
  linkText,
  linkUrl,
  onClicks,
  buttonClassNames = ['', '', ''],
  linkClassName = '',
}) => {
  return (
    <div className="cta-button-row-and-link">
      <div className="cta-buttons-row">
        {buttonTexts.map((text, index) => (
          <CTAButton
            key={index}
            buttonText={text}
            onClick={onClicks[index]}
            className={buttonClassNames[index]}
          />
        ))}
      </div>
      <LinkAtom text={linkText} url={linkUrl} className={linkClassName} />
    </div>
  );
};

export default CTAButtonRowAndLink;