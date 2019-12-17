import React from 'react';
import './CardHeader.scss';
import { Title, Subtitle } from '../Text/Text';

interface IProps {
  content?: string;
  subtitle?: string;
  icon?: string;
  className?: string;
}

export const CardHeader = ({ content, subtitle, className, icon }: IProps) => {
  return (
    <div id="card-header--container" className={className}>
      {icon && (
        <div className="icon--container">
          <img className="icon" src={icon} alt="title" />
        </div>
      )}
      <div className="text--container">
        {content && <Title content={content} className="no-margin" />}
        {subtitle && <Subtitle content={subtitle} className="no-margin" />}
      </div>
    </div>
  );
};

export default CardHeader;
